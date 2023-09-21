import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Footer from "../components/Footer"

describe("<Footer />", () => {
    it("renders without crashing", () => {
        render(
            <BrowserRouter>
              <Footer />
            </BrowserRouter>
          )
        const footer = screen.getByText("© 2023 Megan DeRisi | Mike Chavez | Peter Ji")
        expect(footer).toBeInTheDocument()
    })
})