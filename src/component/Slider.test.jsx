import { render,screen } from '@testing-library/react'
import App from "../App";
import userEvent from '@testing-library/user-event'

describe("Testing the slider",()=>{
    it("Should have a prev button with text Prev",()=>{
        render( <App></App> );

        let button = screen.getByTestId("prev")
        expect(button).toBeInTheDocument()
    })

    it("Should have a next button with text Next",()=>{
        render( <App></App> );

        let button = screen.getByTestId("next")
        expect(button).toBeInTheDocument()
    })

    it("Should inc the pages",()=>{
        render(<App></App>);

        let element = screen.getByText("Page 0");
        expect(element).toHaveTextContent("0")

        let button = screen.getByTestId("next");
        userEvent.click(button)

        expect(element).toHaveTextContent("1");
    })
})