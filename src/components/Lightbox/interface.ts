import { Image, ActivePhotoFunction } from "../../common/interfaces";

export interface LightboxProps {
  images: Array<Image>;
  photo_index: number;
  active: number;
  setActivePhoto: ActivePhotoFunction;
  setLightboxStatus: any;
}


