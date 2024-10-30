
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
              <div>{item.name}</div>
              <div>{item.feedback}</div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default HomeFeedback