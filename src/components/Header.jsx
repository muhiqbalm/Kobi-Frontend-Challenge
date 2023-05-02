import React from "react";
import Button from "./button.jsx";
import { RiCloseCircleLine } from "react-icons/ri";

export default function Header() {
  return (
    <div className="bg-slate-300 w-full px-40 py-6 flex justify-between">
      <h1>Practice 1 - Listening Test</h1>
      <div className="flex gap-6">
        <Button className="bg-transparent text-slate-600 border-2 border-sky-500 items-center gap-2 px-4 font-semibold hover:bg-sky-500 hover:text-white">
          Instruction
        </Button>
        <Button
          icon={RiCloseCircleLine}
          className="flex bg-red-500 text-white items-center gap-2 px-4 rounded-full font-semibold hover:bg-red-800"
        >
          Exit
        </Button>
      </div>
    </div>
  );
}
