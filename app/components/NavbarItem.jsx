"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function NavbarItem({ title, param, clicked }) {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");

  return (
    <div>
      <button
        onClick={clicked}
        className=" m-4 hover:text-sky-600 font-semibold p-2 underline underline-offset-8 decoration-4 decoration-sky-600 rounded-xl"
      >
        {title}
      </button>
    </div>
  );
}
