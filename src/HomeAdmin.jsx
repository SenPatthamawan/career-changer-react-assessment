import React, { useState, useEffect } from 'react';
import axios from "axios";

const HomeAdmin = () => {
    const [employees, setEmployees] = useState([]);

    // Get data from api
    //useEffect fetch data
    useEffect(() => {
      const getData = async () => {
        const response = await axios.get(
          "https://jsd5-mock-backend.onrender.com/members"
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
        <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Last Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Position
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                {/* Start loop */}
                {employees.map((employee) => (
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {employee.name}
                        </th>
                        <td className="px-6 py-4">
                            {employee.lastname}
                        </td>
                        <td className="px-6 py-4">
                            {employee.position}
                        </td>
                        <td className="px-6 py-4">
                            {employee.action}
                            <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                                onClick={() => removeData(employees.id)}
                            >  
                                DELETE
                            </button>
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

export default HomeAdmin