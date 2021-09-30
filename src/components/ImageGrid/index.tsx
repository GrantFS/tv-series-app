import React from 'react';
import Image from '../Image';
import { ImageGridProps } from "./interface";

const ImageGrid = ({images, setActivePhoto, extra_classes}: ImageGridProps) => {
  return (
    <React.Fragment>
      <div data-testid="image-grid" className={` image-grid ${extra_classes}`}>
        {
          images.map((image, key) => (
            <Image key={`image_${key}`} image_key={image.id} image={image} setActivePhoto={setActivePhoto} />
          ))
        }
      </div>
      </React.Fragment>
  );
}

export default ImageGrid;
