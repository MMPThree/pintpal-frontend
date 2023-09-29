import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import userEvent from "@testing-library/user-event"
import Header from "../components/Header"

const renderEdit = () => {
    render(
        <BrowserRouter>
            <Header />
        </BrowserRouter>
    )
}
describe("<Header />", () => {
    it("renders without crashing", () => {
        renderEdit()
        let nav = screen.getByRole('img', {
            name: /pintpal logo/i
        })
        expect(nav).toHaveAttribute("src", "pintpal.jpeg")
        expect(nav).toHaveAttribute("alt", "pintpal logo")
    })
    it("has links", () => {
        renderEdit()
        userEvent.click(screen.getByText("Login"))
        expect(screen.getByText("Login")).toBeInTheDocument()
        userEvent.click(screen.getByText("Sign Up"))
        expect(screen.getByText("Sign Up")).toBeInTheDocument()
    })
    it("Show link for all beers", () => {
        renderEdit()
       
        let beer = screen.getByRole('link', { name: /all beers/i })
        expect(beer).toBeInTheDocument()
    })
    it("Show PintPal title", () => {
        renderEdit()
        expect(screen.getByText(/pintpal/i)).toBeInTheDocument()
    })
    it("Login is clickable", () => {
        renderEdit()
        expect(screen.getByRole('link', { name: /login/i })).toBeInTheDocument()
    })
    it("Sign Up is clickable", () => {
        renderEdit()
        expect(screen.getByRole('link', { name: /sign up/i })).toBeInTheDocument()
    })
})