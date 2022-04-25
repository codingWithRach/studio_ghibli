import { render, screen } from "@testing-library/react";
import Layout from "./layout";

test("renders the film title Castle in the Sky", async () => {
  render(<Layout />);
  const titleElement = await screen.findByText(/Castle in the Sky/i);
  expect(titleElement).toBeInTheDocument();
});
