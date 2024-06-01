import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import Algorithm from "../../Assets/Projects/Algorithm.png";
import Birthday from "../../Assets/Projects/Birthday.png";
import Viral from "../../Assets/Projects/Viral.png";
import CartApp from "../../Assets/Projects/CartApp.png";
import SoundSwipe from "../../Assets/Projects/SoundSwipe.png";
import YT from "../../Assets/Projects/YT.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Viral}
              isBlog={false}
              title="ViralClothes (NextJS app)"
              description="NextA JS app for finding new clothing trends"
              ghLink="https://github.com/MaciejBascik/ViralClothes"
              demoLink="https://viralclothes.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={YT}
              isBlog={false}
              title="React Youtube Clone"
              description="React Youtube Clone Using RapidApi (Youtube v3)."
              ghLink="https://github.com/MaciejBascik/youtube-Clone"
              demoLink="https://maciejbascik.github.io/youtube-Clone/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SoundSwipe}
              isBlog={false}
              title="SoundSwipe"
              description="A tinder-inspired app called SoundSwipe. It recommends new songs and lets you play them live. It has Tinder functionality."
              ghLink="https://github.com/MaciejBascik/SoundSwipe"
              demoLink="https://maciejbascik.github.io/SoundSwipe/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Algorithm}
              isBlog={false}
              title="EduAlgorithms"
              description="A educational projects that shows how programming algorithms work. Based on Django technology."
              ghLink="https://github.com/MaciejBascik/Django_basic_algorithms"
              demoLink="https://maciek1320.pythonanywhere.com/"              
            />
          </Col>



         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
