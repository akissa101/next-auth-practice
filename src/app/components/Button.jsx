import React from "react";

export default function Button({ title, clicked, ...rest }) {
  return (
    <button
      onClick={clicked}
      className="bg-sky-400 dark:bg-sky-800 hover:opacity-50 py-2 px-4 rounded-lg transition-all duration-300"
    >
      {title}
    </button>
  );
}
