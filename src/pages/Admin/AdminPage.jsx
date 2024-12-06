import Sidebar from './Sidebar'
import styles from './AdminPage.module.css'
import React, { useState, useEffect, useContext } from 'react';
import ContentHeader from './ContentHeader'
import ContentMain from './ContentMain'
import { Leaderboard } from './Leaderboarddata';
import {ChartData} from './Leaderboarddata';

import { ContextStore } from '../../context/Context';
import Cookies from 'universal-cookie';
import { jwtDecode } from 'jwt-decode';

import logoWinEng from '../../assets/logoWinEng.svg'
import { Image } from "react-bootstrap"
import { Link, useNavigate, Outlet, redirect } from 'react-router-dom'

import { 
  CSidebar, 
  CSidebarHeader, 
  CSidebarBrand, 
  CSidebarNav,
  CNavTitle,
  CNavItem,
  CNavGroup,
  CBadge
} from '@coreui/react';
import {cilSpeedometer, cilPuzzle, cilCloudDownload, cilLayers} from '@coreui/icons'
import {CIcon} from '@coreui/icons-react'

// const AdminPage = () => {
//   return (
//     <div className={styles.dashboard}> 
//         <Sidebar/>
//         <div className={styles.dashboardcontent}>
//           <ContentHeader /> 
//           <ContentMain Leaderboard={Leaderboard} ChartData={ChartData}/>
//         </div>
//     </div>
//   );

// }

const AdminPage = () => {
  const cookies = new Cookies()
  const navigate = useNavigate()
  useEffect(() => {
    const token = cookies.get("accessToken")
    console.log('check token in admin page: ', token)
    if(!token) {
      alert('Admin permission required !')
      navigate('/')
    }
    return () => {}
  }, [])
  return (
    <div style={{display: 'flex'}}>
      <div style={{display: 'flex'}}>
        <CSidebar className="border-end" unfoldable>
          <CSidebarHeader className="border-bottom">
            {/* <CSidebarBrand>Admin Dashboard</CSidebarBrand> */}
            <Link to={'/'}>
              <Image
                src={logoWinEng}
                alt="Company logo"
                width={50}
                height={50}
              />
            </Link>
          </CSidebarHeader>
          <CSidebarNav>
            <CNavTitle>ADMIN</CNavTitle>
            <Link to={"/admin"} style={{textDecoration: 'none'}}>
              <CNavItem href="#">
                <CIcon customClassName="nav-icon" icon={cilSpeedometer}/>
                Tổng quan
              </CNavItem>
            </Link>
            <CNavItem href="#">
              <CIcon customClassName="nav-icon" icon={cilSpeedometer}/> 
              Quản lý người dùng
            </CNavItem>
            {/* <CNavGroup
              toggler={
                <>
                  <CIcon customClassName="nav-icon" icon={cilPuzzle}/>
                  Nav dropdown
                </>
              }
            >
              <CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span> Nav dropdown item</CNavItem>
              <CNavItem href="#"><span className="nav-icon"><span className="nav-icon-bullet"></span></span> Nav dropdown item</CNavItem>
            </CNavGroup> */}
            {/* <CNavItem href="https://coreui.io">
              <CIcon customClassName="nav-icon" icon={cilCloudDownload}/>
              Download CoreUI
            </CNavItem> */}
            <Link to={'/'} style={{textDecoration: 'none'}}>
              <CNavItem href="/">
                <CIcon customClassName="nav-icon" icon={cilLayers}/>
                Return to home
              </CNavItem>
            </Link>
          </CSidebarNav>
        </CSidebar>
        <div style={{paddingLeft: '70px'}}>
          <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default AdminPage;
