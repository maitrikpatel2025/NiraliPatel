import React from 'react';
import Nav from 'react-bootstrap/Nav';

import Navbar from 'react-bootstrap/Navbar';
import Logo from '../Logo/Logo';
import Btn from '../Button/Btn';
import './TopNavBar.css';

const TopNavBar = () => {
 return (
    <Navbar className="TopNav">
         <Logo/>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
         <Navbar.Collapse id="responsive-navbar-nav">
           <Nav className="mr-auto">
            <Btn Name="Home"></Btn>
            <Btn Name="About us"></Btn>
            <Btn Name="Service"></Btn>
            <Btn Name="Testimonial"></Btn>
            <Btn Name="Contact Us"></Btn>
           </Nav>
         </Navbar.Collapse>
  </Navbar>
  )
}
export default TopNavBar;