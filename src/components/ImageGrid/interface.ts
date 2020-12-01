import { ActivePhotoFunction } from "../../common/interfaces";

export interface ImageGridProps {
  images: Array<Images>;
  setActivePhoto: ActivePhotoFunction;
  extra_classes: string;
}

interface Images {
  [index: number]: { id:number; image_key: number; setActivePhoto: ActivePhotoFunction };
}
