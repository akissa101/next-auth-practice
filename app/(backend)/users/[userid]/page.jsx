"use client";
import { useGetUser } from "app/hooks/useUserData";

export default function UserPage() {
  const { data } = useGetUser();
  const user = data?.data;

  return (
    <div className="leading-4 tracking-wider shadow-md shadow-slate-600 p-12  mt-8 mx-auto max-w-4xl ">
      <h1 className="text-3xl py-4 font-sans font-extrabold">
        User Profile Info
      </h1>
      <div className="space-y-4 py-4">
        <h2>User Name: {user?.username} </h2>
        <h2> Name: {user?.name} </h2>
        <h2>Email: {user?.email} </h2>
      </div>
    </div>
  );
}
