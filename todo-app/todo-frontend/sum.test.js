import { expect, test, describe } from 'vitest';
// eslint-disable-next-line no-unused-vars
import React from 'react';
import OneTodo from './src/Todos/OneTodo';
import { render, screen } from "@testing-library/react";

describe("OneTodo Component", () => {
  test("renders correctly", () => {
    render(<OneTodo />);
    expect(screen.getByText("One todo component")).toBeVisible();
  });
});
