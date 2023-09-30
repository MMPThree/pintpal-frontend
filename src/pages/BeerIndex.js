import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { Card, CardBody, CardTitle, CardSubtitle, Button, CardImg } from 'reactstrap'
import SearchIcon from '@mui/icons-material/Search';
import { TextField } from '@mui/material';
import './BeerIndex.css'

const BeerIndex = ({ beers, current_user }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBeer, setFilteredBeer] = useState(beers)
  
  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    filterBeer(term);
  };

  const filterBeer = (searchTerm) => {
    const filteredBeer = beers?.filter((beer) => {
      if (searchTerm === ""){
        return beers;
      }
      return beer.name.toLowerCase().includes(searchTerm.toLowerCase())
    });
    setFilteredBeer(filteredBeer)
  }

  return (
    <>
      <div className='beer-body'>
        <h1>Beer Listing</h1>
        <div className='search-bar'>
        <TextField
        InputProps={{
          startAdornment: (
            <SearchIcon />
          )
        }}
        sx={{opacity: "1",
         backgroundColor: "#fff", 
         border: "1px solid #bd881f",
         borderRadius: "5px"
        }}
        type="text"
        alt="Search Bar"
        placeholder="Search beers..."
        value={searchTerm}
        onChange={handleSearch}
        id='search-box'
        />
         </div>

      <div className='beer-listings'>
        {filteredBeer?.map((beer, index) => {
          return(
            <Card key={index} className='beer-cards px-0 py-0' style={{ opacity: '1' }}>
            <CardImg top width="100%" src={beer.image_url} alt="" className='custom-image' />
            <CardBody>
              <div className='beer-text'>
                <CardTitle className='beer-name'><b>{beer.name}</b></CardTitle>
                <CardSubtitle>{beer.style}</CardSubtitle>
                <CardSubtitle>ABV: {beer.abv}%</CardSubtitle>
              </div>
              <div className='index-buttons'>
                <NavLink to={`/beershow/${beer.id}`} className='nav-link'>
                  <Button className='beer-button'>Details</Button>
                </NavLink>
                {current_user && (
                  <>
                    <NavLink to={`/reviewnew/${beer.id}`} className='nav-link'>
                      <Button className='beer-button'>Add Review</Button>
                    </NavLink>
                  </>
                )}
              </div>
            </CardBody>
          </Card>
          )
        })}
      </div>
     
{/* 
        <div className='beer-listings'>
          {beers?.map((beer, index) => {
            return (
              <Card key={index} className='beer-cards px-0 py-0' style={{ opacity: '1' }}>
                <CardImg top width="100%" src={beer.image_url} alt="" className='custom-image' />
                <CardBody>
                  <div className='beer-text'>
                    <CardTitle className='beer-name'><b>{beer.name}</b></CardTitle>
                    <CardSubtitle>{beer.style}</CardSubtitle>
                    <CardSubtitle>ABV: {beer.abv}%</CardSubtitle>
                  </div>
                  <div className='index-buttons'>
                    <NavLink to={`/beershow/${beer.id}`} className='nav-link'>
                      <Button className='beer-button'>Details</Button>
                    </NavLink>
                    {current_user && (
                      <>
                        <NavLink to={`/reviewnew/${beer.id}`} className='nav-link'>
                          <Button className='beer-button'>Add Review</Button>
                        </NavLink>
                      </>
                    )}
                  </div>
                </CardBody>
              </Card>
            )
          })}
        </div> */}
      </div>
    </>
  )
}

export default BeerIndex