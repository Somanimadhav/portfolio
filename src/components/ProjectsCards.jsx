import { Col } from 'react-bootstrap';

export const ProjectsCards = ({ title, description, imgUrl, src, link }) => (
  <Col sm={6} md={4} className="project-card-column">
    <article className="proj-imgbx">
      <img src={imgUrl} alt={`${title} project preview`} loading="lazy" />
      <div className="proj-txtx">
        <h3>{title}</h3>
        <p>{description}</p>
        {link ? (
          <a href={link} target="_blank" rel="noreferrer">{src || 'View project'}</a>
        ) : src ? <span>{src}</span> : null}
      </div>
    </article>
  </Col>
);
