import React, { useState } from 'react'
import { CardGroup, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap"
import mikeProf from '../assets/mike_prof.jpeg'
import meganProf from '../assets/prof-pic-md.jpeg'
import peterProf from '../assets/peter-prof-pic.jpg'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';
import ReactCardFlip from 'react-card-flip'
import StellaArtois from '../assets/stella-artois.jpeg'
import "./AboutUs.css"

const AboutUs = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <>
      <div className='about-us'>
        <h1>Meet the team!</h1>
        <h3>Click on card to see our favorite beer!</h3>
        <CardGroup className='about'>
          <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
            <Card className='about-card px-0 py-0' onClick={handleCardClick} style={{ width: "25rem", height: "870px" }}>
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
                  style={{ fontSize: "1.2rem" }}
                >
                  Product Manager
                </CardSubtitle>
                <CardText>
                  Hey there! I'm Megan, a passionate and creative team player with a deep love for problem-solving. My journey in the tech world has reiterated the importance of collaboration, and I relish working alongside diverse teams to bring projects to life. With a commitment to crafting elegant, efficient, and user-centric software, I'm dedicated to creating experiences that make a real impact. When I'm not working on my coding skills you can catch my spending time with loved ones, my animal companions, or handcrafting something new.
                </CardText>
                <div className='icon-btns'>
                  <IconButton href='https://github.com/megandee' target="_blank" className='icons'>
                    <GitHubIcon className='github-icon' />
                  </IconButton>
                  <IconButton href='https://www.linkedin.com/in/megan-derisi/' target="_blank" className='icons'>
                    <LinkedInIcon className='linkedin-icon' />
                  </IconButton>
                </div>
              </CardBody>
            </Card>

            <Card className='about-card px-0 py-0' onClick={handleCardClick} >
              <CardImg
                alt="beer-pic"
                src="https://beerforce.sg/cdn/shop/files/lotus-pale_1080x.png?v=1690532810"
                top width="100%"
                className='profile-pic'
              />
              <CardBody>
                <CardTitle tag="h5">
                  Favorite Beer:
                </CardTitle>
                <CardText style={{ fontSize: "1.2rem" }}>
                  Lotus Pale
                </CardText>
              </CardBody>
            </Card>
          </ReactCardFlip>

          <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
            <Card className='about-card px-0 py-0' onClick={handleCardClick} style={{ width: "25rem", height: "870px" }}>
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
                  style={{ fontSize: "1.2rem" }}
                >
                  Tech Lead
                </CardSubtitle>
                <CardText>
                  I'm a dedicated US Army Veteran with a proven track record of leadership and responsibility as a Squad Leader. I'm passionate about technology, not only as a profession but as a personal interest. In my free time, I enjoy building, maintaining, and repairing personal computers.
                </CardText>
                <div className='icon-btns'>
                  <IconButton href='https://github.com/Mikechavo' target="_blank" className='icons'>
                    <GitHubIcon className='github-icon' />
                  </IconButton>
                  <IconButton href='https://www.linkedin.com/in/michael-t-chavez/' target="_blank" className='icons'>
                    <LinkedInIcon className='linkedin-icon' />
                  </IconButton>
                </div>
              </CardBody>
            </Card>

            <Card className='about-card px-0 py-0' onClick={handleCardClick}>
              <CardImg
                alt="beer-pic"
                src="https://wildleap.com/wp-content/uploads/WildLeap_IndividPage_IslandHaze.png"
                top width="100%"
                className='profile-pic'
              />
              <CardBody>
                <CardTitle tag="h5">
                  Favorite Beer:
                </CardTitle>
                <CardText style={{ fontSize: "1.2rem" }}>
                  Island Haze
                </CardText>
              </CardBody>
            </Card>

          </ReactCardFlip>

          <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
            <Card className='about-card px-0 py-0' onClick={handleCardClick} style={{ width: "25rem", height: "870px" }}>
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
                  style={{ fontSize: "1.2rem" }}
                >
                  Design Lead
                </CardSubtitle>
                <CardText>
                  Hi, I'm Peter and I'm the design lead for PintPal. I am from New York City but currently residing in San Diego, CA. I am passionate about coding and enjoy learning new programming languages. Besides coding, I am a huge sports enthusiast, especially for basketball and football. I like to partake in an active lifestyle such as working out, playing sports and hiking.
                </CardText>
                <div className='icon-btns'>
                  <IconButton href='https://github.com/hjj2895' target="_blank" className='icons'>
                    <GitHubIcon className='github-icon' />
                  </IconButton>
                  <IconButton href='https://www.linkedin.com/in/peter-ji/' target="_blank" className='icons'>
                    <LinkedInIcon className='linkedin-icon' />
                  </IconButton>
                </div>
              </CardBody>
            </Card>

            <Card className='about-card px-0 py-0' onClick={handleCardClick}>
              <CardImg
                alt="beer-pic"
                src={StellaArtois}
                top width="100%"
                className='profile-pic'
              />
              <CardBody>
                <CardTitle tag="h5">
                  Favorite Beer:
                </CardTitle>
                <CardText style={{ fontSize: "1.2rem" }}>
                  Stella Artois
                </CardText>
              </CardBody>
            </Card>
          </ReactCardFlip>
        </CardGroup>
        <IconButton href='https://github.com/MMPThree/pintpal-frontend' target="_blank">
          <GitHubIcon className='github-icon' sx={{ position: "absolute", bottom: "4rem" }} />
        </IconButton>
      </div>
    </>
  )
}

export default AboutUs