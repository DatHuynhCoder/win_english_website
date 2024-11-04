import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import Home from './pages/home/Home'
import Login from './pages/Login'
import Admin from './pages/Admin'
import About from './pages/about/About'
import ErrorRoutes from './pages/ErrorRoutes';
import User from './pages/User'
import ExamLibrary from './pages/ExamLibrary/ExamLibrary';
import ExamResult from './pages/ExamResult/ExamResult';

import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/**
 * @important !!!
 * @documentation https://reactrouter.com/en/main/start/tutorial
 */
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.min.css';


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
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/exam-library",
        element: <ExamLibrary/>
      },
      {
        path: "/user",
        element: <User/>
      },
      {
        path: "/exam-result",
        element: <ExamResult />
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
