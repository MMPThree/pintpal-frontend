import React, { useState } from 'react'
import { Nav, NavItem } from 'reactstrap'
import { NavLink, useNavigate } from 'react-router-dom'
import pintpal from '../assets/pintpal.jpeg'
import { FaBeer, FaSignInAlt, FaSignOutAlt, FaPencilAlt, FaWpforms, FaBars, FaTimes } from "react-icons/fa"
import './Header.css'

const Header = ({ current_user, logout }) => {
  const navigate = useNavigate()

  const signOut = () => {
    logout()
    navigate("/")
  }

  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  return (
    <>
      <Nav className='sticky-nav'>

        <NavItem>
          <NavLink to="/" className='nav-link'>
            <img src={pintpal} alt='pintpal logo' width="60px" />
            PintPal 
          </NavLink>
        </NavItem>

        <div className={click ? 'nav-menu active' : 'nav-menu'}>
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
        <div className='hamburger' onClick={handleClick}>
            {click ? (<FaTimes size={25} style={{color: "#000"}}/>
            ) : (<FaBars size={25} style={{color: "#000"}}/>) }
        </div>
      </Nav>

    </>
  )
}

export default Header