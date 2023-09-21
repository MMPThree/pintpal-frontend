import React from 'react';
import { CardGroup, Card, CardImg, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import './Home.css'



const Home = () => {
  return (
    <>
      <div>
        <h1>Welcome to Pint Pal 🍻</h1>
      </div>
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
      <br />
      <br />
      <br />
      <br />
      <h2>How it works</h2>
      <CardGroup>
        <Card>
          <CardImg
            alt="Card image cap"
            src="https://picsum.photos/318/180"
            top
            width="100%"
          />
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
    </>
  )
}

export default Home