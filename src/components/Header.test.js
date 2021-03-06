import React from "react";
import { render } from "@testing-library/react";
import Header from "./Header";

test("renders title", () => {
  const { getByText } = render(<Header />);
  const linkElement = getByText(/mars rover/i);
  expect(linkElement).toBeInTheDocument();
});
