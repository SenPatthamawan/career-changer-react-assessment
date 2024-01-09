import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home';
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
      element: <Home />
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
