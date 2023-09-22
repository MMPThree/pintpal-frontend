import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Form, FormGroup, Input, Label, Button } from 'reactstrap'

const ReviewEdit = ({ updateReview, current_user, beers, reviews }) => {
  const navigate = useNavigate()
  let { id } = useParams()

  const currentReview = reviews?.find((review) => review.id === +id)


  useEffect(() => {
    if (currentReview) {
      setEditReview({
        city: currentReview.city,
        state: currentReview.state,
        review_text: currentReview.review_text,
        rating: currentReview.rating,
        user_id: current_user.id,
        beer_id: currentReview.beer_id,
      })
    }
  }, [currentReview])

  const [editReview, setEditReview] = useState({
    city: '',
    state: '',
    review_text: '',
    rating: 0,
    user_id: 0,
    beer_id: 0,
  })

  const handleChange = (e) => {
    setEditReview({ ...editReview, [e.target.name]: e.target.value })
  }


  return (
    <div className="containerAll">
      <Form className="form">
        <div className="container2">
          <div className="containerHead">
            <div className="heading">
              <h2>Edit Review</h2>
            </div>
          </div>
          <div className="form-content">
            <FormGroup>
              <Label for="city">City Name:</Label>
              <Input
                id="city"
                name="city"
                placeholder="Enter a City"
                type="text"
                onChange={handleChange}
                value={editReview.city}
              />
            </FormGroup>

            <FormGroup>
              <Label for="state">State Name:</Label>
              <Input
                id="state"
                name="state"
                placeholder="Enter a State"
                type="text"
                onChange={handleChange}
                value={editReview.state}
              />
            </FormGroup>

            <FormGroup>
              <Label for="review_text">Your Review:</Label>
              <Input
                id="review_text"
                name="review_text"
                placeholder="Was awesome!......Not so good=["
                type="text"
                onChange={handleChange}
                value={editReview.review_text}
              />
            </FormGroup>

            <FormGroup>
              <Label for="rating">Rating:</Label>
              <Input
                id="rating"
                name="rating"
                placeholder="Was awesome!......Not so good=["
                type="number"
                min="1"  // Set the minimum allowed value
                max="5"  // Set the maximum allowed value to 5
                onChange={handleChange}
                value={editReview.rating}
              />
            </FormGroup>

            <Button>Save</Button>
          </div>
        </div>
      </Form>
    </div>
  )
}

export default ReviewEdit