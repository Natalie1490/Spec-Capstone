import axios from "axios";
import QuizCard from "./QuizCard";
import React, { useEffect, useState } from "react";

function Quiz() {
  const [quizCards, setQuizCards] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5001/studyCards")
      .then((res) => {
        setQuizCards(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.error("Error fetching quiz cards:", error);
      });
  }, []);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className="QuizPage">
      <h1>Quiz</h1>
      <input
        type="text"
        placeholder="Search questions"
        value={search}
        onChange={handleSearchChange}
        style={{ marginBottom: "20px", padding: "10px", width: "100%" }}
      />
      {quizCards
        .filter((quizCard) => {
          let title = quizCard.question.toLowerCase();
          let searchParams = search.toLowerCase();
          return title.includes(searchParams);
        })
        .map((quizCard) => {
          return <QuizCard key={quizCard.id} studyCard={quizCard} />;
        })}
    </div>
  );
}

export default Quiz;
