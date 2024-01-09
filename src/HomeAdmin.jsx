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
                        <th scope="col" className="px-6 py-3">
                            Position
                        </th>
                        <th scope="col" className="rounded-tr-lg px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                {/* Start loop */}
                {employees.map((employee) => (
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-center">
                        <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {employee.name}
                        </td>
                        <td className="px-6 py-4">
                            {employee.lastname}
                        </td>
                        <td className="px-6 py-4">
                            {employee.position}
                        </td>
                        <td className="px-6 py-4">
                            <div>
                                {employee.action}
                                    <button type="button" className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                                        onClick={() => removeData(employee.id)}
                                    >  
                                        Delete
                                    </button>
                            </div>
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
    <div className="pl-10 pt-10">Create User Here</div>
        <div className="flex row p-8 justify-center gap-8">
            <div className="mb-8">
                <input type="text" name="name" placeholder="Name" value={name} onChange={(event) => setName(event.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
            </div>

            <div className="mb-8">
                <input type="text" name="lastname" placeholder="Lastname" value={lastname} onChange={(event) => setLastname(event.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
            </div>

            <div className="mb-8">
                <input type="text" name="position" placeholder="Position" value={position} onChange={(event) => setPosition(event.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
            </div>
            <div className="mb-8">
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" 
                    onClick={() => createData(name, lastname, position)}>Save</button>
            </div>
        </div>
    </>
  )
}

export default HomeAdmin