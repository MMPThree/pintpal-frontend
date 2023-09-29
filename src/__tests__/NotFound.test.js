import { render, screen } from '@testing-library/react';
import NotFound from "../pages/NotFound";
import { BrowserRouter } from "react-router-dom";

describe("<NotFound />", () => {
    it("renders without crashing", () => {
        render(
            <BrowserRouter>
                <NotFound />
            </BrowserRouter>
        )
        const greeting = screen.getByText("OOPS A Spilled Beer!")
        expect(greeting).toBeInTheDocument()
    })
})