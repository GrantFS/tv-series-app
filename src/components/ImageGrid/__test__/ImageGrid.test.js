import React from 'react';
import ReactDOM from 'react-dom';
import ImageGrid from '..';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import  TestRenderer from "react-test-renderer";
let ImageData =  [];
ImageData.push({
  type: null,
  resolutions: {
    original: {
      url: ""
    }
  }
});


test("Renders the correct content", () => {
  const root = document.createElement("div");
  var images = ImageData;
  ReactDOM.render(<BrowserRouter><ImageGrid  images={images}/></BrowserRouter>, root);
});

test("Will image-grid class and extra classes", () => {
  const { getByTestId } = render(<BrowserRouter><ImageGrid images={ImageData} extra_classes="my-extra-class" /></BrowserRouter>)
  expect(getByTestId("image-grid").classList.contains('image-grid')).toBe(true)
  expect(getByTestId("image-grid").classList.contains('my-extra-class')).toBe(true)
});

test("Renders 1 Image", () => {
  const { getByTestId } = render(<BrowserRouter><ImageGrid images={ImageData} extra_classes="my-extra-class" /></BrowserRouter>)
  expect(getByTestId("image-grid").getElementsByTagName("img").length).toBe(1);
});

test("Renders 2 Images", () => {
  ImageData.push({
    type: null,
    resolutions: {
      original: {
        url: ""
      }
    }
  });
  const { getByTestId } = render(<BrowserRouter><ImageGrid images={ImageData} extra_classes="my-extra-class" /></BrowserRouter>)
  expect(getByTestId("image-grid").getElementsByTagName("img").length).toBe(2);
});

