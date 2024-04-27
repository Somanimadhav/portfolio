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
            description: "An e-commerce clothstore built using HTML,CSS and Javascript",
            imgUrl: projImg1,
            src: "Fancy a Demo?",
        },
        {
            title: "To-Do List",
            description: "An app to store all the things to do(touche)",
            imgUrl: projImg2,
        },
        {
            title: "Portfolio (1.0)",
            description: "Made using HTML,CSS and Javascript",
            imgUrl: projImg3,
        },
        {
            title: "Weather app",
            description: "To Check the conditions of the atmosphere for a given location (React.js)",
            imgUrl: projImg4,
        },

    ];
  return (
    <section className="project" id="project">
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
        <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}

export default Projects
