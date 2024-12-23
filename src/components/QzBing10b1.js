import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../css/TryOut.css";

const Tryout = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const alertShown = useRef(false);  

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn) {
      setIsAuthenticated(true);
    } else {
      if (!alertShown.current) {  
        alert("Anda harus login terlebih dahulu!");
        alertShown.current = true;  
      }
      navigate("/login");
    }
  }, [navigate]); 

  const questions = [
    { question: "1. What is the main purpose of a descriptive text?", options: ["To entertain the readers.", "To describe a person, place, or thing.", "To explain how to do something.", "To tell a story."], answer: "To describe a person, place, or thing" },
    { question: "2. Which is an example of a descriptive text title?", options: ["How I Spent My Holiday", "The Beauty of Mount Bromo", "My Future Plan", "How to Make a Paper Boat"], answer: "The Beauty of Mount Bromo" },
    { question: "3. What tense is commonly used in descriptive text?", options: ["Present tense.", "Past tense.", "Future tense.", "Past perfect tense."], answer: "Present tense" },
    { question: "4. Identify the descriptive sentence:", options: ["He went to the park yesterday.", "She is tall and has long black hair.", "They will meet us tomorrow.", "Can you help me?"], answer: "She is tall and has long black hair" },
    { question: "5. The following is NOT a characteristic of a descriptive text:", options: ["Contains detailed information.", "Uses adjectives.", "Describes events in sequence.", "Focuses on one subject."], answer: "Describes events in sequence" },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  const handleTimeUp = () => {
    setShowResult(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="app">
      <h1>Tryout Bahasa Inggris Kelas X</h1>
      {showResult ? (
        <div className="result">
          <h2>Skor Anda: {score} / {questions.length}</h2>
          <p>Terima kasih telah mengikuti tryout!</p>
        </div>
      ) : (
        <>
          <Timer duration={600} onTimeUp={handleTimeUp} />
          <Question 
            question={questions[currentQuestion].question} 
            options={questions[currentQuestion].options} 
            handleAnswer={handleAnswer} 
          />
        </>
      )}
      <button onClick={handleLogout} className="logout-button">Logout</button>
    </div>
  );
};

export default Tryout;