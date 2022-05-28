type CoverImage = {
  extraLarge: string;
};

type Title = {
  english: string;
};

export type DetailAnime = {
  id: number;
  coverImage: CoverImage;
  title: Title;
  genres: string[];
  duration: number;
  averageScore: number;
  description: string;
};
