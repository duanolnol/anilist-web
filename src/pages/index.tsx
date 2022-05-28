import { useQuery } from "@apollo/client";
import React, { useCallback, useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Loading from "../components/Loading";
import Search from "../components/Search";
import { GET_ANIME } from "../query/GET_anime";
import { Anime } from "../query/GET_anime.type";

const PER_PAGE = 10;

const Home = () => {
  const [anime, setAnime] = useState<Anime[]>([]);
  const [search, setSearch] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const { data, error, loading } = useQuery(GET_ANIME, {
    variables: {
      page: 1,
      perPage: PER_PAGE * page,
      search: search ? search : null,
    },
  });
  const navigate = useNavigate();

  const onLoadMore = useCallback(() => {
    !loading && setPage(page + 1);
  }, [page, loading]);

  useEffect(() => {
    if (data) {
      setAnime(data.Page.media);
    }
  }, [data]);

  useEffect(() => {
    setPage(1);
  }, [search]);

  const onSearch = (event: React.ChangeEvent<HTMLInputElement>) =>
    setSearch(event.target.value);

  const onDelete = () => setSearch("");

  const navigateToDetail = (id: number) => {
    navigate(`/${id}`);
  };

  return (
    <Layout>
      <div className="fixed z-50 max-w-lg w-full">
        <Header title="Anilist" />
        <div className="bg-white p-4">
          <Search
            value={search}
            placeholder="Search"
            onSearch={onSearch}
            onDelete={onDelete}
          />
        </div>
      </div>
      <div className="pt-40 px-4 pb-4">
        {!error ? (
          loading && anime.length === 0 ? (
            <Loading />
          ) : (
            <InfiniteScroll
              dataLength={anime.length}
              next={onLoadMore}
              hasMore={anime.length >= 10}
              loader={<Loading />}
            >
              {anime &&
                anime.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => navigateToDetail(item.id)}
                    className="mb-6 cursor-pointer"
                  >
                    <Card
                      title={item.title.english}
                      image={item.coverImage.large}
                      genres={item.genres}
                      duration={item.duration}
                      score={item.averageScore}
                    />
                  </div>
                ))}
            </InfiniteScroll>
          )
        ) : (
          <div>Something when wrong</div>
        )}
      </div>
    </Layout>
  );
};

export default Home;
