import React, { useState } from 'react'
import Router from "next/router";
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../../assets/logo.png';
import Images from '../Images';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';

const Header = (props: any) => {
  return (
    <div>
      <Navbar className='header'>
        <Navbar.Brand href='#home'>
          <div className='logo d'>
            <Images icon={logo} alt='loginImage' width='30px' height='30px' />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Col xs={11}>
          <Navbar.Collapse className='justify-content-end'>

            <NavDropdown title='name. surname.com' id='basic-nav-dropdown'>
              <NavDropdown.Item href='/edit-profile'>Edit Profile</NavDropdown.Item>
              <NavDropdown.Item href='#' onClick={() => { localStorage.clear(); Router.push("/"); }}>Logout</NavDropdown.Item>
            </NavDropdown>
            <label className='ms-4 filter-image' onClick={() => { props.setSideBarStatus(!props.sideBarStatus) }} htmlFor='sideBarStatus'>
              {props.sideBarStatus ? <FontAwesomeIcon className='icon-class' icon={faClose} title='View' /> : <FontAwesomeIcon className='icon-class' icon={faBars} title='View' />}
            </label>
          </Navbar.Collapse>
        </Col>
      </Navbar>
    </div>
  )
}

export default Header