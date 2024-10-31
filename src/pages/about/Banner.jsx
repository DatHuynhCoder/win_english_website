/**
 * @author Tan Dat
 */

import Image from 'react-bootstrap/Image';

import BannerPic from '../../assets/banner_about.png'

import './Banner.scss'

const Banner = () => {
    return (
        <div className="banner-container">
    <div className="d-flex justify-content-center">
      <Image src={BannerPic} alt="Banner about" className="banner" fluid />
    </div>
            <div className="banner-content">
                <div className="banner-title">WinEnglish</div>
                <div className="banner-text">Nơi học tập tốt nhất cho người yêu thích tiếng anh</div>
            </div>
        </div>
    )
}

export default Banner;