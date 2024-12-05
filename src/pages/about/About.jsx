/**
 * @author Tan Dat
 */
import Policies from './Policies'
import Moto from './Moto'
import Banner from './Banner'
import FAQ from './FAQ'

import policy_pic1 from '../../assets/policy_info_accessible.svg'

const About = () => {
  const policyData = [
    {
      title: 'Thông tin',
      content: 'Chúng tôi tin rằng việc tiếp cận thông tin phải dễ dàng và nhanh chóng. Và chia sẻ thông tin giữa các nhân viên, đối tác và khách hàng cũng được chú trọng',
      logo: policy_pic1
    },
    {
      title: 'Thông tin',
      content: 'Chúng tôi tin rằng việc tiếp cận thông tin phải dễ dàng và nhanh chóng. Và chia sẻ thông tin giữa các nhân viên, đối tác và khách hàng cũng được chú trọng',
      logo: policy_pic1
    },
    {
      title: 'Thông tin',
      content: 'Chúng tôi tin rằng việc tiếp cận thông tin phải dễ dàng và nhanh chóng. Và chia sẻ thông tin giữa các nhân viên, đối tác và khách hàng cũng được chú trọng',
      logo: policy_pic1
    },
    {
      title: 'Thông tin',
      content: 'Chúng tôi tin rằng việc tiếp cận thông tin phải dễ dàng và nhanh chóng. Và chia sẻ thông tin giữa các nhân viên, đối tác và khách hàng cũng được chú trọng',
      logo: policy_pic1
    },
    {
      title: 'Thông tin',
      content: 'Chúng tôi tin rằng việc tiếp cận thông tin phải dễ dàng và nhanh chóng. Và chia sẻ thông tin giữa các nhân viên, đối tác và khách hàng cũng được chú trọng',
      logo: policy_pic1
    },
    {
      title: 'Thông tin',
      content: 'Chúng tôi tin rằng việc tiếp cận thông tin phải dễ dàng và nhanh chóng. Và chia sẻ thông tin giữa các nhân viên, đối tác và khách hàng cũng được chú trọng',
      logo: policy_pic1
    },
  ]

  const faqData = [
    {
      question: 'Trang web này hoạt động như thế nào ?',
      answer: `Mục tiêu của WinEnglish là giúp người học nâng cao kĩ năng và dễ dàng lấy được các chứng chỉ ngoại ngữ một cách dễ dàng thông qua việc 
luyện tập ở website của chúng tôi. Hãy lựa chọn chứng chỉ ngoại ngữ mà bạn muốn luyện tập và bắt đầu chương trình luyện tập miễn phí 
ngay bạn nhé!`
    },
    {
      question: 'Tôi có cần đăng kí để sử dụng trang web này không ?',
      answer: `Không, bạn không cần phải làm điều đó. 
      Tuy nhiên, chúng tôi khuyên bạn nên tạo một tài khoản để trải nghiệm 
      tất cả các tính năng trên trang web của chúng tôi! Hãy tạo tài khoản ngay nhé!`
    },
    {
      question: 'Các tài liệu trên trang này có phải là miễn phí không ?',
      answer: `Gần như miễn phí. Với tài khoản nâng cấp, bạn sẽ không bị 
      quảng cáo làm phiền và có thể truy cập vào giải thích chi tiết cho mỗi 
      câu hỏi. Khám phá thêm tính năng "GET PRO" ngay nhé!`
    },
    {
      question: 'Có ứng dụng dùng cho di động không ?',
      answer: `Không`
    },
    {
      question: 'Thông tin cá nhân của tôi có an toàn trên trang web này không ?',
      answer: `Tất nhiên. Chính sách của chúng tôi là bảo vệ quyền riêng tư của người dùng bằng mọi cách.`
    },
    {
      question: 'Phương thức thanh toán nào được chấp nhận cho tài khoản nâng cấp GET PRO ?',
      answer: `Chúng tôi chấp nhận thanh toán qua ZaloPay (ứng dụng ZaloPay, thẻ nội địa và quốc tế, ...)`
    },
  ]

  return (
    <>
      <Banner />

      <Moto />

      <Policies policyData={policyData} />

      <FAQ faqData={faqData} />
    </>
  )
}

export default About;
