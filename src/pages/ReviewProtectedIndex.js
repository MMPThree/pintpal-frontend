import React from 'react'
import Review from "./Review"
import { useParams } from 'react-router-dom'
import './ReviewProtectedIndex.css'

const ReviewProtectedIndex = ({ reviews, current_user, deleteReview }) => {
  const myReviews = reviews?.filter(review => current_user?.id === review.user_id)
  
  const { id } = useParams()

  const handleDelete = () => {
    deleteReview(id)
  }

  return (
    <>
    <div className='review-protected'>
      <h2>Your Reviews:</h2>
      <div className='review-protected-box'>
        {myReviews?.map((review, index) => {
          return(
          <div key={index} className='review-protected-margin'>
      <Review review={review}
      current_user={current_user}
      index={index}
      handleDelete={handleDelete} />
      </div>
          )
    })}
   </div>
    </div>
    </>
  )
}

export default ReviewProtectedIndex