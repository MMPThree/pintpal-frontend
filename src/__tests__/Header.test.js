import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import userEvent from "@testing-library/user-event"
import Header from "../components/Header"

describe("<Header />", () => {
    it("renders without crashing", () => {
        render(
            <BrowserRouter>
            <Header />
            </BrowserRouter>
        )
        let nav = screen.getByRole('img', {
            name: /pintpal logo/i
        })
        expect(nav).toHaveAttribute("src", "pintpal.jpeg")
        expect(nav).toHaveAttribute("alt", "pintpal logo")
    })
    it("has clickable links", () => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        )
        userEvent.click(screen.getByText("Login"))
        expect(screen.getByText("Login")).toBeInTheDocument()
        userEvent.click(screen.getByText("Sign Up"))
        expect(screen.getByText("Sign Up")).toBeInTheDocument()
    })
})