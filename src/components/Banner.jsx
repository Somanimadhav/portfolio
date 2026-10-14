import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../assets/img/header-img.svg';
import MadhavResume from '../assets/img/Madhav_resume.pdf';

const roles = ['Frontend Developer', 'Problem Solver', 'React.js Developer'];

const Banner = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let delay = deleting ? 45 : 90;

    if (!deleting && text === currentRole) delay = 1400;
    if (deleting && text.length === 0) delay = 350;

    const timer = window.setTimeout(() => {
      if (!deleting && text === currentRole) {
        setDeleting(true);
        return;
      }

      if (deleting && text.length === 0) {
        setDeleting(false);
        setRoleIndex((current) => (current + 1) % roles.length);
        return;
      }

      setText((current) =>
        deleting ? current.slice(0, -1) : currentRole.slice(0, current.length + 1),
      );
    }, delay);

    return () => window.clearTimeout(timer);
  }, [text, deleting, roleIndex]);

  return (
    <section className="banner" id="home" aria-labelledby="hero-heading">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={7} xl={7}>
            <span className="tagline">Welcome to my portfolio</span>
            <h1 id="hero-heading">
              Hi, I&apos;m Madhav Somani
              <span className="wrap" aria-live="polite"> {text}</span>
            </h1>
            <p>
              I build responsive, user-focused web experiences with React and modern JavaScript.
              I enjoy solving problems, learning new technologies, and bringing ideas to life through code.
            </p>
            <a className="resume-link" href={MadhavResume} download="Madhav_Somani_Resume.pdf">
              View my resume <ArrowRightCircle aria-hidden="true" />
            </a>
          </Col>
          <Col xs={12} md={5} xl={5}>
            <img src={headerImg} alt="Illustration representing web development" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
