import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex justify-center text-xl font-semibold">Css</div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ backgroundColor: "yellow" }}>
          justifyContent : "center"
        </div>
        <div style={{ backgroundColor: "red" }}>H2</div>
        <div style={{ backgroundColor: "green" }}>H3</div>
      </div>

      <div className="flex justify-center border border-black text-xl font-semibold">
        Tailwind
      </div>

      {/* Flex justify-center */}
      <div className="flex justify-center border border-black">
        <div className="bg-yellow-300 p-2">justify-center</div>
        <div className="bg-red-300 p-2">justify-center</div>
        <div className="bg-green-300 p-2">justify-center</div>
      </div>

      {/* Flex justify-between */}
      <div className="flex justify-between border border-black">
        <div className="bg-yellow-300 p-2">justify-between</div>
        <div className="bg-red-300 p-2">justify-between</div>
        <div className="bg-green-300 p-2">justify-between</div>
      </div>

      {/* Flex justify-start */}
      <div className="flex justify-start border border-black">
        <div className="bg-yellow-300 p-2">justify-start</div>
        <div className="bg-red-300 p-2">justify-start</div>
        <div className="bg-green-300 p-2">justify-start</div>
      </div>

      {/* Flex justify-end */}
      <div className="flex justify-end border border-black">
        <div className="bg-yellow-300 p-2">justify-end</div>
        <div className="bg-red-300 p-2">justify-end</div>
        <div className="bg-green-300 p-2">justify-end</div>
      </div>

      {/* Flex justify-around */}
      <div className="flex justify-around border border-black">
        <div className="bg-yellow-300 p-2">justify-around</div>
        <div className="bg-red-300 p-2">justify-around</div>
        <div className="bg-green-300 p-2">justify-around</div>
      </div>

      {/* Grid Layout */}
      <div className="flex justify-center border border-black text-xl font-semibold">
        Grid with 3 col
      </div>
      <div className="grid grid-cols-3 border border-black">
        <div className="bg-yellow-300 p-2">H1</div>
        <div className="bg-red-300 p-2">H2</div>
        <div className="bg-green-300 p-2">H3</div>
        <div className="bg-yellow-300 p-2">H4</div>
        <div className="bg-pink-300 p-2">H5</div>
        <div className="bg-green-300 p-2">H6</div>
      </div>

      {/* <div class="grid grid-cols-3 gap-4">
        <div class="...">01</div>
        <div class="...">02</div>
        <div class="...">03</div>
        <div class="col-span-2 ...">04</div>
        <div class="...">05</div>
        <div class="...">06</div>
        <div class="col-span-2 ...">07</div>
      </div> */}
      {/* Styled Grid */}
      <div className="grid grid-cols-3 gap-4 p-4 border border-black-8">
        <div className="bg-blue-500 text-white p-4 rounded-lg shadow-md flex items-center justify-center">
          01
        </div>
        <div className="bg-green-500 text-white p-4 rounded-lg shadow-md flex items-center justify-center">
          02
        </div>
        <div className="bg-red-500 text-white p-4 rounded-lg shadow-md flex items-center justify-center">
          03
        </div>
        <div className="bg-yellow-500 text-white p-4 rounded-lg shadow-md flex items-center justify-center col-span-2">
          04
        </div>
        <div className="bg-purple-500 text-white p-4 rounded-lg shadow-md flex items-center justify-center">
          05
        </div>
        <div className="bg-pink-500 text-white p-4 rounded-lg shadow-md flex items-center justify-center">
          06
        </div>
        <div className="bg-indigo-500 text-white p-4 rounded-lg shadow-md flex items-center justify-center col-span-2">
          07
        </div>
      </div>
      <div className="grid grid-cols-5 gap-4 p-4 border border-black-10">
        <div className="bg-blue-500 text-white p-4 rounded-lg shadow-md col-span-3">
          01
        </div>
        <div className="bg-green-500 text-white p-4 rounded-lg shadow-md col-span-2 ">
          02
        </div>
        <div className="bg-red-500 text-white p-4 rounded-lg shadow-md  col-span-5 ">
          03
        </div>
        <div className="bg-yellow-500 text-white p-4 rounded-lg shadow-md   col-span-1">
          04
        </div>
        <div className="bg-purple-500 text-white p-4 rounded-lg shadow-md col-span-1 ">
          05
        </div>
        <div className="bg-pink-500 text-white p-4 rounded-lg shadow-md  col-span-1 ">
          06
        </div>
        <div className="bg-indigo-500 text-white p-4 rounded-lg shadow-md col-span-2">
          07
        </div>
      </div>

      {/* Responsive Design */}
      <div className="flex justify-center border border-black text-xl font-semibold">
      Responsive Design
      </div>
      <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div class="md:flex">
          <div class="md:shrink-0">
            <img
              class="h-48 w-full object-cover md:h-full md:w-48"
              src = "./building.jpg"
              alt="Modern building architecture"
            />
          </div>
          <div class="p-8">
            <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              Company retreats
            </div>
            <a
              href="#"
              class="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
            >
              Incredible accommodation for your team
            </a>
            <p class="mt-2 text-slate-500">
              Looking to take your team away on a retreat to enjoy awesome food
              and take in some sunshine? We have a list of places to do just
              that.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-orange-500 xl:bg-red-500 lg:bg-green-500 md:bg-blue-500 sm:bg-yellow-500 border border-black-8">
        <h2>Responsive Design</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3">
      <div className="bg-lime-500 text-white p-4 rounded-lg shadow-md ">
          01
        </div>
        <div className="bg-violet-500 text-white p-4 rounded-lg shadow-md ">
          02
        </div>
        <div className="bg-sky-500 text-white p-4 rounded-lg shadow-md  ">
          03
        </div>
      </div>
    </>
  );
}

export default App;
