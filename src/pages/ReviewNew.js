import React, { useState } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { NavLink, useNavigate, useParams } from 'react-router-dom';

const ReviewNew = ({ createReview, current_user, beers }) => {
  const {id} = useParams()
  const navigate = useNavigate()
  const currentBeer = beers?.find((beer) => beer.id === +id)
  const [newReview, setNewReview] = useState({

    city: "",
    state: "",
    review_text: "",
    rating: 0,
    user_id: current_user?.id,
    beer_id: currentBeer?.id  
  })

  const handleChange = (e) => {
    setNewReview({ ...newReview, [e.target.name]: e.target.value })
    console.log(newReview)
  }

  const handleSubmit = () => {
    createReview(newReview)
    navigate("/reviewprotectedindex")
  }

  return (
    <>
      <div>New Review</div>
      <Form>
        <FormGroup>
          <Label for="city">
            City
          </Label>
          <Input
            id="city"
            name="city"
            type="text"
            onChange={handleChange}
            value={newReview.city}
          />
        </FormGroup>
        <FormGroup>
          <Label for="state">
            State
          </Label>
          <Input
            id="state"
            name="state"
            type="text"
            onChange={handleChange}
            // value={newReview.state}
          />
        </FormGroup>
        <FormGroup>
          <Label for="review_text">
            Review
          </Label>
          <Input
            id="review_text"
            name="review_text"
            type="textarea"
            onChange={handleChange}
            // value={newReview.review_text}
          />
        </FormGroup>
        <FormGroup>
          <Label for="rating">
            Rating
          </Label>
          <Input
            id="rating"
            name="rating"
            type="select"
            onChange={handleChange}
            // value={newReview.rating}
          >
            <option>
              1
            </option>
            <option>
              2
            </option>
            <option>
              3
            </option>
            <option>
              4
            </option>
            <option>
              5
            </option>
          </Input>
        </FormGroup>
      </Form>
      <Button onClick={handleSubmit} name="submit">
        <NavLink to={`/beerindex`}>Add Review
        </NavLink>
      </Button>
      <Button >
        <NavLink to={'/signup'}>Cancel
        </NavLink>
      </Button>
    </>

  )
}

export default ReviewNew
