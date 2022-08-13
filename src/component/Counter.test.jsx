import React from "react";
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Button1 from "./Button1";
import Button2 from "./Button2";
import App from "../App";

describe("Testing the custom Button",()=>{
    it("Should be present in the DOM",()=>{
        render(<Button1>Add</Button1>);
         let button = screen.getByText("Add")
        expect(button).toBeInTheDocument();
    });

    it("Should be present in the DOM",()=>{
        render(<Button2>Reduce</Button2>);
         let button = screen.getByText("Reduce")
        expect(button).toBeInTheDocument();
    });

    it("Should have count",()=>{
        render( <App></App> );

        let h2 = screen.getByText("The Count is 0")
        expect(h2).toBeInTheDocument("0")
    })

    it("Should have button ",()=>{
        render( <App></App> );

        let button2 = screen.getByTestId("reduceButton")
        expect(button2).toBeInTheDocument()
    })


    it("Should have button ",()=>{
        render( <App></App> );

        let button1 = screen.getByTestId("increButton")
        expect(button1).toBeInTheDocument()
    })

    it("Should increment the count",()=>{
        render(<App></App>)

        let element = screen.getByText("The Count is 0")
        expect(element).toHaveTextContent("0")

        let btn1 = screen.getByTestId("increButton");
        userEvent.click(btn1)

        expect(element).toHaveTextContent("5")
    })

    it("Should decrement the count",()=>{
        render(<App></App>)

        let element = screen.getByText("The Count is 0")
        expect(element).toHaveTextContent("0")

        let btn2 = screen.getByTestId("reduceButton");
        userEvent.click(btn2)

        expect(element).toHaveTextContent("5")
    })
})    