import { useState } from "react";
import Weather from "./components/Weather";
import axios from "axios";
function App() {
  const [cityName, setCityName] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=Metric&appid=af9dd1d991b49e1a548f3417b40b16c4`;

  const [apiData, setApiData] = useState(null);

  const handleChange = (e) => {
    const { value } = e.target;
    setCityName(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (cityName === null || cityName === "") {
      setApiData(null);
      return;
    }

    try {
      const res = await axios.get(url);

      if (!res || !res.data) {
        setApiData(undefined);
        return;
      }
      setApiData(res.data);
    } catch (error) {
      setApiData(undefined);
    }
  };

  let searchContent = <p className="text-2xl font-bold text-neutral-600 text-center">Search city name</p>

  if(apiData === undefined){
    searchContent = <p className="text-2xl font-bold text-neutral-600 text-center">City not found!</p>
  }else if(apiData){
    searchContent = <Weather data={apiData} />
  }else{
    searchContent = <p  className="text-2xl font-bold text-neutral-600 text-center">Search city name</p>
  }

  
  return (
    <div className="h-dvh flex justify-center items-center text-neautral-600">
      <div className="shadow-2xl p-20 roubded-md flex flex-col gap-4">
        <h1 className="text-4xl text-center mb-8">Weather App</h1>
        <form onSubmit={handleSubmit}>
          <input
            className="bg-transparent border-2 rounded-2xl w-full px-4 text-center"
            placeholder="Enter City Name"
            type="search"
            onChange={handleChange}
          />
        </form>
        {searchContent}
      </div>
    </div>
  );
}

export default App;
