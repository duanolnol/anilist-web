type CoverImage = {
  large: string;
};

type Title = {
  english: string;
};

export type Anime = {
  id: number;
  coverImage: CoverImage;
  title: Title;
  genres: string[];
  duration: number;
  averageScore: number;
};
