import { render, screen } from '@testing-library/react'
import ReviewNew from '../pages/ReviewNew'
import { BrowserRouter } from 'react-router-dom'
import mockUsers from '../mockUsers'

describe("<ReviewNew />", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <ReviewNew current_user={mockUsers[0]} />
      </BrowserRouter>
    )
    screen.logTestingPlaygroundURL()
  })

  it("renders the Review New page", () => {
    const element = screen.getByText(/Review For:/i)
    expect(element).toBeInTheDocument()
  })
  it("renders a spot for city", () => {
    const city = screen.getByRole('textbox', {
      name: /city/i
    })
  })
  it("renders a spot for state", () => {
    const state = screen.getByRole('textbox', {
      name: /state/i
    })
  })
  it('renders a a button to update review', () => {
    const addReview = screen.getByRole('button', {
      name: /add review/i
    })
  })
  it('renders a a button to cancel', () => {
    const cancel = screen.getByRole('button', {
      name: /cancel/i
    })
  })
})