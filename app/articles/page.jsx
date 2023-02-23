"use client";
import { useGetArticles } from "../hooks/useArticleData";
import Link from "next/link";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

export default function ArticlesList() {
  const { data: articles } = useGetArticles();

  return (
    <div className="h-screen mt-4">
      {/* {showRegister && <Register show={() => setShowRegister(false)} />} */}
      <div className="flex justify-between  items-center">
        <h1 className="text-3xl p-4 font-bold font-sans">Articles</h1>
        <button
          onClick={() => setShowRegister(!showRegister)}
          className="bg-sky-400 dark:bg-sky-800 hover:opacity-50 py-2 px-4 rounded-lg transition-all duration-300"
        >
          Add Article
        </button>
      </div>

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
          <div className="flex items-center text-xl space-x-4">
            <Link href={`/articles/${article._id}`}>
              <FaEdit color="green" className="cursor-pointer" />
            </Link>

            <FaTrashAlt color="red" className="cursor-pointer" />
          </div>
        </div>
      ))}
    </div>
  );
}
