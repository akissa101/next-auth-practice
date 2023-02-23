"use client";
import { useGetUsers } from "../hooks/useUserData";
import Link from "next/link";
import { useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Register from "../modals/Register";

export default function UsersList() {
  const { data: users } = useGetUsers();
  const [showRegister, setShowRegister] = useState(false);

  const handleShowRegister = () => {
    console.log("clicked");
    setShowRegister(!showRegister);
  };

  return (
    <div className="h-screen mt-4">
      {showRegister && <Register show={() => setShowRegister(false)} />}
      <div className="flex justify-between  items-center">
        <h1 className="text-3xl p-4 font-bold font-sans">Users</h1>
        <button
          onClick={() => setShowRegister(!showRegister)}
          className="bg-sky-400 dark:bg-sky-800 hover:opacity-50 py-2 px-4 rounded-lg transition-all duration-300"
        >
          Add user
        </button>
      </div>
      <div className="grid grid-cols-4 text-lg font-bold p-2 border-b border-slate-300 dark:border-slate-700">
        <div className="">User Name</div>
        <div className="">Name</div>
        <div className="">Email</div>
        <div className="">Actions</div>
      </div>
      {users?.data.map((user) => (
        <div key={user._id} className="grid  grid-cols-4 p-2">
          <div className="">{user.username}</div>
          <div className="">{user.name}</div>
          <div className="">{user.email}</div>
          <div className="flex items-center text-xl space-x-4">
            <Link href={`/users/${user._id}`}>
              <FaEdit color="green" className="cursor-pointer" />
            </Link>

            <FaTrashAlt color="red" className="cursor-pointer" />
          </div>
        </div>
      ))}
    </div>
  );
}
