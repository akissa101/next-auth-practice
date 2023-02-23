"use client";

import { useState } from "react";
import ArticlesList from "../articles/page";
import Navbar from "../components/Navbar";
import Users from "../users/page";

export default function Admin() {
  const [showUsers, setShowUsers] = useState(false);
  const [showArticles, setShowArticles] = useState(false);

  const handleShowUsers = () => {
    setShowUsers(true);
    setShowArticles(false);
  };

  const handleShowArticles = () => {
    setShowArticles(true);
    setShowUsers(false);
  };
  return (
    <section className=" mx-4 m-auto  ">
      <Navbar clickUser={handleShowUsers} clickArticle={handleShowArticles} />

      <div className="flex gap-2 h-full">
        {showUsers && (
          <div className=" w-full md:max-w-6xl  mx-auto">
            <Users />
          </div>
        )}
        {showArticles && (
          <div className=" w-full md:max-w-6xl mx-auto">
            <ArticlesList />
          </div>
        )}
      </div>
    </section>
  );
}
