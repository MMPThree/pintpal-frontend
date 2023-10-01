import * as React from 'react'
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';

const SelectStyles = ({ handleSelect, styles, selectedStyle }) => {

  return (
    <div className='sidebar-container'>
      <FormControl >
        <InputLabel>Beer Styles</InputLabel>
        <Select
          sx={{
            width: "10rem",
            opacity: "1",
            backgroundColor: "#fff",
            border: "1px solid #bd881f",
            borderRadius: "5px",
          }}
          value={selectedStyle}
          placeholder='Select a style'
          onChange={handleSelect}
        >
          {styles?.map((style, index) => {
            return (
              <MenuItem 
              key={index}
              value={style}
              >
                {style}
              </MenuItem>
            )
          })}
        </Select>
      </FormControl>

      {/* <FormControl >
              <InputLabel>ABV Range</InputLabel>
              <Select
                value={abv}

              >

                <MenuItem value="">All</MenuItem>
                <MenuItem value="5">5% and below</MenuItem>
                <MenuItem value="5-7">5% - 7%</MenuItem>
                 Add more ABV options
    </Select>
            </FormControl >  */}


    </div >
  )
}

export default SelectStyles