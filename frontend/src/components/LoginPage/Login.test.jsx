import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import Login from "../LoginPage/Login";

test("render Login Successfully", () => {
  render(
    <Router>
      <Login />
    </Router>
  );

  const inputElement = screen.getByRole("textbox", {
    name: "Email",
  });
  expect(inputElement).toBeInTheDocument();

  const emailElement = screen.getByRole("textbox", {
    name: "Password",
  });
  expect(emailElement).toBeInTheDocument();

  const checkElement = screen.getByRole("checkbox");
  expect(checkElement).toBeInTheDocument();

//   const  buttonElement = screen.getByRole("button");
//   expect(buttonElement).toBeInTheDocument();
});
