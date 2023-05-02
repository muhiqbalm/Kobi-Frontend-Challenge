import React from "react";
import essayQuestionData from "../data/essayQuestionData";

export default function QuestionFormWithImage() {
  const questions = essayQuestionData.slice(0, 3);
  return (
    <div className="w-full flex flex-col text-slate-500/70 gap-3 ">
      <div className="p-10 inline-flex justify-center">
        <img
          src="https://www.charlotteathleticclub.com/assets/camaleon_cms/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png"
          alt="Example"
          className="object-cover h-48 opacity-50"
        />
      </div>
      {questions.map((data, index) => (
        <div className="flex items-center">
          <div className="inline-flex items-center justify-center mx-2 w-8 h-8 bg-gray-300 font-semibold text-md">
            {index + 10}
          </div>
          <h3 className="font-[500]">{data}</h3>
          <input className=" mx-2 bg-transparent w-24 border-b-2 border-dotted border-slate-500 focus:outline-none font-semibold text-blue-400"></input>
        </div>
      ))}
    </div>
  );
}
