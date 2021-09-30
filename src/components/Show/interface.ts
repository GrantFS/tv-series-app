export interface ShowProps {
  show: Show
}

export interface Show {
  id: number;
  name: string;
  image: any;
  status: string;
  premiered: any;
  rating: any;
  _embedded: any;
  language: any;
  genres: Array<Genre>;
  summary: any;
}

interface Genre {
  genre: string
}
