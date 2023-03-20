import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import routesArray from './route' ;
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(routesArray);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
