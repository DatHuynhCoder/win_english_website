/**
 * @author Quynh Anh
 * @documentation https://react-bootstrap.netlify.app/docs/components/navbar
 */
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Image } from "react-bootstrap"
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

import { NavLink } from 'react-router-dom'

import { FaUser } from "react-icons/fa"
import { LuCrown } from "react-icons/lu"

import './Header.scss'
import logoWinEng from '../../assets/logoWinEng.svg'
import { useState } from 'react'

const Header = () => {
  const [isVip, setIsVip] = useState(false)
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <Modal 
      show={show} 
      onHide={handleClose}
      backdrop='static'
    >
      <Modal.Header closeButton>
        <Modal.Title>Nâng cấp lên Pro</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Nâng lên Pro đi, không nghiện đâu
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Đóng
        </Button>
        <Button 
          variant="primary" 
          onClick={() => {
            setIsVip(!isVip)
            handleClose()
          }}
          style={{background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(245,255,0,1) 100%, rgba(0,212,255,1) 100%)', border:'none'}}>
          Nâng cấp ngay
        </Button>
      </Modal.Footer>
    </Modal>
    <Navbar expand="lg" className="bg-body-tertiary" fixed="top">
      <Container>
        <NavLink to={`/`} className={'navbar-brand'}>
          <Image
            src={logoWinEng}
            alt="Company logo"
            width={50}
            height={50}
          />
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to={`/users`} className={'nav-link'}>Khóa học</NavLink>
            <NavLink to={`/exam-library`} className={'nav-link'}>Đề thi</NavLink>
            <NavLink to={`/about`} className={'nav-link'}>Về chúng tôi</NavLink>
            <NavLink to={`/admin`} className={'nav-link'}>Lộ trình</NavLink>
          </Nav>
          <Nav>
            <NavLink to={`/`} className={'nav-link'} onClick={handleShow}>
              <span style={{fontSize: '13px', fontWeight: 'bold', color: 'gold'}}>
                <LuCrown color='gold' size={25}/>
                {
                  isVip === false ? <span>&nbsp;GET PRO</span> : <span>&nbsp;You are pro !</span>
                } 
              </span>
            </NavLink>
            <NavDropdown title={<FaUser/>} id="basic-nav-dropdown">              
              <NavLink to={`/login`} className={'dropdown-item'}>Log in</NavLink>
              <NavLink to={`/signup`} className={'dropdown-item'}>Sign up</NavLink>
              <NavDropdown.Divider />
              <NavLink to={`/others`} className={'dropdown-item'}>Others</NavLink>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header