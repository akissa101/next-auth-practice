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
    <div className="md:w-2/3 m-auto mt-8 rounded-xl bg-gray-300 p-4">
      {success ? (
        <section className="">
          <h1>Success!</h1>
          <p>
            <a href="#">Sign In</a>
          </p>
        </section>
      ) : (
        <section className="flex flex-col">
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <h1 className="text-4xl font-sans font-extrabold text-blue-900">
            Register
          </h1>
          <form onSubmit={handleRegister} className="flex flex-col my-4">
            <label htmlFor="name">
              Name:
              <FaCheck className={validName ? "valid" : "hide"} />
              <FaTimes className={validName || !name ? "hide" : "invalid"} />
            </label>
            <input
              type="text"
              id="name"
              ref={nameRef}
              autoComplete="off"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
              aria-invalid={validName ? "false" : "true"}
              aria-describedby="uidnote"
              onFocus={() => setNameFocus(true)}
              onBlur={() => setNameFocus(false)}
              className="p-2 rounded-lg "
            />
            <p
              id="uidnote"
              className={
                nameFocus && name && !validName ? "instructions" : "offscreen"
              }
            >
              <FaInfoCircle />4 to 24 characters. &nbsp; &nbsp; Must begin with
              a letter. <br /> Letters, numbers, underscores, hyphens allowed.
            </p>

            <label htmlFor="email" className="mt-3">
              Email:
              <FaCheck className={validEmail ? "valid" : "hide"} />
              <FaTimes className={validEmail || !email ? "hide" : "invalid"} />
            </label>
            <input
              type="text"
              id="email"
              ref={emailRef}
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
              aria-invalid={validEmail ? "false" : "true"}
              aria-describedby="uidnote"
              onFocus={() => setEmailFocus(true)}
              onBlur={() => setEmailFocus(false)}
              className="p-2 rounded-lg"
            />
            <p
              id="uidnote"
              className={
                emailFocus && email && !validName ? "instructions" : "offscreen"
              }
            >
              <FaInfoCircle />
              it must be an email format such as example@media.com
            </p>

            <label htmlFor="password" className="mt-3">
              Password:
              <FaCheck className={validPassword ? "valid" : "hide"} />
              <FaTimes
                className={validPassword || !password ? "hide" : "invalid"}
              />
            </label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
              aria-invalid={validPassword ? "false" : "true"}
              aria-describedby="passwordnote"
              onFocus={() => setPasswordFocus(true)}
              onBlur={() => setPasswordFocus(false)}
              className="p-2 rounded-lg"
            />
            <p
              id="passwordnote"
              className={
                passwordFocus && !validPassword ? "instructions" : "offscreen"
              }
            >
              <FaInfoCircle />8 to 24 characters. &nbsp; &nbsp; Must include
              uppercase and lowercase letters, a number and a special character.
              &nbsp; &nbsp; Allowed special characters:{" "}
              <span aria-label="exclamation mark">!</span>{" "}
              <span aria-label="at symbol">@</span>{" "}
              <span aria-label="hashtag">#</span>{" "}
              <span aria-label="dollar sign">$</span>{" "}
              <span aria-label="percent">%</span>
            </p>

            <label htmlFor="confirm_pwd" className="mt-3">
              Confirm Password:
              <FaCheck
                className={validMatch && matchPassword ? "valid" : "hide"}
              />
              <FaTimes
                className={validMatch || !matchPassword ? "hide" : "invalid"}
              />
            </label>
            <input
              type="password"
              id="confirm_pwd"
              onChange={(e) => setMatchPassword(e.target.value)}
              value={matchPassword}
              required
              aria-invalid={validMatch ? "false" : "true"}
              aria-describedby="confirmnote"
              onFocus={() => setMatchFocus(true)}
              onBlur={() => setMatchFocus(false)}
              className="p-2 rounded-lg mb-2"
            />
            <p
              id="confirmnote"
              className={
                matchFocus && !validMatch ? "instructions" : "offscreen"
              }
            >
              <FaInfoCircle />
              Must match the first password input field.
            </p>

            <button
              className="disabled:cursor-not-allowed  disabled:opacity-40  p-2 bg-gray-700 hover:bg-gray-800 rounded-lg text-white"
              disabled={
                !validName || !validPassword || !validMatch ? true : false
              }
            >
              Sign Up
            </button>
          </form>
          <p>
            Already registered?
            <br />
            <span className="line">
              <Link href="/">Sign In</Link>
            </span>
          </p>
        </section>
      )}
    </div>
  );
};

export default Register;
