import React, { useState } from "react";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Search from "../components/Search";

const Home = () => {
  const [search, setSearch] = useState("");

  const onSearch = (event: React.ChangeEvent<HTMLInputElement>) =>
    setSearch(event.target.value);

  const onDelete = () => setSearch("");

  return (
    <Layout>
      <Header title="Anilist" />
      <div className="px-4 pb-4">
        <Search
          value={search}
          placeholder="Search"
          onSearch={onSearch}
          onDelete={onDelete}
        />
      </div>
    </Layout>
  );
};

export default Home;
