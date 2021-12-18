import { cleanup, render, screen } from "@testing-library/react";
import UserDetail from "./UserDetail";

test("some test", () => {
  render(<UserDetail />);
  const element = screen.getByTestId("user-detail-id");
  expect(element).toBeInTheDocument();
});

afterEach(() => {
  cleanup();
});

test("should have text content", () => {
  const testData = {
    name: "Hrithika",
  };
  render(<UserDetail name={testData.name} />);
  const element = screen.getByTestId("user-detail-id");
  expect(element).toHaveTextContent("Name: " + testData.name);
  expect(element).toContainHTML("h1");
});
