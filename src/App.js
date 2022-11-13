import React from "react";

import { GlobalProvider } from "./context/GlobalContext";
import Jobs from "./components/jobs/Jobs";
import Schedule from "./components/schedule/Schedule";
import "./App.css";

function App() {
  return (
    <GlobalProvider>
      <Jobs />
      <Schedule />
    </GlobalProvider>
  );
}

export default App;
