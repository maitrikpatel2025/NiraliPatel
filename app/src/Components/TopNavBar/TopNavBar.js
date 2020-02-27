import React from 'react';
import Logo from '../Logo/Logo';
import Btn from '../Button/Btn';
const TopNavBar = () => {
 return (
    <nav className="NavBar">
      <a>
      <Logo/>
      </a>
      <div>
      <Btn Name="Home"/>
      <Btn Name="About Us"/>
      <Btn Name="Services"/>
      <Btn Name="Contact Us"/>
      <Btn Name="Testimonal"/>
      </div>
   </nav>

  )
}
export default TopNavBar;