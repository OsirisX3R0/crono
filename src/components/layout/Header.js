import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

const Header = () => {
  const { now } = useContext(GlobalContext);

  return (
    <header className="text-center mb-5">
      <h1>crono</h1>
      <h3>{now}</h3>
    </header>
  );
};

export default Header;
