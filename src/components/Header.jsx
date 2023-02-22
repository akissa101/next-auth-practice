import MenuItem from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
import { RiAdminFill } from "react-icons/ri";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

function Header() {
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
          <MenuItem title="Admin" address="/admin" Icon={RiAdminFill} />
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
}

export default Header;
