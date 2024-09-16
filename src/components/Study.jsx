import axios from "axios";
import StudyCard from "./StudyCard";
import React, { useEffect, useState } from "react";

function Study() {
  const [studyCards, setStudyCards] = useState([]);
  const [search, setSearch] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    axios.get("http://localhost:5001/studyCards").then((res) => {
      setStudyCards(res.data);
      console.log(res.data);
    });
  }, []);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
    setCurrentIndex(0); // Reset to the first card when search changes
  };

  const handleNextCard = () => {
    setCurrentIndex((prevIndex) => {
      const filteredCards = studyCards.filter((studyCard) =>
        studyCard.question.toLowerCase().includes(search.toLowerCase())
      );
      if (filteredCards.length === 0) return 0; // No cards available
      const nextIndex = (prevIndex + 1) % filteredCards.length;
      return nextIndex;
    });
  };

  const handlePreviousCard = () => {
    setCurrentIndex((prevIndex) => {
      const filteredCards = studyCards.filter((studyCard) =>
        studyCard.question.toLowerCase().includes(search.toLowerCase())
      );
      if (filteredCards.length === 0) return 0; // No cards available
      const previousIndex =
        (prevIndex - 1 + filteredCards.length) % filteredCards.length;
      return previousIndex;
    });
  };

  const filteredCards = studyCards.filter((studyCard) =>
    studyCard.question.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="studyPage">
      <h1>Let's Study</h1>

      <input
        className="search"
        type="text"
        placeholder="Search questions"
        value={search}
        onChange={handleSearchChange}
      />
      {filteredCards.length > 0 && (
        <div>
          <StudyCard studyCard={filteredCards[currentIndex]} />
          <div className="buttons">
            <button className="lastCard" onClick={handlePreviousCard}>
              Previous
            </button>
            <button className="nextCard" onClick={handleNextCard}>
              Next
            </button>
          </div>
        </div>
      )}
      {filteredCards.length === 0 && (
        <p className="noCard">No cards match your search criteria.</p>
      )}
    </div>
  );
}

export default Study;
