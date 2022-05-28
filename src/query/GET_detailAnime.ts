import { gql } from "@apollo/client";

export const GET_ANIME_DETAIL = gql`
  query GetAnimeDetail($id: Int) {
    Media(id: $id) {
      id
      coverImage {
        extraLarge
      }
      title {
        english
      }
      genres
      duration
      averageScore
      description
    }
  }
`;
