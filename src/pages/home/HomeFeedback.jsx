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