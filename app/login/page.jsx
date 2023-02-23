"use client";

import Link from "next/link";
import React, { useState } from "react";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  // console.log(username, password);

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const data = await signIn("credentials", {
        redirect: false,
        username,
        password,
      });

      if (data?.status === 401) return;

      if (data?.status === 200) {
        router.push("/admin");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col mt-8 py-4 px-8 justify-center dark:bg-slate-700 bg-slate-200 md:w-[40%] m-auto rounded-lg shadow-md shadow-blue-600">
      <h1 className="py-2 px-4 text-2xl font-extrabold">Login</h1>
      <form className="p-4 flex flex-col w-full" onSubmit={submitHandler}>
        <div className=" mb-3">
          <label className="font-bold" htmlFor="username">
            Username address
          </label>
          <input
            type="text"
            id="username"
            className="block mt-2 bg-white rounded-md border border-slate-500 py-1 px-3  focus:ring-8 focus:ring-slate-300 w-full outline-transparent"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className=" mb-3 mt-2">
          <label className="font-bold" htmlFor="password_field">
            Password
          </label>
          <input
            type="password"
            id="password_field"
            className="block mt-2 bg-white border border-slate-500 rounded-md py-1 px-3  focus:ring-8 focus:ring-slate-300 w-full outline-transparent"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="block bg-sky-800 hover:bg-sky-900  my-4 rounded-md text-white p-2"
        >
          Sign in
        </button>

        <div className="text-center pb-4">
          <p>
            Not a member? <Link href="/register">Register</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
