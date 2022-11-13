import React, { useState } from "react";
import dayjs from "dayjs";
import useInterval from "../../hooks/useInterval";

const format = "DD-MM-YYYY HH:mm";

const Header = () => {
  const [now, setNow] = useState(dayjs().format(format));

  useInterval(() => {
    setNow(dayjs().format(format));
  }, 1000);

  return (
    <header className="text-center mb-5">
      <h1>crono</h1>
      <h3>{now}</h3>
    </header>
  );
};

export default Header;
