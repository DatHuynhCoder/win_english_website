import Sidebar from './Sidebar'
import styles from './AdminPage.module.css'
import React, { useState } from 'react';
import ContentHeader from './ContentHeader'
import ContentMain from './ContentMain'
import { Leaderboard } from './Leaderboarddata';
import {ChartData} from './Leaderboarddata';
const AdminPage = () => {
  
  return (
    <div className={styles.dashboard}> 
        <Sidebar/>
        <div className={styles.dashboardcontent}>
          <ContentHeader /> 
          <ContentMain Leaderboard={Leaderboard} ChartData={ChartData}/>
        </div>
    </div>
  );

}

export default AdminPage;
