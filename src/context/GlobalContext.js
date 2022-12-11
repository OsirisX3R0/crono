import React, { createContext, useMemo, useState } from "react";
import dayjs from "dayjs";

import useInterval from "../hooks/useInterval";
import Layout from "../components/layout";

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

const times = ["H:mm", "HH:mm", "H:mm:ss", "HH:mm:ss", "h:mm a", "h:mm:ss a"];

const curr = dayjs();
export const GlobalProvider = ({ children }) => {
  const [format, setFormat] = useState("DD-MM-YYYY HH:mm");
  const [jobs, setJobs] = useState([]);
  const [now, setNow] = useState(dayjs().format(format));
  const [prevMinute, setPrevMinute] = useState(curr.minute());
  const [currMinute, setCurrMinute] = useState(curr.minute());
  const [dateFormats] = useState(dates);
  const [timeFormats] = useState(times);
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

  useInterval(() => {
    const next = dayjs();
    setNow(next.format(format));
    setPrevMinute(currMinute);
    setCurrMinute(next.minute());
    if (currMinute > prevMinute) {
      setJobs((prevJobs) => [...prevJobs]);
    }
  }, 1000);

  return (
    <GlobalContext.Provider
      value={{
        jobs,
        now,
        dateFormats,
        timeFormats,
        format,
        setFormat,
        schedule,
        setJobs,
      }}
    >
      <Layout>{children}</Layout>
    </GlobalContext.Provider>
  );
};
