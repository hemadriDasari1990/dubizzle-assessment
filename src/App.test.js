import { fireEvent, render, screen } from "@testing-library/react";

import App from "./App";
import Gist from "./components/Gist";
import GistDetails from "./components/GistDetails";
import { Provider } from "react-redux";
import Search from "./components/Search";
import { gistDetails } from "./mocks";
import store from "./redux/store";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByTestId("app");
  expect(linkElement).toBeInTheDocument();
});

test("should show loader when API is called", () => {
  render(
    <Provider store={store}>
      <Gist />
    </Provider>
  );
  const loaderElement = screen.getByTestId("loader");
  expect(loaderElement).toBeInTheDocument();
});

test("Should render gist list component 1", () => {
  render(
    <Provider store={store}>
      <Gist />
    </Provider>
  );
  const gistlistElement = screen.getByTestId("gist-list-items");
  expect(gistlistElement).toBeInTheDocument();
});

test("Should render gist details component", () => {
  render(
    <Provider store={store}>
      <GistDetails gist={gistDetails} />
    </Provider>
  );
  const gistlistItemsElement = screen.getByTestId("gist-details");
  expect(gistlistItemsElement).toBeInTheDocument();
});

test("check value of search input change", () => {
  const handleInput = jest.fn();

  const { container } = render(
    <Provider store={store}>
      <Search />
    </Provider>
  );
  const inputNode = container.querySelector("input");
  const searchString = "test user";
  inputNode.focus();
  inputNode.onChange = handleInput;
  fireEvent.change(inputNode, { target: { value: searchString } });
  expect(inputNode).toHaveValue(searchString);
});
