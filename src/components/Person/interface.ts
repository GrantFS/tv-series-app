import { Gender } from "../../common/types";

export interface PersonProps {
  person: Person;
}

interface Person {
  id: number;
  name: string;
  gender: Gender;
  image: Image;
  birthday: string;
  deathday: string;
  country: Country;
  url: string;
}

interface Image {
  medium: string;
  original?: string;
  large?: string;
}

interface Country {
  name: string;
  code: string;
  timezone: string;
}


