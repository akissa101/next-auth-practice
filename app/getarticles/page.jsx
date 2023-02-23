import ArticleItem from "app/components/ArticleItem";
import Image from "next/image";
import React from "react";

export default function GetArticles() {
  return (
    <section className="w-full  max-w-6xl mx-auto">
      <h1 className="text-5xl font-sans font-extrabold p-6">Articles </h1>
      <div className="grid grid-cols-2">
        <div className="bg-blue-200">
          <Image src="/img/about.png" alt="about" width={600} height={400} />
        </div>

        <ArticleItem />
      </div>
    </section>
  );
}
