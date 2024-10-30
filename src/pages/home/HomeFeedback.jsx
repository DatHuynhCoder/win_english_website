/**
 * @author Quynh Anh
 */

import './HomeFeedback.scss'

const HomeFeedback = ({HomeFeedbackData}) => {
  return (
    <div className='HomeFeedback-container'>
      <h1 className="HomeFeedback-title">Feedback</h1>
      <div className='HomeFeedback-main'>
        {
          HomeFeedbackData.map((item) => (
            <div className='HomeFeedback-content'>
              <div className='HomeFeedback-avatar-area'>
                <img src={item.avatar} className='HomeFeedback-avatar' />
              </div>
              <div className='HomeFeedback-name-area'>
                <p className='HomeFeedback-name'>{item.name}</p>
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