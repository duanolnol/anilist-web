import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Layout from "../components/Layout";

const Detail = () => {
  const navigate = useNavigate();
  const handleGoback = () => navigate(-1);

  return (
    <Layout>
      <Header title="Detail" isGoback onGoback={handleGoback} />
    </Layout>
  );
};

export default Detail;
