import React from 'react'
import { CardGroup, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from "reactstrap"
import mikeProf from '../assets/mike_prof.jpeg'
import meganProf from '../assets/prof-pic-md.jpeg'
import peterProf from '../assets/peter-prof-pic.jpeg'
import "./AboutUs.css"

const AboutUs = () => {
  return (
    <>
      <h1>Meet the team!</h1>
      <CardGroup>
        <Card>
          <CardImg
            alt="Project Manager profile"
            src={meganProf}
            top
            width="100%"
            className="profile-pic"
          />
          <CardBody>
            <CardTitle tag="h5">
              Megan DeRisi
            </CardTitle>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
            >
              Product Manager
            </CardSubtitle>
            <CardText>
              Hey there! I'm Megan, a passionate and creative team player with a deep love for problem-solving. My journey in the tech world has reiterated the importance of collaboration, and I relish working alongside diverse teams to bring projects to life. With a commitment to crafting elegant, efficient, and user-centric software, I'm dedicated to creating experiences that make a real impact. When I'm not working on my coding skills you can catch my spending time with loved ones, my animal companions, or handcrafting something new.
            </CardText>
          </CardBody>
        </Card>
        <Card>
          <CardImg
            alt="Tech Lead profile"
            src={mikeProf}
            top 
            width="100%"
            className="profile-pic"
          />
          <CardBody>
            <CardTitle tag="h5">
              Mike Chavez
            </CardTitle>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
            >
              Tech Lead
            </CardSubtitle>
            <CardText>
              I'm a dedicated US Army Veteran with a proven track record of leadership and responsibility as a Squad Leader. I'm passionate about technology, not only as a profession but as a personal interest. In my free time, I enjoy building, maintaining, and repairing personal computers.
            </CardText>
          </CardBody>
        </Card>
        <Card>
          <CardImg
            alt="Design Lead profile"
            src={peterProf}
            top
            width="100%"
            className="profile-pic"
          />
          <CardBody>
            <CardTitle tag="h5">
              Peter Ji
            </CardTitle>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
            >
              Design Lead
            </CardSubtitle>
            <CardText>
              Growing up in New York City, I have always had the pleasure and opportunity to connect with people from different backgrounds and ethnicities. This experience helped me thrive working in a team environment as an Athletic Trainer for four years. Throughout those four years working at a High School, I was required to be in constant communication with the athletes, Athletic Director, coaches and parents to ensure our common goals were achieved. My experience as an Athletic Trainer has helped me adapt to various situations effectively and has sharpened my critical thinking and problem solving.

              After wanting a better work-life balance in my life, I have decided to go on a path to Software Development. Going through the concept of programming and coding challenges ignited my passion for honing my skills as a developer. I believe my previous work experience will help me transition into the tech field when working in a team environment and the use of critical thinking to solve a problem. I am looking forward to the challenges and will continue to challenge myself into becoming an impactful Full-Stack Developer.
            </CardText>
          </CardBody>
        </Card>
      </CardGroup>
    </>
  )
}

export default AboutUs