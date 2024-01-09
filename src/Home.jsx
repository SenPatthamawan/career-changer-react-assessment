import React, {useState} from 'react'
import HomeUser from './HomeUser'
import HomeAdmin from './HomeAdmin'
import Layout from './Layout'

const Home = () => {
    const [sector, setSector] = useState("");
  return (
    <Layout>
        <div className="content_home">
            <DisplayTitle sector={sector}/>
        </div>
        <div className="flex justify-center ">
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-20 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800"
            onClick={() => setSector('user')}>
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    User Home Sector
                </span>
            </button>
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 ml-20 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800"
            onClick={() => setSector('admin')}>
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Admin Home Sector
                </span> 
            </button>
        </div>
        <DisplayHomeSector sector={sector}/>
    </Layout>
  )
}

const DisplayHomeSector = ({sector}) => {
    let display = sector;
    if(sector === 'admin'){
        display = <HomeAdmin />
    }else if(sector === 'user'){
        display = <HomeUser />
    }
    else{
        display = <div>Please choose home sector above.</div>
                  
    }

    return (
        <>
        {display}
        </>
    )

}

const DisplayTitle = ({sector}) => {

    let display = sector;
    if(sector === 'admin'){
        display = <h1 className="title_home">Generation Thailand Home - Admin Sector</h1>
    }else if(sector === 'user'){
        display = <h1 className="title_home">Generation Thailand Home - User Sector</h1>
    }
    else{
        display = <h1 className="title_home">Generation Thailand React - Assessment</h1>
                  
    }

    return (
        <>
        {display}
        </>
    )
}


export default Home