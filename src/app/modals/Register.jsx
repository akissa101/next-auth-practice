"use client";

import { useRef, useState, useEffect } from "react";
import { useRegister } from "../../hooks/useRegister";
import { useRouter } from "next/navigation";

const NAME_REGEX = /^[A-z][A-z0-9-_]{2,23}?/;
const USERNAME_REGEX = /^[A-z][A-z0-9-_]{2,23}?/;
const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const PASSWORD_REGEX = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = "/register";

const Register = ({ show }) => {
  const router = useRouter();
  const nameRef = useRef();
  const emailRef = useRef();
  const errRef = useRef();

  const [username, setUsername] = useState("");
  const [validUsername, setValidUsername] = useState(false);

  const [name, setName] = useState("");
  const [validName, setValidName] = useState(false);
  const [nameFocus, setNameFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [matchPassword, setMatchPassword] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  useEffect(() => {
    setValidName(NAME_REGEX.test(name));
  }, [name]);

  useEffect(() => {
    setValidUsername(USERNAME_REGEX.test(username));
  }, [username]);

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);

  useEffect(() => {
    setValidPassword(PASSWORD_REGEX.test(password));
    setValidMatch(password === matchPassword);
  }, [password, matchPassword]);

  useEffect(() => {
    setErrMsg("");
  }, [username, name, email, password, matchPassword]);

  const { mutate: register } = useRegister();

  const handleRegister = (e) => {
    e.preventDefault();
    const newUser = { username, name, email, password };
    console.log(newUser);
    const result = register(newUser);
    show();
  };

  return (
    <>
      <div
        onClick={show}
        className="absolute inset-0 bg-gray-700 bg-opacity-80 z-10 p-4"
      />

      <section className="flex flex-col absolute top-8 md:w-[40%] m-auto mt-8 rounded-xl bg-zinc-200 dark:bg-slate-600 py-4 px-8 text-slate-800 dark:text-slate-100 z-20">
        <p
          ref={errRef}
          className={errMsg ? "errmsg" : "offscreen"}
          aria-live="assertive"
        >
          {errMsg}
        </p>
        <h1 className="text-4xl font-sans font-extrabold ">Register</h1>
        <form onSubmit={handleRegister} className="flex flex-col my-4">
          <label htmlFor="username" className="py-1 font-bold">
            User Name
          </label>
          <input
            type="text"
            id="username"
            autoComplete="off"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            required
            className={
              username && !validUsername
                ? "ring-2  focus:outline-red-700 p-3 bg-slate-300 text-slate-800 rounded-lg"
                : "ring-none outline-none p-3 rounded-lg bg-slate-300 text-slate-800"
            }
          />
          <label htmlFor="name" className="mt-3 py-1 font-bold">
            Name
          </label>
          <input
            type="text"
            id="name"
            ref={nameRef}
            autoComplete="off"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
            onFocus={() => setNameFocus(true)}
            onBlur={() => setNameFocus(false)}
            className={
              nameRef && name && !validName
                ? "ring-2  focus:outline-red-700 bg-slate-300 text-slate-800 p-3 rounded-lg"
                : "ring-none outline-none border-none bg-slate-300 text-slate-800 p-3 rounded-lg "
            }
          />
          <label htmlFor="email" className="mt-3 py-1 font-bold">
            Email
          </label>
          <input
            type="text"
            id="email"
            ref={emailRef}
            autoComplete="off"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
            onFocus={() => setEmailFocus(true)}
            onBlur={() => setEmailFocus(false)}
            className={
              email && !validEmail
                ? "focus:ring-red-700 bg-slate-300 text-slate-800 p-3 rounded-lg"
                : "ring-none outline-none bg-slate-300 text-slate-800 p-3 rounded-lg "
            }
          />
          <label htmlFor="password" className="mt-3 py-1 font-bold">
            Password
          </label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
            onFocus={() => setPasswordFocus(true)}
            onBlur={() => setPasswordFocus(false)}
            className={
              passwordFocus && !validPassword
                ? " focus:outline-red-700 bg-slate-300 text-slate-800 p-3 rounded-lg"
                : "ring-none  outline-none bg-slate-300 text-slate-800 p-3 rounded-lg "
            }
          />
          <label htmlFor="confirm_pwd" className="mt-3 py-1 font-bold">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirm_pwd"
            onChange={(e) => setMatchPassword(e.target.value)}
            value={matchPassword}
            required
            onFocus={() => setMatchFocus(true)}
            onBlur={() => setMatchFocus(false)}
            className={
              matchFocus && !validMatch
                ? " focus:outline-red-700 bg-slate-300 text-slate-800 -700 p-3 rounded-lg"
                : "ring-none  outline-none bg-slate-300 text-slate-800 p-3 rounded-lg "
            }
          />
          <button
            className="disabled:cursor-not-allowed w-full  disabled:opacity-40 my-6  p-2  rounded-lg text-white bg-sky-400 dark:bg-sky-800 hover:opacity-50"
            disabled={
              !validUsername || !validName || !validPassword || !validMatch
                ? true
                : false
            }
          >
            Sign Up
          </button>
        </form>
      </section>
    </>
  );
};

export default Register;
