import React from "react";

const StudyCard = ({ studyCard }) => {
  console.log(studyCard);

  return (
    <div className="studyDiv">
      <div className="studyQuestion">
        <p>{studyCard.question}</p>
      </div>
      <div className="studyAnswer">
        <p>{studyCard.answer}</p>
      </div>
      <div className="id">
        <p>{studyCard.id}</p>
      </div>
    </div>
  );
};

export default StudyCard;
