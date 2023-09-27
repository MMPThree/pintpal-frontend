import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import TextField from "@mui/material/TextField"
import FormControl from "@mui/material/FormControl"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import AddRoundedIcon from "@mui/icons-material/AddRounded"
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import Button from "@mui/material/Button";

const ReviewEdit = ({ updateReview, current_user, beers, reviews }) => {
  const navigate = useNavigate()
  let { id } = useParams()

  const currentReview = reviews?.find((review) => review?.id === +id)
  const currentBeer = beers?.find((beer) => beer.id === currentReview?.beer_id)

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
    rating: '',
  })

  const handleChange = (e) => {
    setEditReview({ ...editReview, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    updateReview(editReview, currentReview?.id)
    navigate("/reviewprotectedindex")
  }

  return (
    <>
      <div className='form-body'>
        <div className='review-form'>
          <div className='review-header'>
            <h4 className='review-header-text'>Review For:</h4>
            <h3 className='review-name'>{currentBeer?.name}</h3>
          </div>
          <div className='review-row'>
            <FormControl>
              <TextField
                onChange={handleChange}
                id="city"
                name="city"
                label="City"
                value={editReview.city}
                type="text"
                className="form-input"
                required
              />
            </FormControl>

            <FormControl>
              <TextField
                onChange={handleChange}
                id="state"
                name="state"
                label="State"
                value={editReview.state}
                type="text"
                className="form-input"
                required
              />
            </FormControl>
            </div>

            <div className='review-row'>
              <FormControl sx={{
                width: "13rem",
                borderRadius: "5px",
                height: "65px",
              }}>
              <InputLabel required>Rating</InputLabel>
              <Select
                labelId="ratingLabel"
                id="rating"
                label="Rating"
                name="rating"
                value={editReview.rating}
                onChange={handleChange}
              >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
              </Select>
              </FormControl>
            </div>

            <div className='review-row'>
               <FormControl>
                  <TextField 
                    onChange={handleChange}
                    required
                    id="review_text"
                    name="review_text"
                    label="Review"
                    value={editReview.review_text}
                    type="text"
                    multiline
                    rows={5}
                    sx={{width: "30rem"}}
                    className='textarea'
                  />
               </FormControl>
            </div>

          <div className='review-buttons'>
              <Button className='review-button' onClick={handleSubmit} sx={{
              color: "white",
              padding: "12px",
              bgcolor: "#2d2aef",
              '&:hover': {
                background: "#6487e8",
             }
            }}>
                  <AddRoundedIcon/>&nbsp;Update Review
              </Button>
              <Button className='review-button' href="/reviewprotectedindex" sx={{
              color: "white",
              padding: "12px",
              bgcolor: "#ee1515",
              '&:hover': {
                background: "#f76262",
             }
            }}>
                <CancelRoundedIcon/>&nbsp;Cancel
              </Button>
          </div>

        </div>
      </div>
    </>
  )
}

export default ReviewEdit
