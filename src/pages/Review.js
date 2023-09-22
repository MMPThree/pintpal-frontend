import React from 'react'
import { useParams } from 'react-router-dom'
import ReviewEdit from './ReviewEdit'
import { NavLink, Button } from 'reactstrap'


const Review = ({ currentReview, reviews }) => {



  return (
    <div>
      <h2>Reviews</h2>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            
            <p>{review.city}, {review.state}</p>
            <p>Rating: {review.rating}/5</p>
            <p>"{review.review_text}"</p>
          </li>
         

        ))}
      </ul>
      <NavLink to={`/reviewedit/${currentReview.id}
          `} className="nav-link">
          <Button>
            Edit Review
          </Button>
        </NavLink>
    </div>
  )

}

export default Review