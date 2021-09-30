import React from 'react';
import { ImageProps } from "./interface";

const Image = ({ image, image_key, setActivePhoto }: ImageProps) => {
  let type = image.type;
  let src = image.resolutions.original.url;
  if (image.type == null) {
    type = "unknown";
  }
  if (typeof image.resolutions.medium !== "undefined") {
    src = image.resolutions.medium.url;
  }
  return (
    <div data-testid="image">
      <div className={`${type}-image`} key={image.id}>
          <img src={src} alt="" className={type} onClick={(e) => setActivePhoto(image_key)} />
      </div>
    </div>
  );
}

export default Image;
