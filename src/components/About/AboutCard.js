import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Maciej Baścik </span>
            from <span className="purple"> Tychy, Poland</span>
            <br />
            I am currently employed as a wordpress developer at PapillonMedia.
            <br />
            I am currently a Computer Science student with huge ambition.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Producing music (I'm mixing engineer, producer and musician)
            </li>
            <li className="about-activity">
              <ImPointRight /> Chess
            </li>
            <li className="about-activity">
              <ImPointRight /> Gym
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Maciej Baścik</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
