import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import Home from './pages/Home'
import Login from './pages/Login'
import Admin from './pages/Admin'
import ErrorRoutes from './pages/ErrorRoutes';

import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.min.css';

/**
 * @documentation https://reactrouter.com/en/main/start/tutorial
 */
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorRoutes/>,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: "/home",
        element: <Home/>
      },
      {
        path: "/admin",
        element: <Admin/>
      }
    ],
  },
  {
    path: "/login",
    element: <Login/>,
    errorElement: <ErrorRoutes/>,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
