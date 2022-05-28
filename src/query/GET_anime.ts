import { gql } from "@apollo/client";

export const GET_ANIME = gql`
  query GetAnimeList($page: Int, $perPage: Int, $search: String) {
    Page(page: $page, perPage: $perPage) {
      media(search: $search) {
        id
        coverImage {
          large
        }
        title {
          english
        }
        genres
        duration
        averageScore
      }
    }
  }
`;
