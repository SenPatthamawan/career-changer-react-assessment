import React from 'react'
import AvatarImg from './assets/images/Avatar.jpg'
import Layout from './Layout'

const Owner = () => {
  return (
    <Layout>
      <div className="content_home">
        <h1 className="title_home">Sen - Group G - 18</h1>
      </div>
      <img src={AvatarImg} alt="My avatar: 4 Dogs"/>
      <h2>Short Biography:</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </Layout>
  )
}

export default Owner