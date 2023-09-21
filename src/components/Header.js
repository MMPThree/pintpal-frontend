import React from 'react'
import { Nav, NavItem } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import pintpal from '../assets/pintpal.jpeg'
import { FaBeer } from "react-icons/fa"
import './Header.css'

const Header = () => {
  return (
    <>
      <Nav className='navbar'>

        <NavItem>
          <NavLink to="/" className='nav-link'>
             <img src={pintpal} alt='pintpal logo' width="70px" />
             PintPal
          </NavLink>
        </NavItem>

      <div className='nav-menu'>
        <NavItem>
          <NavLink to="/beerindex" className='nav-link'>
             <FaBeer /> All Beers
          </NavLink>
        </NavItem>
        {/* {current_user && (
          <>
        <NavItem>
          <NavLink to="/reviewprotectedindex" className='nav-link'>
             My Reviews
          </NavLink>
        </NavItem>
        </>
      )} */}

        <NavItem>
          <NavLink to="/signin" className='nav-link'>
             Login
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink to="/signup" className='nav-link'>
             Sign Up
          </NavLink>
        </NavItem>
       </div>
      </Nav>
  
    </>
  )
}

export default Header