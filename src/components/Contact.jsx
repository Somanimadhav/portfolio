import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Container, Row, Col } from 'react-bootstrap';
import contactImg from '../assets/img/contact-img.svg';
import 'animate.css';

const initialForm = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  message: '',
};

const Contact = () => {
  const formRef = useRef(null);
  const illustrationRef = useRef(null);
  const formContentRef = useRef(null);
  const [illustrationVisible, setIllustrationVisible] = useState(false);
  const [formVisible, setFormVisible] = useState(false);
  const [formDetails, setFormDetails] = useState(initialForm);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      setIllustrationVisible(true);
      setFormVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        if (entry.target === illustrationRef.current) setIllustrationVisible(true);
        if (entry.target === formContentRef.current) setFormVisible(true);
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.15 });

    if (illustrationRef.current) observer.observe(illustrationRef.current);
    if (formContentRef.current) observer.observe(formContentRef.current);
    return () => observer.disconnect();
  }, []);

  const onFormUpdate = (event) => {
    const { name, value, dataset } = event.target;
    const stateKey = dataset.stateKey || name;
    setFormDetails((current) => ({ ...current, [stateKey]: value }));
    if (status) setStatus(null);
  };

  const sendEmail = async (event) => {
    event.preventDefault();
    if (!formRef.current || sending) return;

    setSending(true);
    setStatus(null);
    try {
      await emailjs.sendForm('service_0jhmdxk', 'template_v18sjus', formRef.current, {
        publicKey: 'JMLn94XHWh6b95T7a',
      });
      setStatus({ success: true, message: 'Thanks! Your message has been sent.' });
      setFormDetails(initialForm);
      formRef.current.reset();
    } catch (error) {
      console.error('EmailJS send failed:', error);
      setStatus({ success: false, message: 'Your message could not be sent. Please try again or contact me on LinkedIn.' });
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="contact" id="connect" aria-labelledby="contact-heading">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6}>
            <img
              ref={illustrationRef}
              className={illustrationVisible ? 'animate__animated animate__zoomIn' : ''}
              src={contactImg}
              alt="Contact illustration"
              loading="lazy"
            />
          </Col>
          <Col xs={12} md={6}>
            <div ref={formContentRef} className={formVisible ? 'animate__animated animate__fadeIn' : ''}>
              <h2 id="contact-heading">Get in touch</h2>
              <p className="contact-intro">Have a role, project, or idea in mind? Send me a message.</p>
              <form ref={formRef} onSubmit={sendEmail}>
                    <Row>
                      <Col xs={12} sm={6} className="px-1">
                        <label className="visually-hidden" htmlFor="contact-first-name">First name</label>
                        <input id="contact-first-name" name="firstName" type="text" autoComplete="given-name" value={formDetails.firstName} placeholder="First Name" onChange={onFormUpdate} required />
                      </Col>
                      <Col xs={12} sm={6} className="px-1">
                        <label className="visually-hidden" htmlFor="contact-last-name">Last name</label>
                        <input id="contact-last-name" name="lastName" type="text" autoComplete="family-name" value={formDetails.lastName} placeholder="Last Name" onChange={onFormUpdate} required />
                      </Col>
                      <Col xs={12} sm={6} className="px-1">
                        <label className="visually-hidden" htmlFor="contact-email">Email address</label>
                        <input id="contact-email" name="reply_to" data-state-key="email" type="email" autoComplete="email" value={formDetails.email} placeholder="Email Address" onChange={onFormUpdate} required />
                      </Col>
                      <Col xs={12} sm={6} className="px-1">
                        <label className="visually-hidden" htmlFor="contact-phone">Phone number (optional)</label>
                        <input id="contact-phone" name="phone" type="tel" autoComplete="tel" value={formDetails.phone} placeholder="Phone No. (optional)" onChange={onFormUpdate} />
                      </Col>
                      <Col xs={12} className="px-1">
                        <label className="visually-hidden" htmlFor="contact-message">Message</label>
                        <textarea id="contact-message" name="message" rows={6} value={formDetails.message} placeholder="Your Message" onChange={onFormUpdate} required minLength={10} />
                        <button type="submit" disabled={sending} aria-busy={sending}>
                          <span>{sending ? 'Sending…' : 'Send message'}</span>
                        </button>
                      </Col>
                      {status && (
                        <Col xs={12}>
                          <p className={status.success ? 'success' : 'danger'} role="status" aria-live="polite">{status.message}</p>
                        </Col>
                      )}
                    </Row>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
