import React from "react";

export default function InputItem({ row, label, type, id, value, clicked }) {
  return (
    <div className=" mb-3">
      {row === 1 ? (
        <>
          <label className="font-bold" htmlFor="username">
            {label}
          </label>
          <input
            type={type}
            id={id}
            className="block mt-2 bg-white rounded-md border border-slate-500 py-2 px-3  focus:ring-8 focus:ring-slate-300 w-full outline-transparent"
            value={value}
            onChange={clicked}
          />
        </>
      ) : row >= 2 ? (
        <>
          <label className="font-bold" htmlFor="username">
            {label}
          </label>
          <textarea
            type={type}
            id={id}
            className="block mt-2 bg-white rounded-md border border-slate-500 py-2 px-3  focus:ring-8 focus:ring-slate-300 w-full outline-transparent"
            value={value}
            onChange={clicked}
          />
        </>
      ) : (
        row >= 0 && (
          <>
            <label className="font-bold" htmlFor="username">
              {label}
            </label>
            <textarea
              type={type}
              id={id}
              className="block mt-2 bg-white rounded-md border border-slate-500 py-2 px-3  focus:ring-8 focus:ring-slate-300 w-full outline-transparent"
              value={value}
              onChange={clicked}
            />
          </>
        )
      )}
    </div>
  );
}
