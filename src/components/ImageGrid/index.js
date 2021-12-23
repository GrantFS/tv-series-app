import { Component, Fragment } from "react"
import Image from "../Image"

class ImageGrid extends Component {
    render() {
        let { images, setActivePhoto, extra_classes } = this.props
        return (
            <Fragment>
                <div className={` image-grid ${extra_classes}`}>
                    {images.map((image, key) => (
                        <Image
                            key={`image_${key}`}
                            image_key={image.id}
                            image={image}
                            setActivePhoto={setActivePhoto}
                        />
                    ))}
                </div>
            </Fragment>
        )
    }
}

export default ImageGrid
