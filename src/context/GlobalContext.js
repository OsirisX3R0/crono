import React, { createContext, useMemo, useState } from "react";
import dayjs from "dayjs";

import Layout from "../components/layout";
import useLocalStorage from "../hooks/useLocalStorage";
import useCurrentTime from "../hooks/useCurrentTime";

export const GlobalContext = createContext();

const dates = [
  "YYYY-DD-MM",
  // "YY-DD-MM",
  "YYYY-MM-DD",
  // "YY-MM-DD",
  "DD-MM-YYYY",
  "DD-MM-YY",
  "MM-DD-YYYY",
  "MM-DD-YY",
  "YYYY/DD/MM",
  // "YY/DD/MM",
  "YYYY/MM/DD",
  // "YY/MM/DD",
  "DD/MM/YYYY",
  "DD/MM/YY",
  "MM/DD/YYYY",
  "MM/DD/YY",
  "MMM D, YYYY",
  // "MMM D, YY",
  "MMM Do, YYYY",
  // "MMM Do, YY",
];

const times = [
  "H:mm",
  //"HH:mm",
  "H:mm:ss",
  //"HH:mm:ss",
  "h:mm a",
  "h:mm:ss a",
];

export const GlobalProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);
  const [dateFormats] = useState(dates);
  const [timeFormats] = useState(times);
  const [dateFormat, setDateFormat] = useLocalStorage(
    "dateFormat",
    "DD-MM-YYYY"
  );
  const [timeFormat, setTimeFormat] = useLocalStorage("timeFormat", "HH:mm");
  const now = useCurrentTime(dateFormat, timeFormat, () =>
    setJobs((prevJobs) => [...prevJobs])
  );
  const schedule = useMemo(() => {
    let formattedJobs = jobs.reduce(
      (formatted, j) => [...formatted, ...j.todaysSchedule],
      []
    );

    formattedJobs.sort((a, b) =>
      dayjs(a.time).isAfter(b.time, "minute") ? 1 : -1
    );

    return formattedJobs;
  }, [jobs]);

  return (
    <GlobalContext.Provider
      value={{
        jobs,
        now,
        dateFormat,
        timeFormat,
        setDateFormat,
        setTimeFormat,
        dateFormats,
        timeFormats,
        schedule,
        setJobs,
      }}
    >
      <Layout>{children}</Layout>
    </GlobalContext.Provider>
  );
};
