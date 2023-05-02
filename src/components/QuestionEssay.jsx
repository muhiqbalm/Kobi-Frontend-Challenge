import React from "react";
import essayQuestionData from "../data/essayQuestionData";

export default function QuestionEssay() {
  const questions = essayQuestionData.slice(3, 6);
  return (
    <div className="w-full flex flex-col text-slate-500/70 gap-5 ">
      {questions.map((data, index) => (
        <div className="flex flex-col gap-3">
          <div className="flex items-center">
            <div className="inline-flex items-center justify-center mx-2 w-8 h-8 bg-gray-300 font-semibold text-md">
              {index + 12}
            </div>
            <h3 className="font-[500]">{data}</h3>
          </div>
          <div className="flex italic text-slate-600 font-semibold items-center pl-12">
            answer
            <input className=" mx-2 bg-transparent w-24 border-b-2 border-dotted border-slate-500 focus:outline-none font-semibold text-blue-400"></input>
          </div>
        </div>
      ))}
    </div>
  );
}
