import React from 'react'
import ReviewDelete from './ReviewDelete'
import Review from './Review'
import { useParams } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { Button } from 'reactstrap'


const BeerShow = ({ beers }) => {
  const { id } = useParams()

  let selectedBeer = beers?.find((beer) => beer.id === +id)
  
  return (

    <>
      <img alt={`picture of ${selectedBeer.name}`} src={selectedBeer.image_url} />
      <h3> {selectedBeer.name}</h3>
      <ul>
        <li>{selectedBeer.style}</li>
        <li>ABV: {selectedBeer.abv}%</li>
        <li>{selectedBeer.description}</li>
      </ul>
      <Review />
      
    </>
  )
}

export default BeerShow