"use client";

import Link from "next/link";
import React, { useState } from "react";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import InputItem from "app/components/InputItem";

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
    <div className="flex flex-col mt-8 py-4 px-8 justify-center dark:bg-slate-700 bg-slate-200 md:w-[40%] m-auto rounded-lg shadow-md shadow-slate-600">
      <h1 className="py-2 px-4 text-2xl font-extrabold">Login</h1>
      <form className="p-4 flex flex-col w-full" onSubmit={submitHandler}>
        <InputItem
          row={1}
          label="User Name"
          for="username"
          type="text"
          id="username"
          value={username}
          clicked={(e) => setUsername(e.target.value)}
        />
        <InputItem
          row={1}
          label="Password"
          for="password"
          type="password"
          id="password"
          value={password}
          clicked={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="block bg-sky-800 hover:bg-sky-900  my-4 rounded-md text-white p-2 transition-colors duration-300"
        >
          Sign in
        </button>

        <div className="text-center pb-4">
          <p>
            Not a member? &nbsp; &nbsp;{" "}
            <Link className="hover:text-amber-700" href="/register">
              Register
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
