"use client";
import { useGetArticles } from "@/hooks/useArticleData";

export default function ArticlesList() {
  const { data: articles } = useGetArticles();

  return (
    <div className="h-screen mt-4">
      <h1 className="text-3xl p-4 font-bold font-sans">Articles</h1>

      <div className="grid grid-cols-4 text-lg font-bold  p-2 border-b border-slate-300 dark:border-slate-700">
        <div className="">Article</div>
        <div className="">Title</div>
        <div className="">Content</div>
        <div className="">Actions</div>
      </div>
      {articles?.data.map((article) => (
        <div key={article._id} className="grid  grid-cols-4 p-2">
          <div className="">{article.userid}</div>
          <div className="">{article.title}</div>
          <div className="">{article.content}</div>
          <div className="">Edit/Delete</div>
        </div>
      ))}
    </div>
  );
}
