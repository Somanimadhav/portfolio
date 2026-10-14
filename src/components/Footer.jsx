import { Col, Container, Row } from 'react-bootstrap';
import logo from '../assets/img/Logo.png';
import linkedInIcon from '../assets/img/nav-icon1.svg';
import whatsAppIcon from '../assets/img/nav-icon5.png';
import instagramIcon from '../assets/img/nav-icon3.svg';

const Footer = () => (
  <footer className="footer">
    <Container>
      <Row className="align-items-center">
        <Col xs={12} sm={6}>
          <a href="#home" aria-label="Back to top">
            <img src={logo} alt="Madhav Somani" loading="lazy" />
          </a>
        </Col>
        <Col xs={12} sm={6} className="text-center text-sm-end">
          <div className="social-icon" aria-label="Social links">
            <a href="https://www.linkedin.com/in/madhav-somani-0b01a6261/" aria-label="LinkedIn" target="_blank" rel="noreferrer"><img src={linkedInIcon} alt="" /></a>
            <a href="https://wa.me/919636806364" aria-label="WhatsApp" target="_blank" rel="noreferrer"><img src={whatsAppIcon} alt="" /></a>
            <a href="https://github.com/Somanimadhav" aria-label="GitHub" target="_blank" rel="noreferrer"><span className="social-text" aria-hidden="true">GH</span></a>
            <a href="https://www.instagram.com/whomadhavsomani/" aria-label="Instagram" target="_blank" rel="noreferrer"><img src={instagramIcon} alt="" /></a>
          </div>
          <p>© {new Date().getFullYear()} Madhav Somani. Built with React.</p>
        </Col>
      </Row>
    </Container>
  </footer>
);

export { Footer };
export default Footer;
