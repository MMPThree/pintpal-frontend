import { render, screen } from '@testing-library/react';
import ReviewProtectedIndex from '../pages/ReviewProtectedIndex';
import { BrowserRouter } from 'react-router-dom';

describe("<ReviewProtectedIndex />", () => {
    beforeEach(() => {
        const currentUser = {
            email: "test1@example.com",
            password: "password",
            id: 1
        }
        const user1Review = [
          {
            id: 1,
            city: "Dallas",
            state: "TX",
            review_text: "Awwww lawwwd",
            rating: 5,
            user_id: 1,
            beer_id: 1
        }
        ]
        render(
            <BrowserRouter>
                <ReviewProtectedIndex currentUser={currentUser} reviews={user1Review}/>
            </BrowserRouter>
        )
    })
    it("renders text for my reviews", () => {
        const greeting = screen.getByText("My Reviews")
        expect(greeting).toBeInTheDocument()
    })
})