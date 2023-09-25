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
        id: 3,
        city: "San Diego",
        state: "CA",
        review_text: "One of my favs.",
        rating: 3,
        user_id: 3,
        beer_id: mockBeers[1].id
    },
    {
        id: 4,
        city: "Los Angeles",
        state: "CA",
        review_text: "Not as sweet as Robert the Bruce. This is much more hop-forward and less malty and sweet. It's so hoppy that it's dry. When it warms, a subtle funky peaty smoky flavor comes out. Nothing like Speculoos cookies and Boston brown bread. It's more like scotch. Really special and complex beer. I'd pick Robert the Bruce as a cheerful treat on a holiday, and Dirty Bastard for a contemplative and quiet winter night alone. It's one to savor.",
        rating: 5,
        user_id: 4,
        beer_id: mockBeers[1].id
    },
    {
        id: 5,
        city: "Los Angeles",
        state: "CA",
        review_text: "This is the first time that I've ever tried a pumpkin beer and was pleasantly surprised! I truly didn't expect it to taste like pumpkin. I got this one while out at the grocery store with my girlfriend and was sold on the box art. The sweetness is really wonderful, and would say that it almost tastes like ginger ale. My only complaint is that I don't like quite how bitter it is on the front end, which leads to a fairly unpleasant lingering sensation. Otherwise, a really aromatic beer that is fantastic for this time of year!",
        rating: 5,
        user_id: 5,
        beer_id: mockBeers[1].id
    }
]

export default mockReviews