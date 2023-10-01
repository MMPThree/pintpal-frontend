import React, { useState, useEffect, useCallback } from 'react'
import { NavLink } from 'react-router-dom'
import { Card, CardBody, CardTitle, CardSubtitle, Button, CardImg } from 'reactstrap'
import SearchIcon from '@mui/icons-material/Search';
import { TextField } from '@mui/material';
import Pagination from '../components/Pagination'
import SelectStyles from '../components/SelectStyles';
import './BeerIndex.css'

const BeerIndex = ({ beers, current_user, perPage, setCurrentPage, currentPage, currentBeers }) => {
  const [filteredBeers, setFilteredBeers] = useState(beers)
  const [searchTerm, setSearchTerm] = useState("");
  const [styles, setStyles] = useState([])
  const [selectedStyle, setSelectedStyle] = useState("All Styles")

  useEffect(() => {
    const beerStyles = beers?.map((beer) => beer.style)
    const uniqueStyles = Array.from(new Set(beerStyles));
    uniqueStyles.sort((a, b) => a.localeCompare(b));
    setStyles(["All Styles", ...uniqueStyles])
  }, [beers])

  const handleSelect = (e) => {
    setSelectedStyle(e.target.value)
  }

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    filterBeer(term);
  };

  const filterBeer = useCallback((searchTerm) => {
    const filteredBeer = beers?.filter((beer) => {
      return beer?.name?.toLowerCase().includes(searchTerm?.toLowerCase())
    });
    setFilteredBeers(filteredBeer)
  }, [beers])

  useEffect(() => {
    if (searchTerm === "") {
      // Filter by style only if a style is selected
      const filteredByStyle = selectedStyle !== "All Styles"
        ? beers.filter((beer) => beer.style === selectedStyle)
        : currentBeers;
      setFilteredBeers(filteredByStyle);
    } else {
      filterBeer(searchTerm);
    }
  }, [searchTerm, currentBeers, filterBeer, selectedStyle]);
  
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
            sx={{
              opacity: "1",
              backgroundColor: "#fff",
              border: "1px solid #bd881f",
              borderRadius: "5px",
              marginRight: "1.2rem"
            }}
            type="text"
            alt="Search Bar"
            placeholder="Search beers..."
            value={searchTerm}
            onChange={handleSearch}
            id='search-box'
          />
           <SelectStyles styles={styles} handleSelect={handleSelect} selectedStyle={selectedStyle}/>
        </div>

        <div className='beer-listings'>
          {filteredBeers?.map((beer) => {
            return (
              <Card key={beer.id} className='beer-cards px-0 py-0' style={{ opacity: '1' }}>
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

        <Pagination totalPosts={beers?.length} perPage={perPage} setCurrentPage={setCurrentPage} currentPage={currentPage} />

      </div>
    </>
  )
}

export default BeerIndex