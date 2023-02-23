"use client";

import { useRef, useState, useEffect } from "react";
import { useAddArticle } from "../hooks/useArticleData";
import { useRouter } from "next/navigation";

const Register = ({ show }) => {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  const { mutate: addArticle } = useAddArticle();

  const handleAddArticle = (e) => {
    e.preventDefault();
    const newUser = { username, name, email, password };
    console.log(newUser);
    const result = addArticle(newUser);
    show();
  };

  return (
    <>
      <div
        onClick={show}
        className="absolute inset-0 bg-gray-700 bg-opacity-80 z-10 p-4"
      />

      <section className="flex flex-col absolute top-8 md:w-[40%] m-auto mt-8 rounded-xl bg-zinc-200 dark:bg-slate-600 py-4 px-8 text-slate-800 dark:text-slate-100 z-20">
        <h1 className="text-4xl font-sans font-extrabold ">Add Article</h1>
        <form onSubmit={handleAddArticle} className="flex flex-col my-4">
          <label htmlFor="title" className="py-1 font-bold">
            Title
          </label>
          <input
            type="text"
            id="title"
            autoComplete="off"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
            className="ring-none outline-none p-3 rounded-lg bg-slate-300 text-slate-800"
          />
          <label htmlFor="author" className="mt-3 py-1 font-bold">
            Author
          </label>
          <select
            id="author"
            onChange={(e) => setAuthor(e.target.value)}
            value={author}
            required
            className="ring-none outline-none border-none bg-slate-300 text-slate-800 p-3 rounded-lg "
          />
          <label htmlFor="content" className="mt-3 py-1 font-bold">
            Content
          </label>
          <textarea
            rows={4}
            id="content"
            autoComplete="off"
            onChange={(e) => setContent(e.target.value)}
            value={content}
            required
            className="ring-none outline-none bg-slate-300 text-slate-800 p-3 rounded-lg "
          />

          <button className="disabled:cursor-not-allowed w-full  disabled:opacity-40 my-6  p-2  rounded-lg text-white bg-sky-400 dark:bg-sky-800 hover:opacity-50">
            ADD
          </button>
        </form>
      </section>
    </>
  );
};

export default Register;
