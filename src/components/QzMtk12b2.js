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
    {
      question: "1. Tentukan nilai x sehingga 7x ≡ 5 (mod 12).",
      options: ["x = 1", "x = 2", "x = 3", "x = 4"],
      answer: "x = 1"
    },
    {
      question: "2. Jika 4x ≡ 10 (mod 14), berapakah nilai x?",
      options: ["x = 3", "x = 5", "x = 6", "x = 7"],
      answer: "x = 3"
    },
    {
      question: "3. Tentukan nilai n sehingga 9n ≡ 3 (mod 15).",
      options: ["n = 1", "n = 2", "n = 4", "n = 5"],
      answer: "n = 2"
    },
    {
      question: "4. Hitung nilai x yang memenuhi 5x ≡ 1 (mod 11).",
      options: ["x = 2", "x = 3", "x = 5", "x = 7"],
      answer: "x = 9"
    },
    {
      question: "5. Jika 6x ≡ 8 (mod 10), berapakah nilai x?",
      options: ["x = 2", "x = 3", "x = 4", "x = 5"],
      answer: "x = 3"
    },
    {
      question: "6. Tentukan solusi dari 3x ≡ 4 (mod 7).",
      options: ["x = 2", "x = 3", "x = 4", "x = 5"],
      answer: "x = 5"
    },
    {
      question: "7. Berapakah solusi dari 8x ≡ 6 (mod 10)?",
      options: ["x = 2", "x = 3", "x = 4", "x = 1"],
      answer: "x = 3"
    },
    {
      question: "8. Jika 12x ≡ 16 (mod 20), berapakah nilai x?",
      options: ["x = 1", "x = 2", "x = 3", "x = 4"],
      answer: "x = 4"
    },
    {
      question: "9. Tentukan nilai x yang memenuhi 7x ≡ 2 (mod 9).",
      options: ["x = 4", "x = 3", "x = 2", "x = 1"],
      answer: "x = 4"
    },
    {
      question: "10. Hitung nilai x sehingga 11x ≡ 5 (mod 13).",
      options: ["x = 6", "x = 7", "x = 8", "x = 9"],
      answer: "x = 6"
    },
    {
      question: "11. Jika 5x ≡ 7 (mod 12), berapakah nilai x?",
      options: ["x = 5", "x = 6", "x = 7", "x = 8"],
      answer: "x = 5"
    },
    {
      question: "12. Tentukan solusi dari 13x ≡ 1 (mod 17).",
      options: ["x = 4", "x = 5", "x = 6", "x = 7"],
      answer: "x = 4"
    },
    {
      question: "13. Jika 4x ≡ 8 (mod 14), berapakah nilai x?",
      options: ["x = 2", "x = 3", "x = 4", "Tidak ada solusi"],
      answer: "Tidak ada solusi"
    },
    {
      question: "14. Tentukan solusi dari 9x ≡ 6 (mod 15).",
      options: ["x = 1", "x = 2", "x = 3", "Tidak ada solusi"],
      answer: "Tidak ada solusi"
    },
    {
      question: "15. Berapakah nilai x yang memenuhi 6x ≡ 1 (mod 13)?",
      options: ["x = 11", "x = 9", "x = 8", "x = 7"],
      answer: "x = 11"
    },
    {
      question: "16. Jika 10x ≡ 4 (mod 14), berapakah nilai x?",
      options: ["x = 1", "x = 2", "x = 3", "x = 4"],
      answer: "x = 2"
    },
    {
      question: "17. Tentukan nilai x yang memenuhi 7x ≡ 9 (mod 13).",
      options: ["x = 5", "x = 6", "x = 7", "x = 8"],
      answer: "x = 6"
    },
    {
      question: "18. Berapakah solusi dari 11x ≡ 8 (mod 17)?",
      options: ["x = 6", "x = 7", "x = 8", "x = 9"],
      answer: "x = 9"
    },
    {
      question: "19. Jika 3x ≡ 7 (mod 11), berapakah nilai x?",
      options: ["x = 8", "x = 9", "x = 10", "x = 7"],
      answer: "x = 8"
    },
    {
      question: "20. Tentukan nilai x sehingga 15x ≡ 10 (mod 20).",
      options: ["x = 2", "x = 3", "x = 4", "Tidak ada solusi"],
      answer: "Tidak ada solusi"
    }
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
      <h1>Tryout Kimia Kelas XI: Hukum Termokimia</h1>
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