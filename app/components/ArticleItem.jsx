"use client";

import { useGetArticles } from "app/hooks/useArticleData";
import { GrArticle } from "react-icons/gr";

export default function ArticleItem() {
  const { data } = useGetArticles();
  const articles = data?.data;

  console.log(articles);

  return (
    <div className=" flex flex-col space-x-3">
      {articles?.map((article) => (
        <div
          key={article._id}
          className="flex space-x-4 shadow-sm shadow-slate-400 p-4 m-2"
        >
          <GrArticle size={64} className="text-sky-600" />
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold">{article.title}</h2>
            <p className="">{article.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
