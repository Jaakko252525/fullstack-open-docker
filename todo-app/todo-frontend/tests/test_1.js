

import OneTodo from '../src/Todos/OneTodo';

import { render, screen, cleanup } from "@testing-library/react";
// Importing the jest testing library
import '@testing-library/jest-dom'
 
// afterEach function runs after each test suite is executed
afterEach(() => {
    cleanup(); // Resets the DOM after each test suite
})
 
describe("Button Component", () => {
    const setToggle = jest.fn();
    render(<OneTodo  />);
    const todoComp = screen.getByText("One todo component");
 

    // Test 2 
    test("Button Text", () => {
        expect(todoComp).toHaveTextContent("One todo component");
    })
})