import { render, screen } from "@testing-library/react";
import Layout from "./layout";
import { rest } from "msw";
import { setupServer } from "msw/node";

const dummyData = [
  {
    title: "Castle in the Sky",
  },
  { title: "Grave of the Fireflies" },
];

const server = setupServer(
  rest.get("https://ghibliapi.herokuapp.com/films", (req, res, ctx) => {
    return res(ctx.json(dummyData));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("renders the film title Castle in the Sky", async () => {
  render(<Layout />);
  const titleElement = await screen.findByText(/Castle in the Sky/i);
  expect(titleElement).toBeInTheDocument();
});
