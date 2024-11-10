import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import PraticeTailwind from "./components/PraticeTailwind";
import RevenueCard from "./components/RevenueCard";
import Overview from "./components/Overview";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <PraticeTailwind /> */}
      <div className="m-5 mb-0 sm:ml-64 grid gap-8">
        <Overview />
      </div>
    </>
  );
}

export default App;
