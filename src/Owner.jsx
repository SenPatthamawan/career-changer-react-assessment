import React from 'react'
import AvatarImg from './assets/images/Avatar.jpg'
import Layout from './Layout'

const Owner = () => {
  return (
    <Layout>
      <div className="flex justify-center p-8">
        <h1 className="align-center text-5xl">Sen - Group G - 18</h1>
      </div>

      <div className="flex justify-center">
        <img src={AvatarImg} alt="My avatar: 4 Dogs" className="h-auto w-80 rounded-lg"/>
      </div>

        <h2 className="flex justify-center pt-8">Short Biography:</h2>
      <div className="flex justify-center">
        <p className="p-8 w-4/5 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </Layout>
  )
}

export default Owner