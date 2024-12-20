import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import Home from './pages/home/Home'
import Login from './pages/SigninSignup/Login'
import { OTPVerification } from './pages/SigninSignup/OTPVerification';
import Admin from './pages/Admin/AdminPage'
import AdminDashboard from './pages/Admin/AdminDashboard';
import UserManagement from './pages/Admin/UserManagement';
import About from './pages/about/About'
import ErrorRoutes from './pages/ErrorRoutes';
import User from './pages/User/User'
import ExamLibrary from './pages/ExamLibrary/ExamLibrary';
import ExamResult from './pages/ExamResult/ExamResult';
import Exam from './pages/exam/Exam';
import Payment from './pages/Payment/Payment';
import Instruction from './pages/Instruction/Instruction';

import { ContextProvider } from './context/Context';
//use toast
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import '@coreui/coreui/dist/css/coreui.min.css'

/**
 * @important !!!
 * @documentation https://reactrouter.com/en/main/start/tutorial
 */
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.min.css';
import ResetPassword from './pages/SigninSignup/ResetPassword';


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
        path: "/about",
        element: <About/>
      },
      {
        path: "/exam-library",
        element: <ExamLibrary/>
      },
      {
        path: "/exam",
        element: <Exam />
      },
      {
        path: "/user",
        element: <User/>
      },
      {
        path: "/exam-result",
        element: <ExamResult />
      },
      {
        path: "/instruction",
        element: <Instruction/>
      }
    ],
  },
  {
    path: "/login",
    element: <Login/>,
    errorElement: <ErrorRoutes/>,
  },
  {
    path: "/payment",
    element: <Payment/>,
    errorElement: <ErrorRoutes/>
  },
  {
    path: "/admin",
    element: <Admin/>,
    children: [
      {
        index: true,
        element: <AdminDashboard/>
      },
      {
        path: "/admin/usermanage",
        element: <UserManagement/>
      }
    ]
  },
  {
    path: "/otp",
    element: <OTPVerification/>,
    errorElement: <ErrorRoutes/>
  },
  {
    path: "/resetpassword",
    element: <ResetPassword/>,
    errorElement: <ErrorRoutes/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={router}/>
      <ToastContainer />
    </ContextProvider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
