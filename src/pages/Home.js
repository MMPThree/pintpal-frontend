import React from 'react';
import { CardGroup, Card, CardImg, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import './Home.css'
import { FaPencilAlt, FaWpforms, FaRegUserCircle } from "react-icons/fa"


const Home = () => {
  return (
    <>
      <section className='home-body'>
        <div className='greeting'>
        <h1 id='heading'>Welcome to Pint Pal 🍻</h1>
        <div className='home-buttons'>
      <Button className="homeButton" >
        <NavLink>Learn More
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
      
      <section className='home-cards'>
      <h2>How it works</h2>
      <CardGroup>
        <Card>
          <FaRegUserCircle />
          <CardBody>
            <CardTitle tag="h5">
              Create an Account
            </CardTitle>
            <CardText>
              Become a member of the Pint Pal community!
            </CardText>
          </CardBody>
        </Card>
        <Card>
          <CardImg
            alt="Card image cap"
            src="https://picsum.photos/318/180"
            top
            width="100%"
          />
          <CardBody>
            <CardTitle tag="h5">
              Browse Reviews
            </CardTitle>
            <CardText>
              See what felllow members have to say here!
            </CardText>
          </CardBody>
        </Card>
        <Card>
          <CardImg
            alt="Card image cap"
            src="https://picsum.photos/318/180"
            top
            width="100%"
          />
          <CardBody>
            <CardTitle tag="h5">
              Add a Review
            </CardTitle>
            <CardText>
              Drop your brew thoughts here!
            </CardText>
          </CardBody>
        </Card>
      </CardGroup>
      </section>
    </>
  )
}

export default Home