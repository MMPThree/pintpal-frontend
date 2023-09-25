import { render, screen } from '@testing-library/react'
import ReviewEdit from '../pages/ReviewEdit'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import mockReviews from '../mockReviews'

const renderEdit = () => {
  render(
    <MemoryRouter initialEntries={['/reviewedit/1']}>
      <Routes>
        <Route path="/reviewedit/1" element={<ReviewEdit reviews={mockReviews} />} />
      </Routes>
    </MemoryRouter>
  )
}

describe('<ReviewEdit />', () => {
  it('renders the forms for our user', () => {
    renderEdit()
    const review = screen.getByText('Edit Review')
    expect(review).toBeInTheDocument()
  })
})