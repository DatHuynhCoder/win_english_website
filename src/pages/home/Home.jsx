/**
 * @author Quynh Anh
 */
import IntroductionCarousel from "./IntroductionCarousel"
import HomeCourse from "./HomeCourse"
import HomeExam from "./HomeExam"
import HomeFeedback from "./HomeFeedback"
import ChooseUs from "./ChooseUs"

import pic1 from '../../assets/pic1.jpg'  
import pic2 from '../../assets/pic2.jpg'
import pic3 from '../../assets/pic3.jpg'
import pic4 from '../../assets/pic4.jpg'
import pic5 from '../../assets/pic5.jpg'
import pic6 from '../../assets/pic6.jpg'

const IntroductionCarouselData = [
  {
    title: 'First slide label',
    content: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
    image: pic1
  },
  {
    title: 'Second slide label',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: pic2
  },
  {
    title: 'Third slide label',
    content: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
    image: pic3
  },
  {
    title: 'Fourth slide label',
    content: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
    image: pic4
  },
  {
    title: 'Fifth slide label',
    content: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
    image: pic5
  },
  {
    title: 'Sixth slide label',
    content: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
    image: pic6
  }
]

const HomeCourseData = [
  {
    title: 'First slide label',
    content: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
    image: pic1
  },
  {
    title: 'Second slide label',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: pic2
  },
  {
    title: 'Third slide label',
    content: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
    image: pic3
  },
  {
    title: 'Fourth slide label',
    content: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
    image: pic4
  },
  {
    title: 'Fifth slide label',
    content: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
    image: pic5
  },
  {
    title: 'Sixth slide label',
    content: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
    image: pic6
  }
]

const HomeExamData = [
  {
    title: 'First slide label',
    content: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
    image: pic1
  },
  {
    title: 'Second slide label',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: pic2
  },
  {
    title: 'Third slide label',
    content: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
    image: pic3
  },
  {
    title: 'Fourth slide label',
    content: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
    image: pic4
  },
  {
    title: 'Fifth slide label',
    content: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
    image: pic5
  },
  {
    title: 'Sixth slide label',
    content: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
    image: pic6
  }
]

const HomeFeedbackData = [
  {
    name: 'First slide label',
    feedback: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
    avatar: pic1
  },
  {
    name: 'Second slide label',
    feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    avatar: pic2
  },
  {
    name: 'Third slide label',
    feedback: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
    avatar: pic3
  }
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
      <HomeCourse HomeCourseData={HomeCourseData}/>
      <HomeExam HomeExamData={HomeExamData}/>
      <HomeFeedback HomeFeedbackData={HomeFeedbackData}/>
      <ChooseUs ChooseUsData={ChooseUsData}/>
    </>
  )
}

export default Home