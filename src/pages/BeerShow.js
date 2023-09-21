import React from 'react'
import ReviewDelete from './ReviewDelete'
import Review from './Review'
import { useParams } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { Button } from 'reactstrap'
import mockReviews from '../mockReviews'
import mockBeers from '../mockBeers'


const BeerShow = () => {
  const { id } = useParams()

  let selectedBeer = mockBeers?.find((beer) => beer.id === +id)

  // Filter reviews based on the selected beer's id
  let beerReviews = mockReviews.filter((review) => review.beer_id === selectedBeer.id)
  return (

    <>
    {selectedBeer && (
      <>
      <img alt={selectedBeer.name} src={selectedBeer.image_url} />
      <h3> {selectedBeer.name}</h3>
      <ul>
        <li>{selectedBeer.style}</li>
        <li>ABV: {selectedBeer.abv}%</li>
        <li>{selectedBeer.description}</li>
      </ul>
      <Review reviews={beerReviews} />
      </>
    )}
    </>
  )
}

export default BeerShow
