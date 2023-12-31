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
import RandomBeer from './components/RandomBeer';

const App = () => {

  const [currentUser, setCurrentUser] = useState(null)
  const [beers, setBeers] = useState([])
  const [reviews, setReviews] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [perPage, setPerPage] = useState(10)

  //Render ten beers on index page with pagination
  const lastPostIndex = currentPage * perPage
  const firstPostIndex = lastPostIndex - perPage
  const currentBeers = beers?.slice(firstPostIndex, lastPostIndex)

  // const url = "http://localhost:3000"
  const url = "https://pintpal-backend.onrender.com"

  useEffect(() => {
    readBeer();
  }, [currentPage]);

  const readBeer = async () => {
    try {
      // Fetch data from the API
      const response = await fetch(`${url}/beers`);
      const newBeers = await response.json();
      // Update state variables with the fetched data
      setBeers([...newBeers])

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    readReview()
  }, [])

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user")
    if (loggedInUser) {
      setCurrentUser(JSON.parse(loggedInUser))
    }
  }, [])

  const readReview = () => {
    fetch(`${url}/reviews`)
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
      <Header current_user={currentUser} logout={logout} />
      <Routes>
        <Route path="/" element={<Home current_user={currentUser} />} />
        <Route path="/login" element={<SignIn login={login} />} />
        <Route path="/signup" element={<SignUp signup={signup} />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/beerindex" element={<BeerIndex currentPage={currentPage} setCurrentPage={setCurrentPage} perPage={perPage} beers={beers} currentBeers={currentBeers} current_user={currentUser} />} />
        <Route path="/beershow/:id" element={<BeerShow beers={beers} current_user={currentUser} reviews={reviews} deleteReview={deleteReview} />} />
        {currentUser && (
          <>
            <Route path="/randombeer" element={<RandomBeer beers={beers} />} />
            <Route path="/reviewnew/:id" element={<ReviewNew createReview={createReview} current_user={currentUser} beers={beers} />} />
            <Route path="/reviewedit/:id" element={<ReviewEdit beers={beers} current_user={currentUser} reviews={reviews} updateReview={updateReview} />} />
            <Route path="/reviewprotectedindex" element={<ReviewProtectedIndex reviews={reviews}
              current_user={currentUser} deleteReview={deleteReview} />} />
          </>
        )}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
