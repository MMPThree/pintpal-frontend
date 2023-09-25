import React from 'react'
import ReviewDelete from './ReviewDelete'
import Review from './Review'
import { useParams } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { Button } from 'reactstrap'
import mockReviews from '../mockReviews'
import mockBeers from '../mockBeers'
import './BeerShow.css'

const BeerShow = ({ current_user }) => {
  const { id } = useParams()

  let selectedBeer = mockBeers?.find((beer) => beer.id === +id)

  // Filter reviews based on the selected beer's id
  let beerReviews = mockReviews?.filter((review) => review?.beer_id === selectedBeer?.id)
  return (
    <div className='beershow'>
    {selectedBeer && (
      <>
      <div className='beer-description'>
      <img alt={selectedBeer.name} src={selectedBeer.image_url} style={{width: "35rem"}}/>
      <div className='beer-content'>
      <h3> {selectedBeer.name}</h3>
      <ul>
        <li>{selectedBeer.style}</li>
        <li>ABV: {selectedBeer.abv}%</li>
        <li className='description'>{selectedBeer.description}</li>
      </ul>
      {current_user && (
        <>
          <div className='index-buttons'>
                <NavLink to={'/beerindex'} className='nav-link'>
                  <Button className='beer-button'>Back to Beers</Button>
                </NavLink>
                <NavLink to={'/reviewnew'}  className='nav-link'>
                  <Button className='beer-button'>Add Review</Button>
                </NavLink>
          </div>
        </>
      )}
      </div>
      </div>
      <h2 className='reviews'>Reviews</h2>
      <div className='review-box'>
        {beerReviews?.map((review, index) => {
          return(
          <div key={index} className='review-margin'>
      <Review review={review}
      current_user={current_user}
      index={index} />
      </div>
          )
    })}
   </div>
      </>
    )}
    </div>
  )
}

export default BeerShow
