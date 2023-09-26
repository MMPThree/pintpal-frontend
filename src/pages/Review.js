import React from 'react' 
import Rating from "@mui/material/Rating"
import { Avatar } from "@mui/material"
import Button from "@mui/material/Button"
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate, useParams } from 'react-router-dom';
import './Review.css'

const Review = ({ review, current_user, deleteReview }) => {
  const { id } = useParams()
  const navigate = useNavigate()

  const handleDelete = () => {
    deleteReview(review.id)
    navigate("/reviewprotectedindex")
  }

  return (
    <>
    <div className='review-container'>
      <div className="top-review" key={review.id}>
        <div>
          <div className="avatar">
            <Avatar alt="Remy Sharp" src="" />
            <p className="review-name" style={{marginBottom: "-1rem", marginLeft: "-1.5rem"}}>Anonymous</p>
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

      {current_user && current_user.id === review.user_id && (
        <div className='review-buttons'>
        <Button href={`/reviewedit/${review.id}`} className='review-button' sx={{
        color: "white",
        padding: "12px",
        bgcolor: "#55AF4D",
        '&:hover': {
          background: "#82c87b",
       }
      }}>
            <EditIcon/>&nbsp;Edit Review
        </Button>
        <Button className='review-button'  
        onClick={handleDelete}
        sx={{
        color: "white",
        padding: "12px",
        bgcolor: "#ee1515",
        '&:hover': {
          background: "#f76262",
       }
      }}>
          <DeleteIcon/>&nbsp;Delete
        </Button>
    </div>
      )}

    </div>
    </>
  )

}

export default Review