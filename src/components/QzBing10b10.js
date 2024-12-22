import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./tryout.css";
import Timer from "./Timer";
import Question from "./Question";

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
    { question: "1. Which sentence is in the simple present tense?", options: ["She writes a letter every day.", "He wrote a letter yesterday.", "They are writing a letter now.", "I will write a letter tomorrow."], answer: "She writes a letter every day." },
    { question: "2. What is the correct form of the verb for She ___ (go) to school every day?", options: ["goes", "go", "went", "going"], answer: "goes" },
    { question: "3. Which sentence is incorrect?", options: ["He walks to the park every morning.", "They don't like spicy food.", "She do her homework every night.", "I always wake up early."], answer: "She do her homework every night." },
    { question: "4. Choose the negative form: He speaks English fluently.", options: ["He doesn't speak English fluently.", "He don't speak English fluently.", "He didn't speak English fluently.", "He isn't speak English fluently"], answer: "He doesn't speak English fluently." },
    { question: "5. Simple present tense is used to express:", options: ["Past actions.", "Future plans.", "Daily habits.", "Actions happening now."], answer: "Daily habits." },
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