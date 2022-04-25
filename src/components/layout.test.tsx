import { render, screen } from "@testing-library/react";
import Layout from "./layout";

test("renders the film title Castle in the Sky", async () => {
  render(<Layout />);
  await screen.findByText("The first film returned is:");
  const titleElement = await screen.findByText(/Castle in the Sky/i);
  expect(titleElement).toBeInTheDocument();
});
