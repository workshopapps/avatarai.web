import { render, screen } from "@testing-library/react";
import ResetPassword from "../LoginPage/ResetPassword";
import { MemoryRouter as Router } from "react-router-dom";

test("should render CheckEmail", () => {
  render(
    <Router>
      <ResetPassword />
    </Router>
  );

  const labelButton = screen.getByRole("button");
  expect(labelButton).toBeInTheDocument();
});
