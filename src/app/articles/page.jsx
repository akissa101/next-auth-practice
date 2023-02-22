"use client";
import { useGetUsers } from "@/hooks/useUserData";

export default function ArticlesList() {
  const { data: users } = useGetUsers();

  return (
    <div className="h-screen mt-4">
      <h1 className="text-3xl p-4 font-bold font-sans">Articles</h1>

      <div className="grid grid-cols-4 text-lg font-bold  p-2 border-b border-slate-300 dark:border-slate-700">
        <div className="">User</div>
        <div className="">Title</div>
        <div className="">Content</div>
        <div className="">Actions</div>
      </div>
      {users?.data.map((user) => (
        <div key={user.id} className="grid  grid-cols-4 p-2">
          <div className="">{user.username}</div>
          <div className="">{user.name}</div>
          <div className="">{user.email}</div>
          <div className="">Edit/Delete</div>
        </div>
      ))}
    </div>
  );
}
