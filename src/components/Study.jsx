// import Quiz from "./components/Quiz";
import axios from "axios";
import React, { useEffect, useState } from "react";

function Study() {
  const [studyCards, setStudyCards] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5001/studyCards").then((res) => {
      setStudyCards(res.data);
      console.log(res.data);
    });
  }, []);
  return (
    <div className="studyPage">
      <h1>Study!</h1>
    </div>
  );
}

export default Study;
