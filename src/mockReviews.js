import mockBeers from './mockBeers'


let mockReviews = [
    {
        id: 1,
        city: "Dallas",
        state: "TX",
        review_text: "Awwww lawwwd",
        rating: 5,
        user_id: 1,
        beer_id: mockBeers[0].id
    }, 
    {
        id: 2,
        city: "Colorado Springs",
        state: "CO",
        review_text: "One of my favs.",
        rating: 3,
        user_id: 2,
        beer_id: mockBeers[1].id
    },
    {
        id: 2,
        city: "Colorado Springs",
        state: "CO",
        review_text: "One of my favs.",
        rating: 3,
        user_id: 2,
        beer_id: mockBeers[1].id
    }
]

export default mockReviews