import React from 'react'
import { NavLink } from 'react-router-dom'
import {Card, CardBody, CardTitle, CardSubtitle, Button, CardImg} from 'reactstrap'

const BeerIndex = ({beers}) => {
  return (
    <div className='beer-body'>
      <h1>Beer Listing</h1>
      <div className='beer-listings'>
        {beers?.map((beer, index) => {
          return(
            <Card key={index} className='beer-cards'>
              <CardImg top width="100%" src={beer.image_url} alt="" className="beer-picture"/>
              <CardBody>
                <div className='beer-text'>
                  <CardTitle><b>{beer.name}</b></CardTitle>
                  <ul>
                  <li><CardSubtitle>{beer.style}</CardSubtitle></li>
                  <li><CardSubtitle>ABV: {beer.abv}%</CardSubtitle></li>
                  <li><CardSubtitle>{beer.description}</CardSubtitle></li>
                  </ul>
                </div>
                <NavLink to={`/beershow/${beer.id}`} className='nav-link'>
                  <Button className='beer-button'>Details</Button>
                </NavLink>
                {/* add review button */}
                <NavLink  className='nav-link'>
                  <Button className='beer-button'>Add Review</Button>
                </NavLink>
              </CardBody>
            </Card>
          )
        })}
      </div>
    </div>
  )
}

export default BeerIndex