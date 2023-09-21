import { render, screen } from '@testing-library/react';
import BeerIndex from '../pages/BeerIndex'
import { BrowserRouter } from 'react-router-dom';
import mockBeers from '../mockBeers';

describe("<BeerIndex />", () => {
  it ("renders profile cards", () => {
   
    render(
      <BrowserRouter>
        <BeerIndex beers={mockBeers}/>, 
      </BrowserRouter>
    )
   
    mockBeers.forEach(beer => {
      const beerName = screen.getByText(/modelo especial/i)
      expect(beerName).toBeInTheDocument()
    })
  })
})