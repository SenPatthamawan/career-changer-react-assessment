import React, { useState, useEffect } from 'react';
import axios from "axios";

const HomeUser = () => {
    const [employees, setEmployees] = useState([]);
    const baseURL = "https://jsd5-mock-backend.onrender.com"


  // Get data from api
  //useEffect fetch data
  useEffect(() => {
    const getData = async () => {
      const getRoute = "members"
      const response = await axios.get(
        `${baseURL}/${getRoute}`
      );
      // set member here
      if (response.status === 200 && response.data) {
        setEmployees([...response.data]);
      }
    };

    getData();
  }, []);

  return (
    <>
        {/* table */}
        <div className="p-8 flex justify-center w-auto relative overflow-x-auto">
            <table className="rounded-lg w-6/12 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-center text-sm font-medium text-gray-900 group bg-gradient-to-br from-teal-300 to-lime-300">
                    <tr>
                        <th scope="col" className="rounded-tl-lg px-6 py-3">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Last Name
                        </th>
                        <th scope="col" className="rounded-tr-lg px-6 py-3">
                            Position
                        </th>
                    </tr>
                </thead>
                <tbody>
                {/* Start loop */}
                {employees.map((employee, index) => (
                    <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-center">
                        <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {employee.name}
                        </td>
                        <td className="px-6 py-4">
                            {employee.lastname}
                        </td>
                        <td className="px-6 py-4">
                            {employee.position}
                        </td>
                    </tr>
                    
                ))}
                {/*End loop*/}
                </tbody>
            </table>
        </div>
    </>
  )
}

export default HomeUser