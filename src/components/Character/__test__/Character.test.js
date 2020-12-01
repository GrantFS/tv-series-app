import React from 'react';
import ReactDOM from 'react-dom';
import Character from '..';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

test("Renders the correct content", () => {
  const root = document.createElement("div");
  var char_props = {
    name:"Test",
    image: null
  };
  ReactDOM.render(<BrowserRouter><Character character={char_props}/></BrowserRouter>, root);
});

test("Render Character", () => {
  var char_props = {
    name:"Test",
    image: null
  };
  const { getByTestId } = render(<BrowserRouter><Character character={char_props}/></BrowserRouter>)
  expect(getByTestId("character")).toHaveTextContent("Test")
});

test("Render Character Image", () => {
  var char_props = {
    name:"Test",
    image: {
      medium: "/img/image.jpg"
    }
  };
  const { getByTestId } = render(<BrowserRouter><Character character={char_props}/></BrowserRouter>)

  expect(getByTestId("character").firstChild.firstChild.nodeName).toBe("IMG");
  expect(getByTestId("character").firstChild.firstChild).toHaveAttribute('src', '/img/image.jpg');
});
