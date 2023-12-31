import React from 'react'
import Review from "./Review"
import './ReviewProtectedIndex.css'

const ReviewProtectedIndex = ({ reviews, current_user, deleteReview }) => {
  const myReviews = reviews?.filter(review => current_user?.id === review.user_id)

  return (
    <>
      <div className='review-protected'>
        <h1>Your Reviews:</h1>
        <div className='review-protected-box'>
          {myReviews?.map((review, index) => {
            return (
              <div key={index} className='review-protected-margin'>
                <Review review={review}
                  current_user={current_user}
                  index={index}
                  deleteReview={deleteReview} />
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default ReviewProtectedIndex