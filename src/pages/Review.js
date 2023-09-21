import React from 'react'
import { useParams } from 'react-router-dom'
import mockReviews from '../mockReviews'

const Review = ({ reviews }) => {
  const { id } = useParams()

  let selectedReview = reviews?.find((review) => review.id === +id)

  return (
    <div>{selectedReview.city}</div>
  )

}

export default Review