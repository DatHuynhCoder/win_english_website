/**
 * @author Quynh Anh
 */

import Carousel from 'react-bootstrap/Carousel'

import pic1 from '../../assets/pic1.jpg'  
import pic2 from '../../assets/pic2.jpg'
import pic3 from '../../assets/pic3.jpg'
import pic4 from '../../assets/pic4.jpg'
import pic5 from '../../assets/pic5.jpg'
import pic6 from '../../assets/pic6.jpg'

const IntroductionCarousel = () => {
  return (
    <>
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <div style={{ width: '60%', margin: '0 auto' }}>
            <img
              className="d-block w-100 ta-c"
              src={pic1}
              alt="First slide"
            />
          </div>
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div style={{ width: '60%', margin: '0 auto' }}>
            <img
              className="d-block w-100"
              src={pic2}
              alt="Second slide"
            />
          </div>
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div style={{ width: '60%', margin: '0 auto' }}>
            <img
              className="d-block w-100"
              src={pic3}
              alt="Third slide"
            />
          </div>
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div style={{ width: '60%', margin: '0 auto' }}>
            <img
              className="d-block w-100"
              src={pic4}
              alt="Fourth slide"
            />
          </div>
          <Carousel.Caption>
            <h5>Fourth slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div style={{ width: '60%', margin: '0 auto' }}>
            <img
              className="d-block w-100"
              src={pic5}
              alt="Fifth slide"
            />
          </div>
          <Carousel.Caption>
            <h5>Fifth slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div style={{ width: '60%', margin: '0 auto' }}>
            <img
              className="d-block w-100"
              src={pic6}
              alt="Sixth slide"
            />
          </div>
          <Carousel.Caption>
            <h5>Sixth slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  )
}

export default IntroductionCarousel