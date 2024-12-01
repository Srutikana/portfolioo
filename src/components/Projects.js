import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/news34.png";
import projImg2 from "../assets/img/alum4.png";
import projImg3 from "../assets/img/medi3.png";
import projImg4 from "../assets/img/chatbot1.png";
import projImg5 from "../assets/img/temp1.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "NewsApp",
      description: "NewsApp is a news aggregator that delivers the latest headlines and articles from various sources, personalized to your interests and preferences.",
      imgUrl: projImg1,
      url: "https://dailynewsappbysruti.netlify.app/",
    },
    {
      title: "AlumniHub",
      description: "AlumniHub is a platform that connects alumni and students, enabling networking, mentorship, and collaboration opportunities.",
      imgUrl: projImg2,
      url: "https://alumnihub.netlify.app/",
    },
    {
      title: "Medilab",
      description: "MediLab is a healthcare application designed to streamline medical appointments, consultations, and patient management for doctors and patients.",
      imgUrl: projImg3,
      url: "https://medilab2024.netlify.app/",
    },
    {
      title: "Chatbot",
      description: "The Chatbot is an AI-powered assistant designed to provide instant support, answer queries, and enhance user interactions through automated conversations.",
      imgUrl: projImg4,
      url: "https://aichatbotbysruti.streamlit.app/",
    },

    {
      title: "Temperature Converter",
      description: "The Temperature Converter is a simple tool that allows users to easily convert temperatures between different units, such as Celsius, Fahrenheit, and Kelvin, for various practical applications.",
      imgUrl: projImg5,
      url: "https://srutikana.github.io/Temperature-Converter/",
    },
    // You can add more projects here
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  {/* Keep the "Projects" heading */}
                  <h2 className="mb-5">Projects</h2>

                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => (
                              <ProjectCard
                                key={index}
                                title={project.title}
                                description={project.description}
                                imgUrl={project.imgUrl}
                                url={project.url} // Pass the URL to each card
                              />
                            ))
                          }
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background" />
    </section>
  );
}
