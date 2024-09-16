import React from "react";

const QuizCard = ({ quizCard }) => {
  console.log(quizCard);
  return (
    <div className="studyDiv">
      <div className="studyQuestion">
        <p>{quizCard.question}</p>
      </div>
      <div className="studyAnswer">
        <p>{quizCard.answer}</p>
      </div>
      <div className="nextCard">
        <p>Next</p>
      </div>
    </div>
  );
};

export default QuizCard;
