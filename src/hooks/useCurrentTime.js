import { useMemo, useState } from "react";
import dayjs from "dayjs";

import useInterval from "./useInterval";

const curr = dayjs();
const useCurrentTime = (dateFormat, timeFormat, onNewMinute) => {
  const format = useMemo(
    () => `${dateFormat} ${timeFormat}`,
    [dateFormat, timeFormat]
  );
  const [now, setNow] = useState(dayjs().format(`${dateFormat} ${timeFormat}`));
  const [prevMinute, setPrevMinute] = useState(curr.minute());
  const [currMinute, setCurrMinute] = useState(curr.minute());

  useInterval(() => {
    const next = dayjs();
    setNow(next.format(format));
    setPrevMinute(currMinute);
    setCurrMinute(next.minute());
    if (currMinute > prevMinute) {
      onNewMinute();
    }
  }, 1000);

  return now;
};

export default useCurrentTime;
