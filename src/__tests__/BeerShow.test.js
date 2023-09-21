import { render, screen } from '@testing-library/react';
import BeerShow from '../pages/BeerShow'
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import mockBeers from '../mockBeers';


const renderShow = () => {
  render(
    <MemoryRouter initialEntries={["/beershow/1"]}>
      <Routes>
        <Route path="/beershow/:id" element={<BeerShow beers={mockBeers} />} />
      </Routes>
    </MemoryRouter>
  )
}

describe("<BeerShow />", () => {
  it("renders single beer", () => {
    renderShow()
    const beerPic = screen.getByRole('img')
    expect(beerPic).toBeInTheDocument()
  })
})