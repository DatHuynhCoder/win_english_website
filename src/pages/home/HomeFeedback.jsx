/**
 * @author Quynh Anh
 */
import { useContext } from 'react';
import './HomeFeedback.scss'
import { ContextStore } from '../../context/Context'
import { FaCircleUser } from "react-icons/fa6";
import avatar from '../../assets/QA_avt.png'

const HomeFeedbackData = [
  {},
  {},
  {}
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
                {accessToken ? 
                  <img 
                    src={avatar} alt='avatar' className='HomeFeedback-avatar' 
                  />
                  : 
                  <FaCircleUser size={150} style={{marginTop: '20px'}}/>
                }
              </div>
              <div className='HomeFeedback-name-area'>
                <p className='HomeFeedback-name'>{accessToken ? item.name : 'Loading ...'}</p>
              </div>
              <div className='HomeFeedback-feedback-area'>
                <p className='HomeFeedback-feedback'>{accessToken ? item.feedback : 'Loading ...'}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default HomeFeedback