import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

it("should load contact us page", () => {
  render(<Contact />);

  const heading = screen.getByRole("heading");

  //assertion
  expect(heading).toBeInTheDocument();
});

it("should load button inside Contact component", () => {
  render(<Contact />);

  const button = screen.getByText("Submit");

  //assertion
  expect(button).toBeInTheDocument();
});
