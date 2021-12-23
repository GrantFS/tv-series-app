import { Component, Fragment } from "react"
import { findById } from "../../store/helpers"
import Lightbox from "react-image-lightbox"
import "react-image-lightbox/style.css"

class LightboxWrapper extends Component {
    getImageSrc(image) {
        var src = image.resolutions.original.url
        if (typeof image.resolutions.large !== "undefined") {
            src = image.resolutions.large.url
        }
        return src
    }
    render() {
        let { images, photo_index, active, setActivePhoto, setLightboxStatus } = this.props
        let nextSrc = false
        let next_original_key = false
        let prevSrc = false
        let prev_original_key = false
        let src = ""
        let title = ""
        let caption = ""

        if (images) {
            var images_id_list = images.map(function (e) {
                return e.id
            })
            if (photo_index === 0) {
                photo_index = images_id_list[0]
            }

            let current_position = images_id_list.indexOf(photo_index)
            let next_src_position = current_position + 1
            if (next_src_position + 1 > images_id_list.length) {
                next_src_position = 0
            }
            let prev_src_position = current_position - 1
            if (prev_src_position < 0) {
                prev_src_position = images_id_list.length - 1
            }
            next_original_key = images_id_list[next_src_position]
            prev_original_key = images_id_list[prev_src_position]

            nextSrc = this.getImageSrc(findById(images, next_original_key))
            prevSrc = this.getImageSrc(findById(images, prev_original_key))
            let current_image = findById(images, photo_index)
            src = this.getImageSrc(current_image)
            title =
                current_image.type !== null && current_image.type.charAt(0).toUpperCase() + current_image.type.slice(1)
            caption = ""
        }
        return (
            <Fragment>
                {active && (
                    <Lightbox
                        mainSrc={src}
                        nextSrc={nextSrc}
                        prevSrc={prevSrc}
                        imageTitle={title}
                        imageCaption={caption}
                        onCloseRequest={() => setLightboxStatus(false)}
                        onMovePrevRequest={() => setActivePhoto(prev_original_key)}
                        onMoveNextRequest={() => setActivePhoto(next_original_key)}
                    />
                )}
            </Fragment>
        )
    }
}
export default LightboxWrapper
