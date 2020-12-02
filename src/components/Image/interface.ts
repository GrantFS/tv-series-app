import { Image, ActivePhotoFunction } from "../../common/interfaces";

export interface ImageProps {
  image : Image;
  image_key: number;
  setActivePhoto: ActivePhotoFunction;
}
