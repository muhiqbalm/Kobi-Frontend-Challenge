import React, { useState } from "react";
import Header from "../components/Header";
import MultipleChoiceQuestion from "../components/MultipleChoices";
import Button from "../components/button";
import { RiTimeLine } from "react-icons/ri";
import Timer from "../components/Timer";
import QuestionHeader from "../components/QuestionHeader";
import multipleChoiceData from "../data/multipleChoiceData";
import QuestionForm from "../components/QuestionForm";
import QuestionFormWithImage from "../components/QuestionFormWithImage";
import QuestionEssay from "../components/QuestionEssay";
import QuestionStatus from "../components/QuestionStatus";
import SoundPlayer from "../components/MediaPlayer";

export default function MainPage() {
  const handleQuestionAnswered = (isCorrect) => {
    console.log(isCorrect ? "Correct!" : "Wrong!");
  };

  return (
    <>
      <Header />
      <div className="px-40 min-h-screen bg-white grid grid-cols-4 gap-5 py-10 ">
        <div className="flex flex-col gap-5 col-span-3 pr-20">
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-5">
              <h1>Listening Tip</h1>
              <Button
                icon={RiTimeLine}
                className="px-5 py-1 bg-blue-500 rounded-full gap-3 font-semibold text-white hover:translate-y-0 cursor-default"
              >
                <Timer duration={3599} />
              </Button>
            </div>
            <p className="text-slate-500 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <SoundPlayer
              url={
                "https://dailydictation.com/upload/ielts-listening/ielts-cambridge-17-test-1-section-1-2022-12-19-21-22-35/0-ielts-cambridge-17-test-1-section-1.mp3"
              }
            />
            <div className="w-full px-3 py-2 bg-blue-200/70 flex gap-3 items-center">
              <h3 className="font-semibold text-slate-700">Part 1</h3>
              <p className="text-slate-500/70 font-[600]">(Question 1-10)</p>
            </div>

            <QuestionHeader
              questionRange="1-6"
              desc={[
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              ]}
            />
            {multipleChoiceData.map((data, index) => (
              <MultipleChoiceQuestion
                question={data.question}
                choices={data.choices}
                answer={data.answer}
                onAnswered={handleQuestionAnswered}
                questionNumber={index + 1}
              />
            ))}
            <QuestionHeader
              questionRange="7-10"
              desc={[
                "Complete the form below, using NO MORE THAN THREE WORDS AND/OR NUMBER for each answer.",
              ]}
            />
            <QuestionForm />
            <div className="w-full px-3 mt-10 py-2 bg-blue-200/70 flex gap-3 items-center">
              <h3 className="font-semibold text-slate-700">Part 2</h3>
              <p className="text-slate-500/70 font-[600]">(Question 11-24)</p>
            </div>
            <QuestionHeader
              questionRange="11-13"
              desc={[
                "Label the diagram/plan below",
                "Write the correct letter, A-G next to question 11-13",
              ]}
            />
            <QuestionFormWithImage />
            <QuestionHeader
              questionRange="14-20"
              desc={[
                "Answer the following question using NO MORE THAN THREE WORDS AND/OR NUMBER.",
              ]}
            />
            <QuestionEssay />
            <Button className="inline-flex justify-center w-full py-3 bg-indigo-600 text-white text-xl font-semibold mt-5 rounded-md hover:bg-indigo-500">
              Submit
            </Button>
          </div>
        </div>
        <QuestionStatus />
      </div>
    </>
  );
}
