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
const url = "https://ghibliapi.herokuapp.com/films";

const server = setupServer(
  rest.get(url, (req, res, ctx) => {
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

test("renders correct error message for error code 500", async () => {
  server.use(
    rest.get(url, (req, res, ctx) => {
      return res(ctx.status(500));
    })
  );
  render(<Layout />);
  const titleElement = await screen.findByText(
    /Oops… something went wrong, try again 🤕/i
  );
  expect(titleElement).toBeInTheDocument();
});

test("renders correct error message for error code 418", async () => {
  server.use(
    rest.get(url, (req, res, ctx) => {
      return res(ctx.status(418));
    })
  );
  render(<Layout />);
  const titleElement = await screen.findByText(/418 I'm a tea pot 🫖, silly/i);
  expect(titleElement).toBeInTheDocument();
});
