import React from 'react'
import Navbar from './Navbar'

const HomeNormal = () => {
  return (
    <>
    <Navbar />
    <div className="content_home_normal">
        <h1 className="title_home_normal">Generation Thailand React - Assessment</h1>
    </div>
    <div>
        <button className="button">User Home Sector</button>
        <button className="">Admin Home Sector</button>
    </div>
    </>
  )
}

export default HomeNormal