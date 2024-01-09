import React, {useState} from 'react'
import Navbar from './Navbar'
import HomeUser from './HomeUser'
import HomeAdmin from './HomeAdmin'

const HomeNormal = () => {
    const [sector, setSector] = useState("");
  return (
    <>
    <Navbar />
    <div className="content_home_normal">
        <h1 className="title_home_normal">Generation Thailand React - Assessment</h1>
    </div>
    <div>
        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800"
        onClick={() => setSector('user')}>
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                User Home Sector
            </span>
        </button>
        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800"
        onClick={() => setSector('admin')}>
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Admin Home Sector
            </span> 
        </button>
    </div>
    <DisplayHomeSector sector={sector}/>
    </>
  )
}

const DisplayHomeSector = ({sector}) => {
    let display = sector;
    if(sector === 'admin'){
        display = <HomeAdmin />
    }else if(sector === 'user'){
        display = <HomeUser />
    }
    // else{
    //     display = (<div>Page Not Found
    //                 <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    //                     <a href={'/'}>Back to Home</a>
    //                 </button>
    //               </div>
    //               )
    // }

    return (
        <>
        {display}
        </>
    )

}

export default HomeNormal