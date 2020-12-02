import React, { Component } from 'react';
import Image from '../Image';
import { ImageGridProps } from "./interface";

class ImageGrid extends Component <ImageGridProps>  {
  render() {
    let {images, setActivePhoto, extra_classes} = this.props;
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
}

export default ImageGrid;
