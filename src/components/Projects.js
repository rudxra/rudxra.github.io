import {Container,Row,Col, Nav, Tab} from "react-bootstrap";
import {ProjectCard} from "./ProjectCard";
import projImg1 from "../assets/img/projImg1.png";
import projImg2 from "../assets/img/projImg2.png";
import TrackVisibility from "react-on-screen";
import 'animate.css';
import colorSharp2 from "../assets/img/color-sharp2.png";

export const Projects= () =>{
    const projects = [
        {
            title: "Job Portal",
            description: "Job Portal using MERN",
            imgUrl: projImg1,
            link:"https://github.com/rudxra/Mern-Job_Portal"
          },
          {
            title: "Weather App",
            description: "Realtime Weather App using ReactJS",
            imgUrl: projImg2,
            link:"https://github.com/rudxra/weatherApp"
          },
          
    ]
    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                    <TrackVisibility>
                {({isVisible})=>
                <div className={isVisible ? "animated_animated animate__fadeIn":""}>
                    <h2>Projects</h2>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    {/* <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                        <Nav.Item>
                            <Nav.Link eventKey="first">Tab One</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Tab two</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="third">Tab three
                        </Nav.Link>
                        </Nav.Item>
                    </Nav> */}
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <Row>
                                {
                                    projects.map((project,index)=>{
                                        return(
                                            
                                            <ProjectCard
                                            key={index}
                                            {...project}
                                            />
                                         
                                        )
                                    })
                                }
                            </Row>
                        </Tab.Pane>
                        {/* <Tab.Pane eventKey="second">Lorem ipsum</Tab.Pane>
                        <Tab.Pane eventKey="third">Lorem ipsum</Tab.Pane> */}
                    </Tab.Content>
                    </Tab.Container>
                    </div>}</TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}