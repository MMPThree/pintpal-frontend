import { render, screen } from '@testing-library/react'
import ReviewNew from '../pages/ReviewNew'
import { BrowserRouter } from 'react-router-dom'

describe("<ReviewNew />", () => {
    beforeEach(() => {
      render(
        <BrowserRouter>
          <ReviewNew />
        </BrowserRouter>
      )
    })

    it("renders the Review New page", () => {
        const element = screen.getByText("New Review")
        expect(element).toBeInTheDocument()
    })
})