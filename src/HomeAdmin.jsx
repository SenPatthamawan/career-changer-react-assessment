import React, { useState, useEffect } from 'react';
import axios from "axios";

const HomeAdmin = () => {
    const [employees, setEmployees] = useState([]);
    const [reload, setReload] = useState(false);
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
    }, [reload]);

    // Create data to api
    const createData = async (name, lastname, position) => {
        const requestData = {
        name: name,
        lastname: lastname,
        position: position,
        };
        console.log(requestData);
        const createRoute = "members"
        const response = await axios.post(
        `${baseURL}/${createRoute}`, requestData
        );

        if (response.status === 200) {
        setReload(!reload);
        }

        console.log(response);
    };

    // Delete data
    const removeData = async (id) => {
        console.log(id);
        const deleteRoute = "member"
        const member_id = id
        
        const response = await axios.delete(`${baseURL}/${deleteRoute}/${member_id}`)

        if (response.status === 200) {
        setReload(!reload);
        console.log(response);
        }
    };
        

  return (
    <>
        <CreateForm createData={createData}/>
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
                                onClick={() => removeData(employee.id)}
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


const CreateForm = ({createData}) => {
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [position, setPosition] = useState("");

  return (
    <>
        <div>Create User Here</div>
        <div className="max-w-sm mx-auto">
        <div className="mb-8">
            <label htmlFor="name" className="block mt-10 text-sm font-medium text-gray-900 dark:text-white">
                    Name
            </label>
            <input type="text" name="name" placeholder="Name" value={name} onChange={(event) => setName(event.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
        </div>

        <div className="mb-8">
            <label htmlFor="lastname" className="block text-sm font-medium leading-6 text-gray-900">
                    Lastname
            </label>
            <input type="text" name="lastname" placeholder="Lastname" value={lastname} onChange={(event) => setLastname(event.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
        </div>

        <div className="mb-8">
            <label htmlFor="position" className="block text-sm font-medium leading-6 text-gray-900">
                    Position
            </label>
            <input type="text" name="position" placeholder="Position" value={position} onChange={(event) => setPosition(event.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
        </div>
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" 
                    onClick={() => createData(name, lastname, position)}>Save</button>
        </div>
    </>
  )
}

export default HomeAdmin