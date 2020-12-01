export interface CharacterProps {
  character: Character

}

interface Character {
  image: Image,
  name: string
}

interface Image {
  medium: string;
  original: string;
}


