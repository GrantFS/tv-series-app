import React from 'react';
import ReactDOM from 'react-dom';
import Button from '..';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import  TestRenderer from "react-test-renderer";
import { ButtonProps } from '../interface';

test("Renders the correct content", () => {
  const root = document.createElement("div");
  ReactDOM.render(<BrowserRouter><Button href="/" name="Test" /></BrowserRouter>, root);
});

test("Render Save button", () => {
  const { getByTestId } = render(<BrowserRouter><Button name="Save" href="/"></Button></BrowserRouter>)
  expect(getByTestId("button")).toHaveTextContent("Save")
  expect(getByTestId("button")).toHaveAttribute('href', '/');
});

test("Render Click Me button", () => {
  const { getByTestId } = render(<BrowserRouter><Button name="Click Me" href="/"></Button></BrowserRouter>)
  expect(getByTestId("button")).toHaveTextContent("Click Me")
});

test("Render Classes for button", () => {
  const { getByTestId } = render(<BrowserRouter><Button name="Click Me" type="success" href="/"></Button></BrowserRouter>)
  expect(getByTestId("button").classList.contains('btn-success')).toBe(true)
  expect(getByTestId("button").classList.contains('btn')).toBe(true)
});
test("Render href for button", () => {
  const { getByTestId } = render(<BrowserRouter><Button name="Click Me" type="success" href="/test"></Button></BrowserRouter>)
  expect(getByTestId("button")).toHaveAttribute('href', '/test');
});

test("Matches snapshot", () => {
  const tree = TestRenderer.create(<BrowserRouter><Button type="success" name="Click Me" href="/"></Button></BrowserRouter>).toJSON();
  expect(tree).toMatchSnapshot();
});
