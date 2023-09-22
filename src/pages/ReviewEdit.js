import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Form, FormGroup, Input, Label, Button } from "reactstrap"

const ReviewEdit = ({ reviews, currentUser, beers }) => {

  const navigate = useNavigate()
  let { id } = useParams()

  const currentReview = reviews?.find((review) => review.id === +id)

  const [editReview, setEditReview] = useState({
    city: currentReview.city,
    state: currentReview.state,
    review_text: currentReview.review_text,
    rating: currentReview.rating,
    user_id: currentUser.id,
    beer_id: beers.id
  })

  const handleChange = (e) => {
    setEditReview({ ...editReview, [e.target.name]: e.target.value })
  }
  return (
    <div className='containerAll'>
      <Form className='form'>
        <div className='container2'>
          <div className='containerHead'>
            <div className='heading'>
              <h2>Edit Review</h2>
            </div>
          </div>
          <div className='form-content'>
            <FormGroup>
              <Label for="city">
                City Name:
              </Label>
              <Input id="city" name="city" placeholder="Enter a city" type="text" onChange={handleChange} value={editReview.city} />
            </FormGroup>

          </div>
        </div>
      </Form>
    </div>
  )
}

export default ReviewEdit