import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import randomPassImg from "../../Assets/Projects/randomPassImg.png";
import pathfinding from "../../Assets/Projects/pathfinding.png";
import shoppingCartImg from "../../Assets/Projects/shoppingCartImg.png";
import devtinder from "../../Assets/Projects/devtinder.png";

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
              imgPath={pathfinding}
              isBlog={false}
              title="Pathfinding Visualizer "
              description="This project leverages the power of modern web technologies to provide a clear and engaging representation of how Dijkstra's Algorithm finds the shortest path between two points."
              ghLink="https://github.com/tiwariadarsh04/WayFinder"
              demoLink="https://wayfinder-qwy5.onrender.com/#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shoppingCartImg}
              isBlog={false}
              title="SHOPPING CART"
              description="Developed a versatile and responsive shopping cart application in which users can add and delete items in the cart."
              ghLink="https://github.com/tiwariadarsh04/shopping-cart"
              demoLink="https://shopping-cart-wheat-rho.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={randomPassImg}
              isBlog={false}
              title="RANDOM PASSWORD GENERATOR"
              description="•	One can set constraints to generate the password like including uppercase letters, lowercase letters, Numbers and Symbols.
•	One can also set the length of the password to generate and we can also get to know whether the generated password is strong or weak.
"
              ghLink="https://github.com/tiwariadarsh04/randompasswordgenerator_"
              demoLink=" https://passgenrandom.vercel.app/"            
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={devtinder}
              isBlog={false}
              title="Dev-tinder"
              description="A socisl Media platform for developers to connect and share projects."
              ghLink="https://github.com/tiwariadarsh04/DevTinder_Web"
              demoLink="https://devtinder-web-ncza.onrender.com/"            
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
