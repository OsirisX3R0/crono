import React, { createContext, useMemo, useState } from "react";
import dayjs from "dayjs";

import useInterval from "../hooks/useInterval";
import Layout from "../components/layout";

export const GlobalContext = createContext();

const format = "DD-MM-YYYY HH:mm";
const curr = dayjs();
export const GlobalProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);
  const [now, setNow] = useState(dayjs().format(format));
  const [prevMinute, setPrevMinute] = useState(curr.minute());
  const [currMinute, setCurrMinute] = useState(curr.minute());
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
    <GlobalContext.Provider value={{ jobs, now, schedule, setJobs }}>
      <Layout>{children}</Layout>
    </GlobalContext.Provider>
  );
};
