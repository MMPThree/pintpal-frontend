import React from 'react'
import { Card, CardImg, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { NavLink } from "react-router-dom"

const ReviewProtectedIndex = ({ reviews, current_user, beers }) => {
  const myReviews = reviews?.filter(review => current_user?.id === review.user_id)
  
  return (
    <>
    <div className='reviews-container'>
      <h1> My Reviews </h1>
      <div className='reviews-body'>
    {myReviews?.map((review, index) => {
      const beer = beers.find((beer) => beer.id === review.beer_id)
      return(
        <Card key={index} className='review-card'>
          <CardImg top width='100%' src={review.image} alt='apt-img'/>
          <CardBody>
            <div className='review-content'>
          <CardTitle><b>${beer.name}</b></CardTitle>
          <CardSubtitle>{review.city}, {review.state}</CardSubtitle>
          <CardSubtitle>{review.review_text}</CardSubtitle>
          </div>
          <NavLink to={`/reviewshow/${review.id}`}>
             <Button className='index-button'>See more details</Button>
             <Button className='index-button'>Edit</Button>
              <Button className='index-button'>Delete</Button> 
          </NavLink>
          </CardBody>
        </Card>
      )
    })}
      </div>
    </div>
    </>
  )
}

export default ReviewProtectedIndex