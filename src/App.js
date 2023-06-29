import React, {useState } from "react";
import data from "./data.js";
import CarsTable from "./component/CarsTable.jsx";

function App() {
  const [search, setSearch] = useState('')
  const cars = data;

function carFilter() {
  return(
    cars.filter((car) => car.car_name.toLowerCase().includes(search.toLowerCase()) || car.car_model.toLowerCase().includes(search.toLowerCase()))
    )
  }


  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="container mx-auto rounded-lg bg-white p-8 shadow-lg">
        <form>
          <label
            htmlFor="default-search"
            className="sr-only mb-2 text-sm font-medium text-gray-900"
          >
            Search
          </label>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                aria-hidden="true"
                className="h-5 w-5 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              onChange={(e) => setSearch(e.target.value) }
              id="default-search"
              className="block w-full rounded-lg border border-gray-300 p-4 pl-10 text-sm text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
              placeholder="Search for your favorite car"
              required 
            />
            <button
              type="submit"
              className="absolute bottom-2.5 right-2.5 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              Search
            </button>
          </div>
        </form>

        <CarsTable  cars={carFilter()} />
                    
      </div>
    </div>
  );
}

export default App;
