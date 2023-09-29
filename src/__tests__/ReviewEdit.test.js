import { render, screen } from '@testing-library/react'
import ReviewEdit from '../pages/ReviewEdit'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import mockReviews from '../mockReviews'
import mockUsers from '../mockUsers'

const renderEdit = () => {
  render(

    <MemoryRouter initialEntries={['/reviewedit/1']}>
      <Routes>
        <Route path="/reviewedit/1" element={<ReviewEdit reviews={mockReviews} current_user={mockUsers[0]} />} />
      </Routes>
    </MemoryRouter>
  )
  screen.logTestingPlaygroundURL()
}


describe('<ReviewEdit />', () => {
  it('renders the forms for our user', () => {
    renderEdit()
    const review = screen.getByText(/Review For/i)
    expect(review).toBeInTheDocument()
  })
  it('renders spot for city', () => {
    renderEdit()
    const city = screen.getByRole('textbox', {
      name: /city/i
    })
  })
  it('renders spot for state', () => {
    renderEdit()
    const state = screen.getByRole('textbox', {
      name: /state/i
    })
  })
  it('renders spot for review', () => {
    renderEdit()
    const review = screen.getByRole('textbox', {
      name: /review/i
    })
  })
  it('renders a a button to update review', () => {
    renderEdit()
    const updateReview = screen.getByRole('button', {
      name: /update review/i
    })
  })
  it('renders a a button to cancel', () => {
    renderEdit()
    const cancel = screen.getByRole('button', {
      name: /cancel/i
    })
  })
})