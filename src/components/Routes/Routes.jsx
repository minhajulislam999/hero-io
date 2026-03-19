import React from 'react'
import { createBrowserRouter } from "react-router";
import Home from '../Header/Home/Home';
import AppNav from '../Header/App/AppNav';
import Installation from '../Header/Installation/Istallation';
import MainLayout from '../MainLayout/MainLayout';
import AppDetails from '../AppDetails/AppDetails';



 export   const router = createBrowserRouter([
  {
    path: "/",
            Component: MainLayout,

    // element: <div>Hello World</div>,
    children: [
      {index: true,
        Component: Home
      },
      {
        path: '/app',
        Component: AppNav
      },
      {
        path: '/installation',
        Component: Installation
      },
      {
        path: '/app/:id',
        Component: AppDetails
      }
    ]
  },
]);

  
