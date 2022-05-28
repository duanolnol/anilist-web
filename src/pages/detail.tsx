import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Loading from "../components/Loading";
import { GET_ANIME_DETAIL } from "../query/GET_detailAnime";
import { DetailAnime } from "../query/GET_detailAnime.type";

const Detail = () => {
  const navigate = useNavigate();
  const handleGoback = () => navigate(-1);
  const { id } = useParams();

  const [detailAnime, setDetailAnime] = useState<DetailAnime>();

  const { loading, error, data } = useQuery(GET_ANIME_DETAIL, {
    variables: {
      id: id,
    },
  });

  useEffect(() => {
    if (data) {
      setDetailAnime(data.Media);
    }
  }, [data]);

  return (
    <Layout>
      <div className="fixed z-50 max-w-lg w-full">
        <Header title="Detail" isGoback onGoback={handleGoback} />
      </div>
      <div className="pt-16 px-4 pb-4">
        {!error ? (
          loading && !detailAnime ? (
            <Loading />
          ) : (
            <div>
              <div className="mb-4">
                <img src={detailAnime?.coverImage.extraLarge} alt="cover" />
              </div>
              <div className="mb-4">
                <div
                  title={detailAnime?.title.english}
                  className="text-lg text-black font-bold mb-2 overflow-hidden truncate w-80"
                >
                  {detailAnime?.title.english
                    ? detailAnime?.title.english
                    : "Untitled"}
                </div>
                <div className="flex mb-1">
                  {detailAnime?.genres.map((item) => (
                    <div className="flex justify-center items-center w-max h-6 bg-gray-700 rounded p-2 mr-2">
                      <div className="text-sm text-white">{item}</div>
                    </div>
                  ))}
                </div>
                <div className="text-sm text-gray-500 mb-4">
                  {detailAnime?.duration && `${detailAnime.duration} Minutes`}
                </div>
                <div className="flex justify-between">
                  {detailAnime?.averageScore && (
                    <div
                      className={
                        detailAnime.averageScore > 60
                          ? "justify-center items-center text-center w-max h-max bg-green-600 p-2 mr-2"
                          : "justify-center items-center text-center w-max h-max bg-red-600 p-2 mr-2"
                      }
                    >
                      <div className="text-xs text-white font-bold">Score</div>
                      <div className="text-xl text-white font-bold">
                        {detailAnime.averageScore}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div>{detailAnime?.description}</div>
            </div>
          )
        ) : (
          <div>Something when wrong</div>
        )}
      </div>
    </Layout>
  );
};

export default Detail;
