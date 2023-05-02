import React from "react";
import Button from "./button";
import { MdHeadsetMic } from "react-icons/md";

export default function QuestionHeader({ desc, questionRange }) {
  return (
    <div className="flex flex-col gap-3 mt-2">
      <div className="flex gap-5 items-center">
        <h2 className="text-blue-500">Question {questionRange}</h2>
        <Button
          icon={MdHeadsetMic}
          className="bg-sky-100 text-slate-500 border-2 border-sky-500 items-center gap-2 px-4 py-[2px] font-semibold hover:bg-sky-500 hover:text-white"
        >
          Click here to listen
        </Button>
      </div>
      {desc.map((text) => (
        <div className="italic text-slate-600 font-semibold">{text}</div>
      ))}
    </div>
  );
}
