import React from 'react'
import styles from './AdminPage.module.css'
import { Chart,
         CategoryScale,
         LinearScale,
         BarElement,
         Title,
         Tooltip,
         Legend,
} 
from "chart.js";
import { Bar } from 'react-chartjs-2';
import Table from 'react-bootstrap/Table';
import ProgressBar from 'react-bootstrap/ProgressBar';

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ContentMain = ({ Leaderboard, ChartData }) => {
  return (
    <div className={styles.ContentContainer}> 
    <div className={styles.ChartAndTop}>       
      {StudyHourChart({ data: ChartData })}
      <div className={styles.TopCourse}>
        <span>Popular Courses</span>
        <TopCourseTable/>
        </div>
    </div>
    <div className={styles.LeaderBoard}> 
      <h2 style={{ textAlign:"center"}}>Leaderboard</h2>
      {Item(Leaderboard)}
    </div>
      
    
    
    </div>
  )
}
export default ContentMain;


function Item(data){
  return (
      <>
          {
              data.map((value, index) => (
                  <div className={styles.flex} key={index}>
                      <div className={styles.item}>
                          <img src={value.img} alt="" className={styles.ProfileImage}/>
                          <h3>{value.name}</h3>
                      </div>
                      <div className={styles.item}>
                          <span>{value.score}</span>
                      </div>
                  </div>
                  )
              )
          }
      </>

      
  )
}

function StudyHourChart({ data }) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Study Hours per Day', 
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className={styles.StudyChart}><Bar data={data} options={options}  /> </div>
  );
}

function TopCourseTable() {
  const now = 60;
  return (
    <Table striped bordered hover >
      <thead>
        <tr>
          <th >#</th>
          <th>Course Name</th>
          <th>Popularity</th>
          <th>Sale</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Grammar for beginners</td>
          <td> <ProgressBar now={now} label={`${now}%`} /></td>
          <td>10%</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Toeic for beginners</td>
          <td> <ProgressBar now={now} label={`${now}%`} /></td>
          <td>10%</td>
        </tr>
        <tr>
          <td>3</td>
          <td>1000 New words</td>
          <td> <ProgressBar now={now} label={`${now}%`} /></td>
          <td>10%</td>
        </tr>
      </tbody>
    </Table>
  );
}