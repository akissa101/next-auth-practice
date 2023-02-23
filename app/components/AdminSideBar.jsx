import React from "react";

export default function AdminSideBar() {
  // const handleShowUsers = () => {};
  // const handleShowArticles = () => {};

  return (
    <div>
      <aside className="hidden sticky border dark:bg-slate-700 border-slate-400 rounded-lg md:inline-block min-w-[50px] w-2/12 bg-slate-300 h-ull py-4 rounded-xm space-y-2">
        <div className="flex flex-col ">
          <button
            // onClick={handleShowUsers}
            className="border-b text-start w-full px-2 py-1 rounded-sm focus:bg-blue-400 border-slate-400 hover:bg-blue-300  "
          >
            Users
          </button>
          <button
            // onClick={handleShowArticles}
            className="border-b text-start w-full px-2 py-1 rounded-sm focus:bg-blue-400 border-slate-400 hover:bg-blue-300 pl-2  "
          >
            Articles
          </button>
        </div>
      </aside>
    </div>
  );
}
