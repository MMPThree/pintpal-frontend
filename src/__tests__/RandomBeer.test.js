import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import userEvent from "@testing-library/user-event"
import RandomBeer from "../components/RandomBeer"

describe("<RandomBeer />", () => {
    it("renders without crashing", () => {
        render(
            <BrowserRouter>
                <RandomBeer />
            </BrowserRouter>
        )
       screen.logTestingPlaygroundURL()
    })
})