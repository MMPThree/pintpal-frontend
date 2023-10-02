import React, { useState } from 'react'
import SportsBarIcon from '@mui/icons-material/SportsBar';
import HomeIcon from '@mui/icons-material/Home';
import { Card, CardBody, CardTitle, CardSubtitle, CardImg } from 'reactstrap'
import Button from "@mui/material/Button";
import { NavLink } from 'react-router-dom';
import './RandomBeer.css'

const RandomBeer = ({ beers }) => {
  const [randomNum, setRandomNum] = useState(0)
  const [click, setClick] = useState(false)

  const getRandomBeer = (arr, randomNum) => {
    let current = randomNum
    let newNum = Math.floor(Math.random() * arr.length)
    while (current === newNum) {
      newNum = Math.floor(Math.random() * arr.length)
    }
    setRandomNum(newNum);
  }

  //Call function to generate random number
  const handleClick = () => {
    getRandomBeer(beers, randomNum)
    setClick(true)
  }

  return (
    <div className='random-page'>
      <h1>Click To Get Beer</h1>
      <NavLink to={'/'}>
        <Button
          sx={{
            '&:hover': {
              background: "#fff814",
            },
            backgroundColor: "#bd881f",
            color: "#fff",
            padding: "0.8em",
            fontSize: "1rem",
            marginRight: "1rem"
          }}
          className='random-button' >
          <HomeIcon />&nbsp;Go Back
        </Button>
      </NavLink>
      <Button
        sx={{
          '&:hover': {
            background: "#55AF4D",
          },
          backgroundColor: "#bd881f",
          color: "#fff",
          padding: "0.8em",
          fontSize: "1rem",
        }}
        className='random-button'
        onClick={() => handleClick()}>
        <SportsBarIcon />&nbsp; Click for Beer!
      </Button>
      <div className='random-beer'>
        {beers[0] && click && (
          <Card className='random-card px-0 py-0' style={{ opacity: '1' }}>
            <CardImg top width="100%" src={beers[randomNum].image_url} alt="" className='custom-image' />
            <CardBody>
              <div className='beer-text'>
                <CardTitle className='beer-name' style={{ fontSize: "1.7rem" }}><b>{beers[randomNum].name}</b></CardTitle>
                <CardSubtitle>{beers[randomNum].style}</CardSubtitle>
                <CardSubtitle>ABV: {beers[randomNum].abv}%</CardSubtitle>
                <CardSubtitle style={{ fontStyle: "italic" }}>{beers[randomNum].description}</CardSubtitle>
              </div>
            </CardBody>
          </Card>
        )}
      </div>
    </div>
  )
}

export default RandomBeer