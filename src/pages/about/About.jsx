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
      question: 'Trang web này hoạt động như thế nào ?',
      answer: `Mục tiêu của WinEnglish là giúp người học nâng cao kĩ năng và dễ dàng lấy được các chứng chỉ ngoại ngữ một cách dễ dàng thông qua việc 
luyện tập ở website của chúng tôi. Hãy lựa chọn chứng chỉ ngoại ngữ mà bạn muốn luyện tập và bắt đầu chương trình luyện tập miễn phí 
ngay bạn nhé!`
    },
    {
      question: 'Trang web này hoạt động như thế nào ?',
      answer: `Mục tiêu của WinEnglish là giúp người học nâng cao kĩ năng và dễ dàng lấy được các chứng chỉ ngoại ngữ một cách dễ dàng thông qua việc 
luyện tập ở website của chúng tôi. Hãy lựa chọn chứng chỉ ngoại ngữ mà bạn muốn luyện tập và bắt đầu chương trình luyện tập miễn phí 
ngay bạn nhé!`
    },
    {
      question: 'Trang web này hoạt động như thế nào ?',
      answer: `Mục tiêu của WinEnglish là giúp người học nâng cao kĩ năng và dễ dàng lấy được các chứng chỉ ngoại ngữ một cách dễ dàng thông qua việc 
luyện tập ở website của chúng tôi. Hãy lựa chọn chứng chỉ ngoại ngữ mà bạn muốn luyện tập và bắt đầu chương trình luyện tập miễn phí 
ngay bạn nhé!`
    },
    {
      question: 'Trang web này hoạt động như thế nào ?',
      answer: `Mục tiêu của WinEnglish là giúp người học nâng cao kĩ năng và dễ dàng lấy được các chứng chỉ ngoại ngữ một cách dễ dàng thông qua việc 
luyện tập ở website của chúng tôi. Hãy lựa chọn chứng chỉ ngoại ngữ mà bạn muốn luyện tập và bắt đầu chương trình luyện tập miễn phí 
ngay bạn nhé!`
    },
    {
      question: 'Trang web này hoạt động như thế nào ?',
      answer: `Mục tiêu của WinEnglish là giúp người học nâng cao kĩ năng và dễ dàng lấy được các chứng chỉ ngoại ngữ một cách dễ dàng thông qua việc 
luyện tập ở website của chúng tôi. Hãy lựa chọn chứng chỉ ngoại ngữ mà bạn muốn luyện tập và bắt đầu chương trình luyện tập miễn phí 
ngay bạn nhé!`
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
