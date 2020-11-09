import React, { Component } from '../../../node_modules/react';


class Image extends Component {

  render() {
    const { image, image_key, setActivePhoto } = this.props;
    var type = image.type;
    var src = image.resolutions.original.url;
    if (image.type == null) {
      type = "unknown";
    }
    if (typeof image.resolutions.medium !== "undefined") {
      src = image.resolutions.medium.url;
    }
    return (
      <div>
        <div className={`${type}-image`} key={image.id}>
            <img src={src} alt="" className={type} onClick={(e) => setActivePhoto(image_key)} />
        </div>
      </div>
    )
  }
}

export default Image;
