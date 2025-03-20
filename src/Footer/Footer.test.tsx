import { render } from "@testing-library/react";
import Footer from "./Footer";
import { ThemeProvider } from "styled-components";
import "@testing-library/jest-dom";

const theme = {
  colors: {
    background: "#fff",
    text: "#333",
  },
  borderRadius: "4px",
};
test("should render footer correctly", () => {
  const { getByText } = render(
    <ThemeProvider theme={theme}>
      <Footer />
    </ThemeProvider>
  );

  expect(
    getByText("© 2025 Budgetly. All rights reserved.")
  ).toBeInTheDocument();
});
