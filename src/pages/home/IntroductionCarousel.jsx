/**
 * @author Quynh Anh
 */

import Carousel from 'react-bootstrap/Carousel'
import './IntroductionCarousel.scss'

const IntroductionCarousel = ({IntroductionCarouselData}) => {
  return (
    <div className='IntroductionCarousel-container'>
      <Carousel data-bs-theme="dark">
        {
          IntroductionCarouselData.map((item, index) => (
            <Carousel.Item key={index}>
              <div style={{ width: '70%', margin: '0 auto' }}>
                <img
                  className="image-style d-block w-100 ta-c"
                  src={item.image}
                  alt={item.title}
                />
              </div>
              <Carousel.Caption>
                <h5>{item.title}</h5>
                <p>{item.content}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))
        }
      </Carousel>
    </div>
  )
}

export default IntroductionCarousel