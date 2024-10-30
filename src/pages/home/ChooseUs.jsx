/**
 * @author Quynh Anh
 */
import './ChooseUs.scss'

const ChooseUs = ({ChooseUsData}) => {
  const item = ChooseUsData[0]
  return (
    <div className='ChooseUs-container'>
      <div className='ChooseUs-title'>
        <h1>Vì sao nên lựa chọn chúng tôi ?</h1>
      </div>
      <div className='ChooseUs-main'>
        <div className='ChooseUs-child'>
          <p className='ChooseUs-p'>{item.user}</p>
          <p className='ChooseUs-p'>Nguời dùng hằng ngày</p>
        </div>
        <div className='ChooseUs-child'>
          <p className='ChooseUs-p'>{item.rating}</p>
          <p className='ChooseUs-p'>Đánh giá 5 sao</p>
        </div>
        <div className='ChooseUs-child'>
          <p className='ChooseUs-p'>{item.download}</p>
          <p className='ChooseUs-p'>Lượt tải về</p>
        </div>
      </div>
    </div>
  )
}

export default ChooseUs