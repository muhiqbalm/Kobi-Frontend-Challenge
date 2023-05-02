import React from "react";

export default function QuestionForm() {
  return (
    <div className="flex flex-col w-full bg-slate-200/80 p-10 text-slate-500/70 gap-3">
      <div className="text-2xl font-semibold inline-flex justify-center w-full">
        Trafel Safe
      </div>
      <h3 className="font-[500] my-5">Department : Motor Insurance</h3>
      <h2 className="font-[500] text-xl">Client Details :</h2>
      <div className="flex items-center">
        <h3 className="font-[500]">Name : Elisabeth</h3>
        <div className="inline-flex items-center justify-center mx-2 w-8 h-8 bg-gray-300 font-semibold text-md">
          7
        </div>
        <input className="bg-transparent w-24 border-b-2 border-dotted border-slate-500 focus:outline-none font-semibold text-blue-400"></input>
      </div>
      <h3 className="font-[500]">Date of birth : 8. 10. 1975</h3>
      <div className="flex items-center">
        <h3 className="font-[500]">Address : </h3>
        <div className="inline-flex items-center justify-center mx-2 w-8 h-8 bg-gray-300 font-semibold text-md">
          8
        </div>
        <input className="bg-transparent w-24 border-b-2 border-dotted border-slate-500 focus:outline-none font-semibold text-blue-400 mr-2"></input>
        <h3 className="font-[500]">(street) Callingtown (town) </h3>
      </div>
      <div className="flex items-center">
        <h3 className="font-[500]">Policy number : </h3>
        <div className="inline-flex items-center justify-center mx-2 w-8 h-8 bg-gray-300 font-semibold text-md">
          10
        </div>
        <input className="bg-transparent w-24 border-b-2 border-dotted border-slate-500 focus:outline-none font-semibold text-blue-400"></input>
      </div>
    </div>
  );
}
