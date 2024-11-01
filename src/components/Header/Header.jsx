/**
 * @author Quynh Anh
 * @documentation https://react-bootstrap.netlify.app/docs/components/navbar
 */
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Image } from "react-bootstrap"

import { NavLink } from 'react-router-dom'

import { FaUser } from "react-icons/fa"

import './Header.scss'
import logoWinEng from '../../assets/logoWinEng.svg'

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
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
            <NavLink to={`/about`} className={'nav-link'}>About</NavLink>
            <NavLink to={`/admin`} className={'nav-link'}>Lộ trình</NavLink>
            <NavDropdown title="Hỗ trợ" id="basic-nav-dropdown">              
              <NavLink to={`/login`} className={'dropdown-item'}>Login</NavLink>
              <NavLink to={`/signup`} className={'dropdown-item'}>Signup</NavLink>
              <NavDropdown.Divider />
              <NavLink to={`/others`} className={'dropdown-item'}>Others</NavLink>
            </NavDropdown>
          </Nav>
          <Nav>
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
  )
}

export default Header