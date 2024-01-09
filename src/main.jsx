import React from 'react'
import ReactDOM from 'react-dom/client'
import HomeNormal from './HomeNormal';
import HomeUser from './HomeUser';
import HomeAdmin from './HomeAdmin';
import Owner from './Owner';

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
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
