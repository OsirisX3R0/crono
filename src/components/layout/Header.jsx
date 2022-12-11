import React, { useState,useContext } from "react";
import { useEffect } from "react";

import { GlobalContext } from "../../context/GlobalContext";
import Select from '../core/Select'

const Header = () => {
  const { now, setFormat, dateFormats, timeFormats } = useContext(GlobalContext);
  const [dateFormat, setDateFormat] = useState('DD-MM-YYYY')
  const [timeFormat, setTimeFormat] = useState('HH:mm')

  useEffect(() => {
    let format = `${dateFormat} ${timeFormat}`
    setFormat(format)
  }, [dateFormat, timeFormat, setFormat])

  return (
    <header className="w-full grid justify-center text-center mb-5">
      <h1 >crono</h1>
      <h3 >{now}</h3>
      <div>
        <Select className='mr-3' name="dateFormat" items={dateFormats} value={dateFormat} onInput={(e) => setDateFormat(e.target.value)} />
        <Select name="timeFormat" items={timeFormats} value={timeFormat} onInput={(e) => setTimeFormat(e.target.value)} />
      </div>
    </header>
  );
};

export default Header;
