/**
 * @author Tan Dat
 * @documentation https://medium.com/@racosta323/create-a-simple-footer-using-react-bootstrap-58c4371a4ade
 */
import React from 'react'
import { Row, Col, Container, Image } from "react-bootstrap"
import Nav from 'react-bootstrap/Nav';
import { NavLink } from "react-router-dom";


import LogoWebEng from "../../assets/logoWinEng.svg"
import FacebookIcon from "../../assets/facebook_icon.svg"
import InstagramIcon from "../../assets/instagram_icon.svg"
import TiktokIcon from "../../assets/tiktok_icon.svg"
import YoutubeIcon from "../../assets/youtube_icon.svg"
import TelegramIcon from "../../assets/telegram_icon.svg"

//css
import "./Footer.scss"

const Footer = () => {
  return (
    <footer className='footer-container'>
      <Container fluid>
        <Row
          className='row-footer'
          style={{ backgroundColor: '#385986', color: '#fff', padding: 50 }}
        >
          <Col>
            <NavLink to="/" className="nav-link">
              <Image
                src={LogoWebEng}
                alt="Company logo"
                width={300}
                height={300}
              />
            </NavLink>
          </Col>
          <Col>
            <Nav className="flex-column fs-6">
              <p className="fw-bold">Về chúng tôi</p>
              <NavLink className="nav-link">Giới thiệu</NavLink>
              <NavLink className="nav-link">Liên hệ</NavLink>
              <NavLink to="/about" className="nav-link">FAQ</NavLink>
            </Nav>
          </Col>
          <Col>
            <Nav className="flex-column fs-6">
              <p className="fw-bold">Kết nối với chúng tôi</p>
              <NavLink to="https://www.facebook.com/" className="nav-link icon-footer-container">
                <Image
                  src={FacebookIcon}
                  alt="Facebook icon-footer"
                  width={58}
                  height={58}
                  className="icon-footer"
                />
                Facebook</NavLink>
              <NavLink to="https://www.instagram.com/" className="nav-link icon-footer-container" >
                <Image
                  src={InstagramIcon}
                  alt="Instagram icon-footer"
                  width={58}
                  height={58}
                  className="icon-footer"
                />
                Intagram</NavLink>
              <NavLink to="https://www.tiktok.com/" className="nav-link icon-footer-container">
                <Image
                  src={TiktokIcon}
                  alt="Tiktok icon-footer"
                  width={58}
                  height={58}
                  className="icon-footer"
                />
                TikTok</NavLink>
              <NavLink to="https://www.youtube.com/" className="nav-link icon-footer-container">
                <Image
                  src={YoutubeIcon}
                  alt="Youtube icon-footer"
                  width={58}
                  height={58}
                  className="icon-footer"
                />
                Youtube</NavLink>
              <NavLink to="https://web.telegram.org/a/" className="nav-link icon-footer-container">
                <Image
                  src={TelegramIcon}
                  alt="Telegram icon-footer"
                  width={58}
                  height={58}
                  className="icon-footer"
                />
                Telegram</NavLink>
            </Nav>
          </Col>
          <Col>
            <Nav className="flex-column fs-6">
              <p className="fw-bold">Sản phẩm</p>
              <NavLink className="nav-link">Khóa học</NavLink>
              <NavLink className="nav-link">Đề thi</NavLink>
              <NavLink className="nav-link">Lộ trình</NavLink>
            </Nav>
          </Col>
          <Col>
            <Nav className="flex-column fs-6">
              <p className="fw-bold">Chính sách</p>
              <NavLink className="nav-link">Điều khoản</NavLink>
              <NavLink className="nav-link">Quy chế hoạt động</NavLink>
              <NavLink className="nav-link">Quyền riêng tư</NavLink>
            </Nav>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer;