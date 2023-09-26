import './App.css';
import React, { useState, useEffect } from 'react'
import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import AboutUs from './pages/AboutUs';
import BeerIndex from './pages/BeerIndex';
import BeerShow from './pages/BeerShow';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import ReviewEdit from './pages/ReviewEdit';
import ReviewNew from './pages/ReviewNew';
import ReviewProtectedIndex from './pages/ReviewProtectedIndex';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';


const App = () => {
  const [currentUser, setCurrentUser] = useState(null)
  const [beers, setBeers] = useState([])
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    readBeer()
  }, [])

  useEffect(() => {
    readReview()
  }, [])

  const url = "http://localhost:3000"

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user")
    if (loggedInUser) {
      setCurrentUser(JSON.parse(loggedInUser))
    }
  }, [])

  const readBeer = () => {
    fetch(`${url}/beers`)
      .then((response) => response.json())
      .then((payload) => {
        setBeers(payload)
      })
      .catch((error) => console.log(error))
  }

  const readReview = () => {
    fetch(`${url}/reviews/`)
      .then((response) => response.json())
      .then((payload) => {
        setReviews(payload)
      })
      .catch((error) => console.log(error))
  }

  const createReview = (review) => {
    fetch(`${url}/reviews`, {
      body: JSON.stringify(review),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
      .then((response) => response.json())
      .then(() => readReview())
      .catch((errors) => console.log("Review create errors:", errors))
  }

  const updateReview = (review, id) => {
    fetch(`${url}/reviews/${id}`, {
      body: JSON.stringify(review),
      headers: {
        "Content-Type": "application/json",
      },
      method: "PATCH",
    })
      .then((response) => response.json())
      .then(() => readReview())
      .catch((errors) => console.log("Review Update Errors:", errors))
  }

  const deleteReview = (id) => {
    fetch(`${url}/reviews/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((payload) => readReview())
      .catch((error) => console.log(error))
  }

  const login = (userInfo) => {
    fetch(`${url}/login`, {
      body: JSON.stringify(userInfo),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "POST",
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText)
        }
        // store the token
        localStorage.setItem("token", response.headers.get("Authorization"))
        return response.json()
      })
      .then((payload) => {
        localStorage.setItem("user", JSON.stringify(payload))
        setCurrentUser(payload)
      })
      .catch((error) => console.log("login errors: ", error))
  }

  const signup = (userInfo) => {
    fetch(`${url}/signup`, {
      body: JSON.stringify(userInfo),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "POST",
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText)
        }
        console.log(response)
        // store the token
        localStorage.setItem("token", response.headers.get("Authorization"))
        return response.json()
      })
      .then((payload) => {
        localStorage.setItem("user", JSON.stringify(payload))
        setCurrentUser(payload)
      })
      .catch((error) => console.log("signup errors: ", error))
  }

  const logout = (id) => {
    fetch(`${url}/logout`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"), 
      },
      method: "DELETE",
    })
      .then((payload) => {
        setCurrentUser(null)
        localStorage.removeItem("token")
        localStorage.removeItem("user") 
      })
      .catch((error) => console.log("logout errors: ", error))
  }

  return (
    <>
      <Header current_user={currentUser} logout={logout}/>
      <Routes>
        <Route path="/" element={<Home current_user={currentUser}/>} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/beerindex" element={<BeerIndex beers={beers} current_user={currentUser}/>} />
        <Route path="/beershow/:id" element={<BeerShow beers={beers} current_user={currentUser} reviews={reviews}  deleteReview={deleteReview}/>} />
        <Route path="/reviewedit/:id" element={<ReviewEdit current_user={currentUser} reviews={reviews} updateReview={updateReview} />} />
        {currentUser && (
          <>
        <Route path="/reviewnew/:id" element={<ReviewNew createReview={createReview} current_user={currentUser} beers={beers} />} />
        <Route path="/reviewprotectedindex" element={<ReviewProtectedIndex reviews={reviews}
        current_user={currentUser} deleteReview={deleteReview} />} />
        </>
        )}
        <Route path="/login" element={<SignIn login={login}/>} />
        <Route path="/signup" element={<SignUp signup={signup}/>} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
