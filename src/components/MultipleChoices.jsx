import React, { useState } from "react";

const MultipleChoiceQuestion = ({
  question,
  choices,
  answer,
  onAnswered,
  questionNumber,
}) => {
  const [selectedChoice, setSelectedChoice] = useState(null);

  const handleChoiceClick = (choice) => {
    if (selectedChoice === choice) {
      setSelectedChoice(null);
      onAnswered(false);
    } else {
      setSelectedChoice(choice);
      onAnswered(choice === answer);
    }
  };

  return (
    <div className="flex gap-4 text-slate-400">
      <div className="inline-flex items-center justify-center w-8 h-8 bg-gray-300 font-semibold text-md">
        {questionNumber}
      </div>
      <div className="flex flex-col gap-3 pt-1">
        <h4 className="font-semibold ">{question}</h4>
        {choices.map((choice, index) => (
          <div
            onClick={() => handleChoiceClick(choice)}
            className="flex items-center gap-3 font-semibold"
          >
            <button
              key={index}
              className={`h-3 w-3 rounded-full cursor-pointer outline outline-2 outline-offset-[3px] outline-slate-400/50 ${
                selectedChoice === choice
                  ? "bg-blue-300/70 "
                  : "bg-slate-300/70 "
              }`}
              onClick={() => handleChoiceClick(choice)}
            ></button>
            {choice}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultipleChoiceQuestion;
