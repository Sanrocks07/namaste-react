import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("should load contact us page", () => {
  render(<Contact />);

  const heading = screen.getByRole("heading");

  //assertion
  expect(heading).toBeInTheDocument();
});

test("should load button inside Contact component", () => {
  render(<Contact />);

  const button = screen.getByText("Submit");

  //assertion
  expect(button).toBeInTheDocument();
});
