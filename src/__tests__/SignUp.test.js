import {render, screen} from "@testing-library/react"
import SignUp from "../pages/SignUp"
import { BrowserRouter } from "react-router-dom"

describe("<SignUp />", () => {
    it("renders without crashing", () => {
        render(
            <BrowserRouter>
            <SignUp />
            </BrowserRouter>
        )
        const indexLink = screen.getByText(/sign up/i)
        expect(indexLink).toBeInTheDocument()
        const inputForm = screen.getByText(/email: password: password confirmation:/i)
        expect(inputForm).toBeInTheDocument()
        const button = screen.getByRole('button', {
            name: /register/i
          })
        expect(button).toBeInTheDocument()
        const account = screen.getByText(/already have an account\?/i)
        expect(account).toBeInTheDocument()
    })
})