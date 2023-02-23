"use client";

import MenuItem from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
import { RiAdminFill } from "react-icons/ri";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { useSession, signOut } from "next-auth/react";

function Header() {
  const { data } = useSession();
  // console.log(data);

  return (
    <header className="flex items-center justify-between space-x-2 py-6 mx-4 px-16 sm:mx-auto shadow-sm shadow-sky-900">
      <div className="logo ">
        <Link href="/">
          <h2 className="text-2xl">
            <span className="font-bold py-1 px-2 mr-1 rounded-lg bg-sky-800 text-white">
              NEXT
            </span>
            <span className="text-xl hidden sm:inline">AUTH</span>
          </h2>
        </Link>
      </div>
      <div className="flex items-center space-x-8">
        <div className="nav flex">
          <MenuItem title="Home" address="/" Icon={AiFillHome} />
          <MenuItem title="About" address="/" Icon={AiFillHome} />
        </div>
      </div>
      <div className="">
        {data?.user ? (
          <>
            <span className="mr-2 ">Hi, {data?.user?.name}</span>
            <span className="hover:text-amber-600 pl-2">
              <Link href="/admin">Admin</Link>
            </span>
            <span
              className="cursor-pointer ml-5 text-orange-200 hover:text-amber-500"
              onClick={() => signOut()}
            >
              Logout
            </span>
          </>
        ) : (
          <MenuItem title="Login" address="/login" Icon={RiAdminFill} />
        )}
      </div>
      <ThemeToggle />
    </header>
  );
}

export default Header;
