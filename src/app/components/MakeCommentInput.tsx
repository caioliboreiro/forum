"use client";
import { useState } from "react";

export default function MakeCommentInput() {
  const [textInputValue, setTextInputValue] = useState("");

  return (
    <form action="" className="w-full">
    <input
      className="w-full px-3 py-2 text-white placeholder-gray-300 border border-gray-200 rounded-3xl"
      type="text"
      placeholder="Se junte à discussão"
      value={textInputValue}
      onChange={(event) => setTextInputValue(event.target.value)}
    />
    </form>
  );
}
