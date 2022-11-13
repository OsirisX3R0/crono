import dayjs from "dayjs";
import React, { createContext, useMemo, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);
  const schedule = useMemo(() => {
    let formattedJobs = jobs.reduce((formatted, j) => {
      // let cronJob = new CronJob(j);
      return [...formatted, ...j.todaysSchedule];
    }, []);

    formattedJobs.sort((a, b) =>
      dayjs(a.time).isAfter(b.time, "minute") ? 1 : -1
    );

    return formattedJobs;
  }, [jobs]);

  return (
    <GlobalContext.Provider value={{ jobs, schedule, setJobs }}>
      <div className="flex">{children}</div>
    </GlobalContext.Provider>
  );
};
