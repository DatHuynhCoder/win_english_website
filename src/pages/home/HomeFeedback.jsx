/**
 * @author Quynh Anh
 */
import { useContext } from 'react';
import './HomeFeedback.scss'
import { ContextStore } from '../../context/Context'
import { FaCircleUser } from "react-icons/fa6";
import avatar from '../../assets/QA_avt.png'
import avatar1 from '../../assets/home-comment-avatar-1.jpg'
import avatar2 from '../../assets/home-comment-avatar-2.jpeg'
import avatar3 from '../../assets/home-comment-avatar-3.jpg'

import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import Box from '@mui/material/Box';

const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

const HomeFeedbackData = [
  {
    name: 'Jasurbek Esonboyev',
    avatar: avatar1,
    feedback: 'Good way of learning english',
    date: '04-05-2006',
    rating: 5
  },
  {
    name: 'MICHON Pierre 2',
    avatar: avatar2,
    feedback: 'Very good',
    date: '01-02-2003',
    rating: 5
  },
  {
    name: 'Tuyet Le Thi Ngoc ',
    avatar: avatar3,
    feedback: 'Recommend mọi người trang này nha',
    date: '07-08-2009',
    rating: 5
  }
]

const HomeFeedback = () => {
  const {accessToken} = useContext(ContextStore)
  function getLabelText(value) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
  }
  return (
    <div className='HomeFeedback-container'>
      <h1 className="HomeFeedback-title">Feedback</h1>
      <div className='HomeFeedback-main'>
        {
          HomeFeedbackData.map((item, index) => (
            <div className='HomeFeedback-content' key={index}>
              <div className='HomeFeedback-avatar-area'>  
                <img 
                  src={item.avatar} alt='avatar' className='HomeFeedback-avatar' 
                />
              </div>
              <div className='HomeFeedback-name-area'>
                <p className='HomeFeedback-name'>{item.name}</p>
                <p className='HomeFeedback-date'>{item.date}</p>
                <div style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Box sx={{ width: 200, display: 'flex', alignItems: 'center', margin: '0 auto'}}>
                    <Rating
                      name="hover-feedback"
                      value={item.rating}
                      precision={0.5}
                      getLabelText={getLabelText}
                      emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                      style={{margin: '0 auto'}}
                    />
                  </Box>
                </div>
              </div>
              <div className='HomeFeedback-feedback-area'>
                <p className='HomeFeedback-feedback'>{item.feedback}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default HomeFeedback