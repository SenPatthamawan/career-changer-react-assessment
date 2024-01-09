import React from 'react'
import ReactDOM from 'react-dom/client'
import HomeNormal from './HomeNormal';
import HomeUser from './HomeUser';
import HomeAdmin from './HomeAdmin';
import Owner from './Owner';
import Other from './Other';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
    {
      path: '/',
      element: <HomeNormal />
    },
    {
      path: '/homeuser',
      element: <HomeUser />
    },
    {
      path: '/home-admin',
      element: <HomeAdmin />
    },
    {
      path: '/owner',
      element: <Owner />
    },
    {
      path: '*',
      element: (
        <div>
          <h6>Page Not Found</h6>
          <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <a href={'/'}>Back to Home</a>
          </button>
        </div>
      )
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
