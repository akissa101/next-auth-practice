"use client";
import { useGetArticle } from "app/hooks/useArticleData";
import { useGetUsers } from "app/hooks/useUserData";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function UserPage() {
  const { articleId } = useSearchParams();

  const { data } = useGetArticle();
  const article = data?.data;
  console.log(article);

  const [mounted, setMounted] = useState(false);

  const [title, setTitle] = useState(article?.title);
  const [author, setAuthor] = useState(article?.username);
  const [content, setContent] = useState(article?.content);

  const { data: users } = useGetUsers();

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="leading-4 tracking-wider shadow-md shadow-slate-600 p-12  mt-8 mx-auto max-w-4xl ">
      <h1 className="text-3xl py-4 font-sans font-extrabold">
        Article Profile Info
      </h1>
      {mounted && (
        <form onSubmit={handleSubmit} className="flex flex-col my-4">
          <label htmlFor="title"> Title: </label>
          <input
            type="text"
            id="title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
            className="p-2 rounded-lg "
          />

          <label htmlFor="username" className="mt-3">
            Author:{" "}
          </label>

          <select
            id="username"
            onChange={(e) => setAuthor(e.target.value)}
            value={author}
            required
            className="p-2 rounded-lg"
          >
            <option value="">Select Author</option>
            {users?.data?.map((user) => (
              <option key={user._id} value={user._id}>
                {user.name}
              </option>
            ))}
          </select>

          <label htmlFor="content" className="mt-3">
            Content:{" "}
          </label>
          <textarea
            rows={4}
            id="content"
            onChange={(e) => setContent(e.target.value)}
            value={content}
            required
            className="p-2 rounded-lg"
          />

          <button className="disabled:cursor-not-allowed  disabled:opacity-40  p-2 bg-gray-700 hover:bg-gray-800 rounded-lg text-white">
            Update
          </button>
        </form>
      )}
    </div>
  );
}
