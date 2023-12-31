import React from 'react';
import { CardGroup, Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import './Home.css'
import { FaPencilAlt, FaWpforms, FaRegUserCircle } from "react-icons/fa"
import { Link } from 'react-scroll'

const Home = ({ current_user }) => {
  if (!current_user) {

    return (
      <div className='home-body'>
        <article className='home-scroll'>
          <section className='greeting'>
            <div className='greeting-header'>
              <h1 id='heading'>Welcome to Pint Pal</h1>
              <h3 className='slogan'>Discover, Sip, Share</h3>
              <div className='home-buttons'>
                <Button className="homeButton" >
                  <NavLink><Link to="home-cards" smooth={true} offset={-70} duration={500}>Learn More</Link>
                  </NavLink>
                </Button>
                <Button className="homeButton" >
                  <NavLink to={'/signup'}>Sign Up
                  </NavLink>
                </Button>
                <Button className="homeButton" >
                  <NavLink to={'/aboutus'}>About Us
                  </NavLink>
                </Button>
              </div>
            </div>
          </section>

          <section id='home-cards'>
            <h2>How it Works</h2>
            <CardGroup className='how-content'>
              <Card className='card'>
                <div className='card-column'>
                  <FaRegUserCircle style={{ fontSize: "8rem", marginBottom: "1.5rem" }} />
                  <CardTitle tag="h5" className='sign-up'>
                    Sign Up
                  </CardTitle>
                </div>
                <CardBody className='card-text'>
                  <CardText>
                    Become a member of the Pint Pal community! Here at PintPal, we give feedback on the beers that we've tried for all beer aficionados!
                    Create an account and search through our beer database and share your thoughts with other PintPal members!
                  </CardText>
                </CardBody>
              </Card>

              <Card className='card'>
                <div className='card-column'>
                  <FaWpforms style={{ fontSize: "8rem", marginBottom: "1.5rem" }} />
                  <CardTitle tag="h5">
                    Browse Reviews
                  </CardTitle>
                </div>
                <CardBody className='card-text'>
                  <CardText>
                    Look through our beer library to find your favorite beers and read what other people have had to say about them.
                    See your most recently written review and you can edit or delete your review if your opinion has changed.
                  </CardText>
                </CardBody>
              </Card>

              <Card className='card'>
                <div className='card-column'>
                  <FaPencilAlt style={{ fontSize: "8rem", marginBottom: "1.5rem" }} />
                  <CardTitle tag="h5">
                    Add a Review
                  </CardTitle>
                </div>
                <CardBody className='card-text'>
                  <CardText>
                    Drop your brew thoughts here! Tell us what you enjoyed about drinking your favorite beer
                    and why other members should try it! Or you can tell other members to stay away from it!
                    Share your thoughts and become an active member of PintPal!
                  </CardText>
                </CardBody>
              </Card>
            </CardGroup>
          </section>
        </article>
      </div>
    )
  } else if (current_user) {
    return (
      <>
        <div className='home-body'>
          <article className='home-scroll'>
            <section className='greeting'>
              <div className='greeting-header'>
                <h1 id='heading'>Welcome to Pint Pal</h1>
                <h3 className='slogan'>Discover, Sip, Share</h3>
                <div className='home-buttons'>
                  <Button className="homeButton" >
                    <NavLink><Link to="second-page" smooth={true} offset={-70} duration={500}>Suggestion</Link>
                    </NavLink>
                  </Button>
                  <Button className="homeButton" >
                    <NavLink to={'/beerindex'}>Get Started!
                    </NavLink>
                  </Button>
                  <Button className="homeButton" >
                    <NavLink to={'/aboutus'}>About Us
                    </NavLink>
                  </Button>
                </div>
              </div>
            </section>

            <section id='second-page'>
              <div className='suggestion'>
                <h2 style={{
                  color: "#fff",
                  fontSize: "4rem",
                  textShadow: "-2px -2px 0 #876421, 2px -2px 0 #876421, -2px 2px 0 #876421, 2px 2px 0 #876421"
                }}>You don't know what you want to drink?</h2>
                <h4 style={{
                  color: "#fff",
                  textShadow: "-1px -1px 0 #ed8300, 1px -1px 0 #ed8300, -1px 1px 0 #ed8300, 1px 1px 0 #ed8300"
                }}>Click here!</h4>
                <Button className="homeButton" >
                  <NavLink to={'/randombeer'}>What To Drink
                  </NavLink>
                </Button>
              </div>
            </section>
          </article>
        </div>
      </>
    )
  }
}

export default Home