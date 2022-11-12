import React from "react";

import { GlobalProvider } from "./context/GlobalContext";
import Jobs from "./components/jobs/Jobs";
import Schedule from "./components/schedule/Schedule";
import "./App.css";

function App() {
  return (
    <GlobalProvider>
      <div className="flex">
        <Jobs />
        <Schedule />
      </div>
    </GlobalProvider>
  );
}

export default App;
