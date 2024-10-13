import { useState } from "react";
import Weather from "./components/Weather";

function App() {
  return (
    <div className="h-dvh flex justify-center items-center text-neautral-600">
      <div className="shadow-2xl p-20 roubded-md flex flex-col gap-4">
        <h1 className="text-4xl text-center mb-8">Weather App</h1>
        <form>
          <input className="bg-transparent border-2 rounded-2xl w-full px-4 text-center" placeholder="Enter City Name" type="search" />
        </form>
        <Weather />
      </div>
    </div>
  );
}

export default App;
