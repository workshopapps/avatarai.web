import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "./Conter";
import "@testing-library/jest-dom/extend-expect";

test("button increments", () => {
  render(<Counter />);

  const count = screen.getByTestId("count");
  const increment = screen.getByTestId("increment");

  fireEvent.click(increment);
  expect(count).toHaveTextContent("1");
});
