import Link from "next/link";
import React from "react";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

export default function Header() {
  return (
    <header className="flex justify-between">
      <h2 className="flext">
        <span>NEXT</span>
        <span>Auth</span>
      </h2>
      <div className="flex">
        <nav className="flex">
          <Link href="/">Home</Link>
          <Link href="/admin">Admin</Link>
          <Link href="/">Logout</Link>
        </nav>
        <div className="">
          <BsFillSunFill />
          <BsFillMoonFill />
        </div>
      </div>
    </header>
  );
}
