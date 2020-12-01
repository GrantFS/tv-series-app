import React from 'react';
import ReactDOM from 'react-dom';
import Image from '..';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

test("Renders the correct content", () => {
  const root = document.createElement("div");
  var image_data = {
    type: null,
    resolutions: {
      original: {
        url: ""
      }
    }
  };
  ReactDOM.render(<BrowserRouter><Image image={image_data} /></BrowserRouter>, root);
});

test("Will be correct Image class", () => {
  var image_data = {
    type: 'person',
    resolutions: {
      original: {
        url: "/my-image.jpg"
      }
    }
  };
  const { getByTestId } = render(<BrowserRouter><Image image={image_data} /></BrowserRouter>)
  expect(getByTestId("image").firstChild.classList.contains('person-image')).toBe(true)
});

test("Will default src data to original", () => {
  var image_data = {
    type: 'person',
    resolutions: {
      original: {
        url: "/my-image.jpg"
      }
    }
  };
  const { getByTestId } = render(<BrowserRouter><Image image={image_data} /></BrowserRouter>)

  expect(getByTestId("image").firstChild.firstChild).toHaveAttribute('src', '/my-image.jpg');
});


test("Will medium url data as src", () => {
  var image_data = {
    type: 'person',
    resolutions: {
      original: {
        url: "/my-image.jpg"
      },
      medium: {
        url: "/my-medium-image.jpg"
      }
    }
  };
  const { getByTestId } = render(<BrowserRouter><Image image={image_data} /></BrowserRouter>)

  expect(getByTestId("image").firstChild.firstChild.nodeName).toBe("IMG");
  expect(getByTestId("image").firstChild.firstChild).toHaveAttribute('src', '/my-medium-image.jpg');
});
