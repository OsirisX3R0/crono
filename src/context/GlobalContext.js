import React, { createContext, useMemo, useState } from "react";
import dayjs from "dayjs";

import Header from "../components/layout/Header";
import useInterval from "../hooks/useInterval";
import Layout from "../components/layout/Layout";

export const GlobalContext = createContext();

const format = "DD-MM-YYYY HH:mm";

export const GlobalProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);
  const [now, setNow] = useState(dayjs().format(format));
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
    setNow(dayjs().format(format));
  }, 1000);

  return (
    <GlobalContext.Provider value={{ jobs, now, schedule, setJobs }}>
      <Layout>{children}</Layout>
    </GlobalContext.Provider>
  );
};
