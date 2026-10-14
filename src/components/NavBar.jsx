import { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../assets/img/Logo.png';
import linkedInIcon from '../assets/img/nav-icon1.svg';
import instagramIcon from '../assets/img/nav-icon3.svg';
import whatsAppIcon from '../assets/img/nav-icon5.png';

const links = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Projects', href: '#projects', id: 'projects' },
];

const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateScrolled = () => setScrolled(window.scrollY > 50);
    updateScrolled();
    window.addEventListener('scroll', updateScrolled, { passive: true });
    return () => window.removeEventListener('scroll', updateScrolled);
  }, []);

  return (
    <Navbar expand="lg" className={scrolled ? 'scrolled' : ''} aria-label="Main navigation">
      <Container>
        <Navbar.Brand href="#home" aria-label="Madhav Somani home">
          <img src={logo} alt="Madhav Somani" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="portfolio-navbar" aria-label="Toggle navigation" />
        <Navbar.Collapse id="portfolio-navbar">
          <Nav className="me-auto">
            {links.map(({ label, href, id }) => (
              <Nav.Link
                key={id}
                href={href}
                className={activeLink === id ? 'active navbar-link' : 'navbar-link'}
                aria-current={activeLink === id ? 'page' : undefined}
                onClick={() => setActiveLink(id)}
              >
                {label}
              </Nav.Link>
            ))}
          </Nav>
          <div className="navbar-text">
            <div className="social-icon" aria-label="Social links">
              <a href="https://www.linkedin.com/in/madhav-somani-0b01a6261/" aria-label="LinkedIn" target="_blank" rel="noreferrer">
                <img src={linkedInIcon} alt="" />
              </a>
              <a href="https://wa.me/919636806364" aria-label="WhatsApp" target="_blank" rel="noreferrer">
                <img src={whatsAppIcon} alt="" />
              </a>
              <a href="https://github.com/Somanimadhav" aria-label="GitHub" target="_blank" rel="noreferrer">
                <span className="social-text" aria-hidden="true">GH</span>
              </a>
              <a href="https://www.instagram.com/whomadhavsomani/" aria-label="Instagram" target="_blank" rel="noreferrer">
                <img src={instagramIcon} alt="" />
              </a>
            </div>
            <a className="vvd" href="#connect"><span>Let&apos;s connect</span></a>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
