// import React from "react";
// import { useState, useEffect } from "react";
// import { Navbar, Nav, Container } from "react-bootstrap";
// import logo from '../assets/img/logo.svg';
// import navIcon1 from '../assets/img/nav-icon1.svg';
// import navIcon2 from '../assets/img/nav-icon2.svg';
// import navIcon3 from '../assets/img/nav-icon3.svg';
// // import { HashLink} from 'react-router-hash-link';
// // import {
// //   BrowserRouter as Router
// // } from "react-router-dom"; 

// export const NavBar = () => {

//   const [activeLink, setActiveLink] = useState('home');
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const onScroll = () => {
//       if (window.scrollY > 50) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     }

//     window.addEventListener("scroll", onScroll);

//     return () => window.removeEventListener("scroll", onScroll);
//   }, [])

//   const onUpdateActiveLink = (value) => {
//     setActiveLink(value);
//   }

//   return (
//       <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
//         <Container>
//           <Navbar.Brand href="#home">
//             <img src={logo} alt="Logo" />
//           </Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav">
//             <span className="navbar-toggler-icon"></span>
//           </Navbar.Toggle>
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="me-auto">
//               <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
//               <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
//               <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
//             </Nav>
//             <span className="navbar-text">
//               <div className="social-icon">
//                 <a href="www.instagram.com"><img src={navIcon1} alt="" /></a>
//                 <a href="www.facebook.com"><img src={navIcon2} alt="" /></a>
//                 <a href="www.linked.com"><img src={navIcon3} alt="" /></a>
//               </div>
//                 <button className="vvd" onClick={ () => console.log('connect')}><span>Let’s Connect</span></button>
//             </span>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//   )
// }

// export default NavBar;

import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/Logo.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import navIcon5 from '../assets/img/nav-icon5.png'

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/madhav-somani-0b01a6261/"><img src={navIcon1} alt="Instagram" /></a>
              <a href="https://wa.me/+919636806364"><img src={navIcon5} alt="Instagram" /></a>
              <a href="https://github.com/somanimadhav/"><img src="data:image/png;base64,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" alt="Github" color="white"/></a>
              <a href="https://www.instagram.com/whomadhavsomani/?hl=en"><img src={navIcon3} alt="LinkedIn" /></a>
            </div>
            <button className="vvd" onClick={() => console.log('connect')}><span>Let’s Connect</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar;
