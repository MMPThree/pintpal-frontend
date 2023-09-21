import React from 'react'
import { useParams } from 'react-router-dom' 


const Review = ({ reviews }) => {
  return (
    <div>
      <h2>Reviews</h2>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            {/* <h3>Review for {review.city}</h3> */}
            <p>{review.city}, {review.state}</p>
            <p>Rating: {review.rating}/5</p>
            <p>"{review.review_text}"</p>
            
          </li>
        ))}
      </ul>
    </div>
  )

}

export default Review