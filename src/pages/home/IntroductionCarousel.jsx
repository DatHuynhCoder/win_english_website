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
                  className="image-style d-block w-100 h-100 ta-c"
                  src={item.image}
                  alt={item.title}
                  // style={{width: '1100px', height: '500px'}}
                />
              </div>
              <Carousel.Caption>
                {index === 2 ? (<>
                  <h5 style={{color: 'white', fontWeight: 'bold'}}>{item.title}</h5>
                  <p style={{color: 'white', fontWeight: 'bold'}}>{item.content}</p>
                  </>
                ) : (
                  <>
                  <h5 style={{fontWeight: 'bold'}}>{item.title}</h5>
                  <p style={{fontWeight: 'bold'}}>{item.content}</p>
                  </>
                )}
                
              </Carousel.Caption>
            </Carousel.Item>
          ))
        }
      </Carousel>
    </div>
  )
}

export default IntroductionCarousel