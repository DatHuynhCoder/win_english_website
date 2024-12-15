/**
 * @author Tan Dat
 */
import Policies from './Policies'
import Moto from './Moto'
import Banner from './Banner'
import FAQ from './FAQ'
//pic for policy
import policy_pic1 from '../../assets/policy_pic1.png'
import policy_pic2 from '../../assets/policy_pic2.png'
import policy_pic3 from '../../assets/policy_pic3.png'
import policy_pic4 from '../../assets/policy_pic4.png'
import policy_pic5 from '../../assets/policy_pic5.png'
import policy_pic6 from '../../assets/policy_pic6.png'


const About = () => {
  const policyData = [
    {
      title: 'Thông tin',
      content: 'Chúng tôi tin rằng việc tiếp cận thông tin phải dễ dàng và nhanh chóng. Và chia sẻ thông tin giữa các nhân viên, đối tác và khách hàng cũng được chú trọng',
      logo: policy_pic1
    },
    {
      title: 'Lương & Phúc lợi',
      content: 'Để tạo điều kiện kiện làm việc tốt nhất cho nhân viên, chúng tôi có nhiều chính sách đến lương thưởng, phụ cấp chi phí đi lại, ăn uống cùng bảo hiểm cho toàn bộ nhân viên',
      logo: policy_pic2
    },
    {
      title: 'Làm việc linh hoạt',
      content: 'Cho phép làm việc từ xa, lựa chọn giờ làm việc linh hoạt với bản thân, có chính sách nghỉ không lương tạo điều kiện giải quyết chuyện cá nhân',
      logo: policy_pic3
    },
    {
      title: 'Khen thưởng & công nhận',
      content: 'Vinh danh các cá nhân có thành tích nổi bật, tăng lương thưởng và quà tặng vào các dịp lễ, Tết',
      logo: policy_pic4
    },
    {
      title: 'Sức khỏe & đời sống',
      content: 'Hỗ trợ khám sức khỏe định kỳ, tổ chức các buổi tư vấn tâm lí và nhiều hoạt động team building',
      logo: policy_pic5
    },
    {
      title: 'Minh bạch & công bằng',
      content: 'Lắng nghe ý kiến nhân viên, đánh giá các cá nhân một cách công bằng, không phân biệt giới tính, màu da hay dân tộc nào',
      logo: policy_pic6
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
