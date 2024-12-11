import React from 'react'
import './Instruction.scss'

function Instruction() {
  return (
    <div className='Instruction-container'>
      <h5>1. Đối với người dùng không đăng nhập</h5>
      <p>Các bạn có thể làm bài thi ngay mà không cần đăng nhập. Nhưng những chức năng khác sẽ bị hạn chế (lưu lịch sử làm bài, xem đáp án, ...)</p>
      <h5>2. Đối với người dùng đã đăng nhập</h5>
      <p>Các bạn có thể làm bài thi và lịch sử làm bài của bạn sẽ được tự động lưu khi bạn nộp bài.</p>
      <p>Tính năng <strong>xem đáp án</strong> chỉ khả dụng đối với người dùng đã nâng cấp <strong>VIP</strong>. Vui lòng nâng cấp để sử dụng chức năng này.</p>
      <p><i>Lưu ý: Chúng tôi chỉ chấp nhận thanh toán qua ZaloPay</i></p>
    </div>
  )
}

export default Instruction