import { render, screen } from "@testing-library/react";
import AboutUs from "../pages/AboutUs"
import { BrowserRouter } from "react-router-dom";

describe("<AboutUs />", () => {
    it("renders without crashing", () => {
        render(
            <BrowserRouter>
                <AboutUs />
            </BrowserRouter>
        )
        const greeting = screen.getByText("Meet the team!")
        expect(greeting).toBeInTheDocument()
    })
})