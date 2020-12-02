import { Image, ActivePhotoFunction } from "../../common/interfaces";

export interface ImageGridProps {
  images: Array<Image>;
  setActivePhoto: ActivePhotoFunction;
  extra_classes: string;
}