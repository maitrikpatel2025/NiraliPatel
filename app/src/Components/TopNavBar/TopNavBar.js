import React from 'react';
import Logo from '../Logo/Logo';
import Btn from '../Button/Btn';
import './TopNavBar.css';

const TopNavBar = () => {
 return (
    <nav className="TopNav navbar navbar-expand-lg">
      <a className="navbar-brand" href="#"><Logo/></a>
        <button className="navbar-toggler" type="button"
         data-toggle="collapse" 
         data-target="#navbarTogglerDemo02" 
         aria-controls="navbarTogglerDemo02"
         aria-expanded="false" aria-label="Toggle navigation">
         <i className="bars icon"></i>
         </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="Element navbar-nav mr-auto">
         <Btn Name="home"/>
         <Btn Name="home"/>
         <Btn Name="home"/>
         <Btn Name="home"/>
         <Btn Name="home"/>
        </ul>
      </div>
    </nav>
  )
}
export default TopNavBar;