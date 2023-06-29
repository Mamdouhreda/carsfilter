import React from 'react'

function CarsTable(props) {
  return (
    <div className="mt-8">
    <table className="w-full text-left text-sm text-gray-500">
      <thead className="bg-gray-50 text-xs uppercase text-gray-700">
        <tr>
          <th scope="col" className="px-6 py-3">
            Car Name
          </th>
          <th scope="col" className="px-6 py-3">
            Car Model
          </th>
          <th scope="col" className="px-6 py-3">
            Year
          </th>
          <th scope="col" className="px-6 py-3">
            Vehicle identification number
          </th>
          <th scope="col" className="px-6 py-3">
            <span className="sr-only">Edit</span>
          </th>
        </tr>
      </thead>
      {
            props.cars.map((car) => (
              <tbody key={car.id}>
                <tr className="border-b bg-white hover:bg-gray-50">
                  <th
                    scope="row"
                    className="whitespace-nowrap px-6 py-4 font-medium text-gray-900"
                  >
                    {car.car_name}
                  </th>
                  <td className="px-6 py-4">{car.car_model}</td>
                  <td className="px-6 py-4">{car.car_year}</td>
                  <td className="px-6 py-4">{car.car_vin}</td>
                  <td className="px-6 py-4 text-right"></td>
                </tr>
              </tbody>
            ))} 
      </table>
        </div>
  )
}

export default CarsTable