import React from 'react'
import { Nav, NavItem } from 'reactstrap'
import { NavLink, useNavigate } from 'react-router-dom'
import pintpal from '../assets/pintpal.jpeg'
import { FaBeer, FaSignInAlt, FaSignOutAlt, FaPencilAlt, FaWpforms } from "react-icons/fa"
import './Header.css'

const Header = ({ current_user, logout }) => {
  const navigate = useNavigate()

  const signOut = () => {
    logout()
    navigate("/")
  }

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
          {current_user && (
            <>
              <NavItem>
                <NavLink to="/reviewprotectedindex" className='nav-link'>
                  <FaWpforms /> My Reviews
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink className="nav-link" onClick={signOut}>
                  <FaSignOutAlt /> Log Out
                </NavLink>
              </NavItem>
            </>
          )}
          {!current_user && (
            <>
          <NavItem>
            <NavLink to="/login" className='nav-link'>
              <FaSignInAlt /> Login
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink to="/signup" className='nav-link'>
              <FaPencilAlt /> Sign Up
            </NavLink>
          </NavItem>
          </>
          )}
        </div>
      </Nav>

    </>
  )
}

export default Header