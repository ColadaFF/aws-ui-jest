import { render, screen } from "@testing-library/react";
import Form from "./Form";

test("renders aws form", () => {
  render(<Form />);
  const linkElement = screen.getByText(/Form header/i);
  expect(linkElement).toBeInTheDocument();
});
