import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { Link, NavLink } from 'react-router-dom'

const authenticatedOptions = (
  <>
    <NavLink to='/presets' className='nav-link'>Settings</NavLink>
    <NavLink to='/change-password' className='nav-link'>Change Password</NavLink>
    <NavLink to='/sign-out' className='nav-link'>Sign Out</NavLink>
  </>
)

const unauthenticatedOptions = (
  <>
    <NavLink to='/settings' className='nav-link'>Settings</NavLink>
    <NavLink to='/sign-up' className='nav-link'>Sign Up</NavLink>
    <NavLink to='/sign-in' className='nav-link'>Sign In</NavLink>
  </>
)

const alwaysOptions = (
  <>
    <NavLink to='/' className='nav-link'>Home</NavLink>
  </>
)

const Header = ({ user }) => (
  <>
    <Navbar className="color-nav" variant='dark' expand='md'>
      <Container>
        <Navbar.Brand>
          <Link to='/' style={{ color: '#FFF', textDecoration: 'none' }}>metronome</Link>
        </Navbar.Brand>
        {/* <Navbar.Toggle aria-controls='basic-navbar-nav' /> */}
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            {user && (
              <span className='navbar-text me-2'>Welcome, {user.email}</span>
            )}
            {alwaysOptions}
            {user ? authenticatedOptions : unauthenticatedOptions}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    {/* <Navbar bg='primary' variant='dark' expand='md'>
    </Navbar> */}
  </>
)

export default Header
