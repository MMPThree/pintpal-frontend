import {render, screen} from "@testing-library/react"
import SignIn from "../pages/SignIn"
import { BrowserRouter } from "react-router-dom"

describe("<SignIn />", () => {
    it("renders without crashing", () => {
        render(
            <BrowserRouter>
            <SignIn />
            </BrowserRouter>
        )
        const indexLink = screen.getByRole('heading', {
            name: /Login/i
          })
        expect(indexLink).toBeInTheDocument()
        const inputForm = screen.getByText(/email: password:/i)
        expect(inputForm).toBeInTheDocument()
        const button = screen.getByRole('button', {
            name: /login/i
          })
        expect(button).toBeInTheDocument()
        const navlink = screen.getByText(/not registered\?/i)
        expect(navlink).toBeInTheDocument()
    })
})