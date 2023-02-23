import ArticlesList from "../articles/page";

export default function Navbar({ clickUser, clickArticle }) {
  return (
    <div className="py-4 sm:px-12 flex flex-col gap-4 sm:flex-row justify-center items-center lg:text-lg  dark:bg-gray-700 bg-sky-200">
      <div className="w-full sm:w-2/3 flex ">
        <button
          onClick={clickUser}
          className=" m-4 hover:text-sky-600 font-semibold p-2 focus:underline underline-offset-8 decoration-4 decoration-sky-600 rounded-xl border-none"
        >
          Users
        </button>
        <button
          onClick={clickArticle}
          className=" m-4 hover:text-sky-600 font-semibold p-2 focus:underline underline-offset-8 decoration-4 decoration-sky-600 rounded-xl border-none"
        >
          Articles
        </button>
      </div>
    </div>
  );
}
