import React from 'react'
import { CardGroup, Card, CardImg, CardBody, CardTitle, CardSubtitle,CardText, Button} from "reactstrap"

const AboutUs = () => {
  return (
    <>
    <h1>Meet the team!</h1>
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
        Megan DeRisi
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        Product Manager
      </CardSubtitle>
      <CardText>
        This is where we will talk about ourselves, our journeys, and our hobbies!
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
        Mike Chavez
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        Tech Lead 
      </CardSubtitle>
      <CardText>
      This is where we will talk about ourselves, our journeys, and our hobbies!
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
        Peter Ji
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        Design Lead 
      </CardSubtitle>
      <CardText>
      This is where we will talk about ourselves, our journeys, and our hobbies!
      </CardText>
    </CardBody>
  </Card>
</CardGroup>
</>
  )
}

export default AboutUs