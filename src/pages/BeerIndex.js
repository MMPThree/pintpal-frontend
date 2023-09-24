import React from 'react'
import { NavLink } from 'react-router-dom'
import {Card, CardBody, CardTitle, CardSubtitle, Button, CardImg} from 'reactstrap'
import './BeerIndex.css'

const BeerIndex = ({beers, current_user}) => {
  return (
    <>
    <div className='beer-body'>
      <h1>Beer Listing</h1>
      <div className='beer-listings'>
        {beers?.map((beer, index) => {
          return(
            <Card key={index} className='beer-cards px-0 py-0'>
              <CardImg top width="100%" src={beer.image_url} alt="" className='custom-image'/>
              <CardBody>
                <div className='beer-text'>
                  <CardTitle><b>{beer.name}</b></CardTitle>
                  <CardSubtitle>{beer.style}</CardSubtitle>
                  <CardSubtitle>ABV: {beer.abv}%</CardSubtitle>
                </div>
                <div className='index-buttons'>
                <NavLink to={`/beershow/${beer.id}`} className='nav-link'>
                  <Button className='beer-button'>Details</Button>
                </NavLink>
                {current_user && (
                <>
                <NavLink to={'/reviewnew'}  className='nav-link'>
                  <Button className='beer-button'>Add Review</Button>
                </NavLink>
                </>
                )}
                </div>
              </CardBody>
            </Card>
          )
        })}
      </div>
    </div>
    </>
  )
}

export default BeerIndex