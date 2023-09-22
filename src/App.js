import './App.css';
import React, { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import mockUsers from "./mockUsers.js"
import mockBeers from "./mockBeers.js"
import mockReviews from "./mockReviews.js"
import Header from "./components/Header"
import Footer from "./components/Footer"
import AboutUs from './pages/AboutUs';
import BeerIndex from './pages/BeerIndex';
import BeerShow from './pages/BeerShow';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Review from './pages/Review';
import ReviewEdit from './pages/ReviewEdit';
import ReviewNew from './pages/ReviewNew';
import ReviewProtectedIndex from './pages/ReviewProtectedIndex';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';





const App = () => {
  const [currentUser, setCurrentUser] = useState(mockUsers[0])
  const [beers, setBeers] = useState(mockBeers)
  const [reviews, setReviews] = useState(mockReviews)
  const createReview = (review) => {
    console.log(review)

  }

  return (
    <>
      <Header current_user={currentUser}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/beerindex" element={<BeerIndex beers={beers} />} />
        <Route path="/beershow/:id" element={<BeerShow beers={beers} />} />
        <Route path="/reviewedit/:id" element={<ReviewEdit />} />
        <Route path="/reviewnew" element={<ReviewNew createReview={createReview}/>} />
        <Route path="/reviewprotectedindex" element={<ReviewProtectedIndex />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
