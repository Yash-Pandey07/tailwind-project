import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import PraticeTailwind from "./components/PraticeTailwind";
import RevenueCard from "./components/RevenueCard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    {/* <PraticeTailwind /> */}
    <div className="grid grid-cols-4">
    <RevenueCard title={"Amount pending"} amount={"7786.95"} orderCount = {13}/>
    </div>
    </>
  );
}

export default App;
