import { Col,Tab,Container,Row,Nav} from 'react-bootstrap';
import {ProjectsCards} from"./ProjectsCards";
import colorSharp2 from "../assets/img/color-sharp2.png"
import projImg1 from"../assets/img/project-img1.png";
import projImg2 from"../assets/img/project-img2.png";
import projImg3 from"../assets/img/project-img3.png";
import projImg4 from"../assets/img/project-img4.png";

const Projects = () => {

    const projects = [
        {
            title: "E-Commerce Clone",
            description: "An e-commerce clothing storefront built with HTML, CSS, and JavaScript.",
            imgUrl: projImg1,
            src: "Fancy a Demo?",
        },
        {
            title: "To-Do List",
            description: "A simple task list for capturing and tracking everyday to-dos.",
            imgUrl: projImg2,
        },
        {
            title: "Portfolio (1.0)",
            description: "My earlier portfolio built with HTML, CSS, and JavaScript.",
            imgUrl: projImg3,
        },
        {
            title: "Weather app",
            description: "A React app that displays weather conditions for a selected location.",
            imgUrl: projImg4,
        },

    ];
  return (
    <section className="project" id="projects">
        <Container>
            <Row>
                <Col>
                <h2>Projects</h2>
                <p>Developement is a fun journey, errors and bugs are the endavours that we conquer. The projects mentioned here are bugs and error free !
So do check them out and let me know your feedbacks !</p>
                <Tab.Container id="projects-tab" defaultActiveKey="first">
                <Nav>
                    <Nav.Item>
                      <Nav.Link eventKey="first"></Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                        <Row>
                            {
                                projects.map((project, index) =>{
                                    return (
                                        <ProjectsCards
                                        key={index}
                                        {...project}
                                        />
                                    )
                                })
                            }
                        </Row>
                    </Tab.Pane>
                  </Tab.Content>
                  </Tab.Container> 
                </Col>
            </Row>
        </Container>
        <img className="background-image-right" src={colorSharp2} alt="" aria-hidden="true" />
    </section>
  )
}

export default Projects
