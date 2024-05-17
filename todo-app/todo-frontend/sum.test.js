


import OneTodo from './src/Todos/OneTodo';

import { render } from "@testing-library/react";
import { describe, it } from 'vitest';



describe("test 1", () => {
  it("should render properly", () => {
    render(<OneTodo />);
  });
});

