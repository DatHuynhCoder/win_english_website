/**
 * @author Tan Dat
 */
import Policies from './Policies'
import Moto from './Moto'

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

  return (
    <>
      <div className="banner-container"></div>

      <Moto />

      <Policies policyData={policyData} />

      <div className="faq-container"></div>
    </>
  )
}

export default About;
