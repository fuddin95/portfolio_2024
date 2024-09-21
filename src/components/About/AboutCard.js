import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Fahad Uddin </span>
            from <span className="purple"> Toronto, Ontario.</span>
            <br />
            <br />
            As a versatile full-stack developer and blockchain pioneer with over
            5 years of experience, I've been at the forefront of both web
            development and the decentralized finance revolution. I'm the
            co-founder of
            <a
              className="purple"
              style={{ marginLeft: "10px" }}
              target="_blank"
              href="https://www.folionomics.com"
            >
              <span>Folionomics,</span>
            </a>
            I specialize in turning cutting-edge DeFi concepts into real-world,
            scalable solutions. My expertise spans the entire web development
            spectrum, from crafting responsive and intuitive user interfaces to
            architecting robust backend systems and optimizing database
            performance.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Actively trade crypto currencies
            </li>
            <li className="about-activity">
              <ImPointRight /> Meeting new people
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "At the intersection of innovation and execution, that's where
            you'll find me – turning visionary ideas into digital reality."
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
