import React from 'react'
import { useParams } from 'react-router-dom' 
import Rating from "@mui/material/Rating"
import { Avatar } from "@mui/material"
import './Review.css'

const Review = ({ review }) => {
  return (
    <>
    
    <div className='review-container'>

      
      <div className="top-review" key={review.id}>
        <div>
          <div className="avatar">
            <Avatar alt="Remy Sharp" src="" />
            <p className="review-name">Anonymous</p>
          </div>
          <p className="review-location">
            {review.city}, {review.state}
          </p>
        </div>
        <div className="rating-star">
            <Rating
              name="read-only"
              value={review.rating}
              readOnly
              size="medium"
            />
            <p className="review-rating">
            Rating:&nbsp;&nbsp;<span>{review.rating}/5</span>
          </p>
          </div>
      </div>
      <div className="review-text">
        <p>{review.review_text}</p>
      </div>
      {/* <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <p>{review.city}, {review.state}</p>
            <p>Rating: {review.rating}/5</p>
            <p>"{review.review_text}"</p>

          </li>
        ))}
      </ul> */}
      
      
    </div>
    </>
  )

}

export default Review