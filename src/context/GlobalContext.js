import dayjs from "dayjs";
import { createContext, useMemo, useState } from "react";
import CronJob from "../utils/CronJob";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);
  const schedule = useMemo(() => {
    let formattedJobs = jobs.reduce((formatted, j) => {
      let cronJob = new CronJob(j);
      return [...formatted, ...cronJob.todaysSchedule];
    }, []);

    formattedJobs.sort((a, b) =>
      dayjs(a.time).isAfter(b.time, "minute") ? 1 : -1
    );
  }, [jobs]);

  return (
    <GlobalContext.Provider value={{ schedule, setJobs }}>
      {children}
    </GlobalContext.Provider>
  );
};
