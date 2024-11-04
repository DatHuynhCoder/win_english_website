import React, { useState } from 'react';
import styles from './AdminPage.module.css'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'react-bootstrap';
import { IoMdNotifications } from "react-icons/io";
import BannerPic from '../../assets/banner_about.png'

const ContentHeader = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const count = 1;
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <div className={styles.ContentHeader}>
      <h1 style={{ fontWeight:"bold"}}> Dashboard</h1>
      <div className={styles.HeaderFunctional}> 
      <Dropdown isOpen={dropdownOpen} toggle={toggle} >
      <DropdownToggle className={styles.customdropdowntoggle} >
        English (US)
      </DropdownToggle  >
      <DropdownMenu >
        <DropdownItem>English (US)</DropdownItem>
        <DropdownItem>Vietnamese (VIE)</DropdownItem>
        <DropdownItem>Japanese (JAP)</DropdownItem>
      </DropdownMenu>
    </Dropdown>
    
    <div className={styles.notificationbell}>
    <IoMdNotifications className={styles.bell}/>
    {count > 0 && <span className={styles.notificationcount}>{count}</span>}
    </div>
    <div className={styles.HeaderFunctional}>
    <img src={BannerPic} alt="ProfileImage" className={styles.ProfileImage} />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <span style={{ fontWeight: 'bold' }}>Username</span>
          <span style={{ fontSize: '0.8rem', color: 'gray' }}>Role</span>
      </div>
    </div>
    </div>
    <div>
    </div>
    </div>
  )
}
export default ContentHeader;