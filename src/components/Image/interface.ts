import { ActivePhotoFunction } from "../../common/interfaces";

export interface ImageProps {
  image : Image;
  image_key: number;
  setActivePhoto: ActivePhotoFunction;
}

interface Image {
  id: number;
  resolutions: Resolutions;
  type: string;
}

interface Resolutions {
    medium: ImageSize;
    original: ImageSize;
}

interface ImageSize {
  url: string;
}


