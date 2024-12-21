import React, { useState } from "react";
import "./LatihanSoal1.css";

const LatihanSoal2 = () => {
  const [answers, setAnswers] = useState([]);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const questions = [
    {
      question: "Which of the following is a declarative sentence?",
      options: [
        { label: "A. Are you coming to the party?", value: "A" },
        { label: "B. I am going to the store.", value: "B", isCorrect: true },
        { label: "C. Please pass the salt.", value: "C" },
        { label: "D. Close the door.", value: "D" },
      ],
      explanation: "A declarative sentence makes a statement and ends with a period. Example: 'I am going to the store.'",
    },
    {
      question: "Which sentence is an interrogative sentence?",
      options: [
        { label: "A. I don't like this movie.", value: "A" },
        { label: "B. Do you want some coffee?", value: "B", isCorrect: true },
        { label: "C. Turn off the lights.", value: "C" },
        { label: "D. I can't wait to go home.", value: "D" },
      ],
      explanation: "An interrogative sentence asks a question and ends with a question mark. Example: 'Do you want some coffee?'",
    },
    {
      question: "Which of these sentences is an imperative sentence?",
      options: [
        { label: "A. What time is the meeting?", value: "A" },
        { label: "B. Could you pass the paper?", value: "B" },
        { label: "C. Please submit your homework.", value: "C", isCorrect: true },
        { label: "D. I want to go to the beach.", value: "D" },
      ],
      explanation: "An imperative sentence gives a command or request. Example: 'Please submit your homework.'",
    },
    {
      question: "Which sentence is an exclamatory sentence?",
      options: [
        { label: "A. How exciting the news is!", value: "A", isCorrect: true },
        { label: "B. I love ice cream.", value: "B" },
        { label: "C. Please help me with my homework.", value: "C" },
        { label: "D. Can you believe it?", value: "D" },
      ],
      explanation: "An exclamatory sentence expresses strong feeling and ends with an exclamation mark. Example: 'How exciting the news is!'",
    },
    {
      question: "Which of the following is a compound sentence?",
      options: [
        { label: "A. I wanted to go, but I didn't have time.", value: "A", isCorrect: true },
        { label: "B. She is my friend.", value: "B" },
        { label: "C. After the rain stopped, we went outside.", value: "C" },
        { label: "D. He was tired because he didn't sleep well.", value: "D" },
      ],
      explanation: "A compound sentence contains two independent clauses joined by a conjunction. Example: 'I wanted to go, but I didn't have time.'",
    },
  ];

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerClick = (option) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestionIndex] = option.value;
    setAnswers(updatedAnswers);

    if (option.isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }

    setIsCorrect(option.isCorrect || false);
    setIsAnswered(true);
  };

  const goToNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setIsAnswered(answers[currentQuestionIndex + 1] ? true : false);
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
      setIsAnswered(answers[currentQuestionIndex - 1] ? true : false);
    }
  };

  const handleFinishQuiz = () => {
    setIsFinished(true);
  };

  const handleRestartQuiz = () => {
    setAnswers([]);
    setScore(0);
    setCurrentQuestionIndex(0);
    setIsFinished(false);
    setIsAnswered(false);
  };

  if (isFinished) {
    return (
      <div className="latihan-soal1-container">
        <div className="latihan-soal1-question-box">
          <h1 className="latihan-soal1-title">Type of Sentence Quiz</h1>
          <h2>Quiz Finished!</h2>
          <p>Your Score: {score}/{questions.length}</p>
          <button className="finish-button" onClick={handleRestartQuiz}>
            Retry Quiz
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="latihan-soal1-container">
      <div className="latihan-soal1-question-box">
        <h1 className="latihan-soal1-title">Type of Sentence Quiz</h1>
        <div className="latihan-soal1-question">
          <h2>
            Question {currentQuestionIndex + 1}/{questions.length}
          </h2>
          <p>{currentQuestion.question}</p>
        </div>
        <div className="latihan-soal1-answers">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              className={`latihan-soal1-answer-button ${answers[currentQuestionIndex] === option.value ? "latihan-soal1-selected-answer" : ""}`}
              onClick={() => handleAnswerClick(option)}
              disabled={answers[currentQuestionIndex]}
            >
              {option.label}
            </button>
          ))}
        </div>
        {answers[currentQuestionIndex] && (
          <div className="latihan-soal1-explanation-box">
            <h2>Your Answer: {answers[currentQuestionIndex]}</h2>
            <h3>
              {isCorrect
                ? "Your Answer is Correct!"
                : `Correct Answer: ${currentQuestion.options.find((opt) => opt.isCorrect)?.value}`}
            </h3>
            <p>{currentQuestion.explanation}</p>
          </div>
        )}
        <div className="latihan-soal1-navigation-buttons">
          <button
            className="latihan-soal1-nav-button prev"
            onClick={goToPreviousQuestion}
            disabled={currentQuestionIndex === 0}
          >
            ← Previous Question
          </button>
          <button
            className="latihan-soal1-nav-button next"
            onClick={currentQuestionIndex === questions.length - 1 ? handleFinishQuiz : goToNextQuestion}
          >
            {currentQuestionIndex === questions.length - 1 ? "Finish" : "Next Question →"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LatihanSoal2;