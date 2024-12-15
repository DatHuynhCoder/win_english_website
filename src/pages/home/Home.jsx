/**
 * @author Quynh Anh
 */
import IntroductionCarousel from "./IntroductionCarousel"
import HomeCourse from "./HomeCourse"
import HomeExam from "./HomeExam"
import HomeFeedback from "./HomeFeedback"
import ChooseUs from "./ChooseUs"

// import carousel1 from '../../assets/carousel1.jpg'  
import carousel2 from '../../assets/carousel2.jpg'
import carousel3 from '../../assets/carousel3.jpg'
import carousel4 from '../../assets/carousel4.png'

const IntroductionCarouselData = [
  // {
  //   title: 'First slide label',
  //   content: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
  //   image: carousel1
  // },
  {
    title: 'KHO ĐỀ THI PHONG PHÚ',
    content: 'THỬ SỨC VỚI NHỮNG ĐỀ CÓ ĐỘ KHÓ CAO',
    image: carousel2
  },
  {
    title: 'THAO TÁC ĐƠN GIẢN',
    content: 'DỄ DÀNG LÀM QUEN',
    image: carousel3
  },
  {
    title: 'KIỂM TRA TRÌNH ĐỘ MIỄN PHÍ',
    content: 'NHANH CHÓNG - CHÍNH XÁC - HIỆU QUẢ',
    image: carousel4
  },
]

const ChooseUsData = [
  {
    user: 1000,
    rating: 200,
    download: 88000
  }
]

const Home = () => {
  return (
    <>
      <IntroductionCarousel IntroductionCarouselData={IntroductionCarouselData}/>
      <HomeCourse/>
      <HomeExam/>
      <HomeFeedback/>
      <ChooseUs ChooseUsData={ChooseUsData}/>
    </>
  )
}

export default Home