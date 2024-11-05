import React from 'react'
import logo from '../../assets/logoWinEng.svg'
import { MdSpaceDashboard } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import styles from './Sidebar.module.css'
import { GoSignOut } from "react-icons/go";

const Sidebar = () => {
    return (
        <div className={styles.menuSidebar}>
            <div className={styles.Headerlogo}>
                <img src={logo} alt="Logo" className={styles.LogoImage}/>
                <h2 className={styles.HeaderTitle}>Win English</h2>
            </div>
            <div className={styles.menulist}>
                <a href="#" className={styles.item}>
                <MdSpaceDashboard className={styles.icon}/>
                Dashboard
                </a>
                <a href="#" className={styles.item}>
                <FaUser className={styles.icon}/>
                User
                </a>
                <a href="#" className={styles.item}>
                <GoSignOut className={styles.icon}/>
                Sign out
                </a>

            </div>
        </div>
    )
}

export default Sidebar;
