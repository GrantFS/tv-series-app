export interface ActivePhotoFunction {
  (photo_index: number) : void;
}

export interface Image {
  id: number;
  resolutions: Resolutions;
  type: string;
}

interface Resolutions {
    medium: ImageSize;
    original: ImageSize;
    large?: ImageSize;
}

interface ImageSize {
  url: string;
}
