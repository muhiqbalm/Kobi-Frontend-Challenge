import React from "react";

export default function QuestionStatus() {
  const numbers = [];

  for (let i = 1; i <= 24; i++) {
    const answered = i === 10 || i === 23 || i === 24 ? false : true;
    numbers.push({ number: i, answered });
  }

  return (
    <div className="p-10 bg-sky-100 h-max sticky top-10">
      <h1 className="text-slate-500 font-semibold">Question Status</h1>
      <h3 className="text-slate-400 font-semibold md">
        Lorem ipsum dolor sit amet.
      </h3>
      <div className="grid grid-cols-7 gap-6 my-8">
        {numbers.map((item) => (
          <div
            className={`font-semibold text-gray-600 h-8 w-8 rounded-full items-center justify-center inline-flex ${
              item.answered ? "bg-green-200" : "bg-red-200"
            }`}
          >
            {item.number}
          </div>
        ))}
      </div>
      <div className="text-slate-500 font-semibold md flex flex-col gap-3">
        Ket
        <div className="flex font-semibold text-slate-400  items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-green-200"></div>
          Answered
        </div>
        <div className="flex font-semibold text-slate-400  items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-red-200"></div>
          Unanswered
        </div>
      </div>
    </div>
  );
}
