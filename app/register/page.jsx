"use client";

import { useRef, useState, useEffect } from "react";
import { FaCheck, FaTimes, FaInfoCircle } from "react-icons/fa";
import axios from "axios";
import Link from "next/link";
import { useRegister } from "../hooks/useRegister";

const NAME_REGEX = /^\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/; ///^[A-z][A-z0-9-_]{2,23}$/;
const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = "/register";

const Register = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const errRef = useRef();

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
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);

  useEffect(() => {
    setValidPassword(PASSWORD_REGEX.test(password));
    setValidMatch(password === matchPassword);
  }, [password, matchPassword]);

  useEffect(() => {
    setErrMsg("");
  }, [name, email, password, matchPassword]);

  const { mutate: register } = useRegister();

  const handleRegister = (e) => {
    e.preventDefault();
    const newUser = { name, email, password };
    console.log(newUser);
    const result = register(newUser);
  };

  return (
    <div className="md:w-[40%] px-8 m-auto mt-8 rounded-xl bg-gray-300 dark:bg-slate-700 shadow-md shadow-slate-500 p-4">
      {success ? (
        <section className="">
          <h1>Success!</h1>
          <p>
            <a href="#">Sign In</a>
          </p>
        </section>
      ) : (
        <section className="flex flex-col ">
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <h1 className="text-4xl font-sans font-extrabold  py-4">Register</h1>
          <form onSubmit={handleRegister} className="flex flex-col my-4">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              ref={nameRef}
              autoComplete="off"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
              className="p-2 rounded-lg "
            />

            <label htmlFor="email" className="mt-3">
              Email:
            </label>
            <input
              type="text"
              id="email"
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
              className="p-2 rounded-lg"
            />

            <label htmlFor="password" className="mt-3">
              Password:
            </label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
              className="p-2 rounded-lg"
            />
            <label htmlFor="confirm_pwd" className="mt-3">
              Confirm Password:
            </label>
            <input
              type="password"
              id="confirm_pwd"
              onChange={(e) => setMatchPassword(e.target.value)}
              value={matchPassword}
              required
              className="p-2 rounded-lg mb-2"
            />
            <button className="mt-2 p-2 bg-amber-700 hover:bg-amber-800 rounded-lg text-white">
              Sign Up
            </button>
          </form>
          <p>
            Already registered? &nbsp; &nbsp; &nbsp; &nbsp;
            <span className="line">
              <Link href="/login">Sign In</Link>
            </span>
          </p>
        </section>
      )}
    </div>
  );
};

export default Register;
