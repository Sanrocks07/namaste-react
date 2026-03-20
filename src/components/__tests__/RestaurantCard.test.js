import { render, screen } from "@testing-library/react";
import MOCK_DATA from "../../components/mocks/resCardMock.json";
import RestaurantCard from "../RestaurantCard";
import "@testing-library/jest-dom";

it("should render the restaurant card with the props data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const name = screen.getByText("Pizza Paradise");

  expect(name).toBeInTheDocument();
});
