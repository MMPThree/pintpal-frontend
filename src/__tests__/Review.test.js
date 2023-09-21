import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Review from '../pages/Review'
import mockReviews from '../mockReviews';


const renderReview = () => {
  render(
    <BrowserRouter>
      <Review reviews={mockReviews} />
    </BrowserRouter>
  )
}
describe("<Review />", () => {
  it("renders reviews without errors", () => {
    renderReview()
    const reviews = screen.getByText('Reviews')
     expect(reviews).toBeInTheDocument()
  })
})
