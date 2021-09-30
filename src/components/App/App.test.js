import React from 'react';
import App from '.';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

test("Renders the correct content", () => {
  const root = document.createElement("div");
  ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, root);
  expect(root.querySelector("h1").textContent).toBe("TV Series");
})
