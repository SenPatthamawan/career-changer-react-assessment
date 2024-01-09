import React, { useState, useEffect } from 'react';
import axios from "axios";

const HomeAdmin = ({employees, getData}) => {
    const [reload, setReload] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [id, setId] = useState("");
    const baseURL = "https://jsd5-mock-backend.onrender.com"

  // Get data from api
  //useEffect fetch data
    useEffect(() => {
        getData();
    }, [reload]);

    // Create data to api
    const createData = async (formData) => {
        const requestData = {
            name: formData.name,
            lastname: formData.lastname,
            position: formData.position,
        };
        const createRoute = "members"
        const response = await axios.post(
        `${baseURL}/${createRoute}`, requestData
        );

        if (response.status === 200) {
        setReload(!reload);
        }
    };

    const showUpdateModal = (id) => {
        setShowModal(true);
        setId(id);
    }
    //Update data
    const updateData = async (formData) => {
        const requestData = {
            id: formData.id,
            name: formData.name,
            lastname: formData.lastname,
            position: formData.position,
        };
        const updateRoute = "members"
        const response = await axios.put(
        `${baseURL}/${updateRoute}`, requestData
        );

        if (response.status === 200) {
        setReload(!reload);
        console.log(response);

        }
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
                        <td className="px-6 py-4">
                            <div>
                                {employee.action}
                                    <button
                                        className="bg-pink-500 text-white active:bg-pink-600 font-bold text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => showUpdateModal(employee.id)}
                                    >
                                        Update
                                    </button>
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
        <UpdateForm 
            id={id} 
            showModal={showModal} 
            setShowModal={setShowModal} 
            updateData={updateData} 
        />
    </>
  )
}


const CreateForm = ({createData}) => {
    const [formData, setFormData] = useState({
        name: "",
        lastname: "",
        position: "",
    });

    const [formErrors, setFormErrors] = useState({
        name: "",
        lastname: "",
        position: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      errors.name = "Name is required";
      isValid = false;
    }

    if (!formData.lastname.trim()) {
      errors.lastname = "Lastname is required";
      isValid = false;
    }

    if (!formData.position.trim()) {
      errors.position = "Position is required";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Submit the form data
      console.log("Form data submitted:", formData);
      createData(formData);
    } else {
      console.log("Form submission failed due to validation errors.");
    }
  };

  return (
    <>
    <div className="pl-10 pt-10">Create User Here</div>
        <form onSubmit={handleSubmit}>
            <div className="flex row p-8 justify-center gap-8">
                <div className="mb-8">
                    <input type="text" name="name" placeholder="*Name" value={formData.name} onChange={handleInputChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                    <span className="text-red-600">{formErrors.name}</span>
                </div>

                <div className="mb-8">
                    <input type="text" name="lastname" placeholder="*Lastname" value={formData.lastname} onChange={handleInputChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                    <span className="text-red-600">{formErrors.lastname}</span>
                </div>

                <div className="mb-8">
                    <input type="text" name="position" placeholder="*Position" value={formData.position} onChange={handleInputChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                    <span className="text-red-600">{formErrors.position}</span>
                </div>
                <div className="mb-8">
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Save
                    </button>
                </div>
            </div>
        </form>
    </>
  )
}

const UpdateForm = ({id, showModal, setShowModal, updateData}) => {
    const [formData, setFormData] = useState({
        id: id,
        name: "",
        lastname: "",
        position: "",
    });
    console.log(`formData id : ${formData.id}`);
    const [formErrors, setFormErrors] = useState({
        name: "",
        lastname: "",
        position: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        let errors = {};
        let isValid = true;

        if (!formData.name.trim()) {
            errors.name = "Name is required";
            isValid = false;
        }

        if (!formData.lastname.trim()) {
            errors.lastname = "Lastname is required";
            isValid = false;
        }

        if (!formData.position.trim()) {
            errors.position = "Position is required";
            isValid = false;
        }

        setFormErrors(errors);
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    
        if (validateForm()) {
          // Submit the form data
          console.log("Form data submitted:", formData);
          updateData(formData);
        } else {
          console.log("Form submission failed due to validation errors.");
        }
    };

    useEffect(() => {
        setFormData({
            id: id,
            name: "",
            lastname: "",
            position: "",
        });
    }, [id]);
  return (
    <>
    {showModal ? (
      <>
        <div
          className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        >
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            {/*content*/}
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/*header*/}
              <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                <h3 className="text-3xl font-semibold">
                  Update User Here
                </h3>
                <button
                  className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={() => setShowModal(false)}
                >
                  <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                    ×
                  </span>
                </button>
              </div>
              {/*body*/}
              <div className="relative p-6 flex-auto">
            <form onSubmit={handleSubmit}>
                <div className="block p-8 justify-center gap-8">
                    <div className="mb-8">
                        <input type="hidden" name="id" placeholder="*Id" value={formData.id} onChange={handleInputChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                    </div>
                    <div className="mb-8">
                        <input type="text" name="name" placeholder="*Name" value={formData.name} onChange={handleInputChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                        <span className="text-red-600">{formErrors.name}</span>
                    </div>

                    <div className="mb-8">
                        <input type="text" name="lastname" placeholder="*Lastname" value={formData.lastname} onChange={handleInputChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                        <span className="text-red-600">{formErrors.lastname}</span>
                    </div>

                    <div className="mb-8">
                        <input type="text" name="position" placeholder="*Position" value={formData.position} onChange={handleInputChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                        <span className="text-red-600">{formErrors.position}</span>
                    </div>
                    <div className="mb-8">
                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Save
                        </button>
                    </div>
                </div>
            </form>
              </div>
              {/*footer*/}
              <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                <button
                  className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </>
    ) : null}
  </>
);
}

export default HomeAdmin