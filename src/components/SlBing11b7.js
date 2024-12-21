import React, { useState } from "react";
import "./LatihanSoal1.css";

const LatihanSoal = () => {
  const [answers, setAnswers] = useState([]);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const questions = [
    {
      question: "Which modal verb is used to express ability?",
      options: [
        { label: "A. Can", value: "A", isCorrect: true },
        { label: "B. Must", value: "B" },
        { label: "C. Should", value: "C" },
        { label: "D. Might", value: "D" },
      ],
      explanation:
        "The modal verb 'can' is used to express ability, for example: 'I can swim.'",
    },
    {
      question: "Which modal verb is used to express permission?",
      options: [
        { label: "A. Could", value: "A" },
        { label: "B. May", value: "B", isCorrect: true },
        { label: "C. Will", value: "C" },
        { label: "D. Shall", value: "D" },
      ],
      explanation:
        "'May' is used to ask for or give permission, for example: 'May I leave early today?'",
    },
    {
      question: "Which modal verb expresses a strong obligation or necessity?",
      options: [
        { label: "A. Can", value: "A" },
        { label: "B. Should", value: "B" },
        { label: "C. Must", value: "C", isCorrect: true },
        { label: "D. Could", value: "D" },
      ],
      explanation:
        "'Must' is used to express a strong obligation, for example: 'You must wear a helmet when riding a bike.'",
    },
    {
      question: "Which modal verb is used to express possibility?",
      options: [
        { label: "A. Must", value: "A" },
        { label: "B. Might", value: "B", isCorrect: true },
        { label: "C. Can", value: "C" },
        { label: "D. Should", value: "D" },
      ],
      explanation:
        "'Might' is used to express a possibility, for example: 'It might rain tomorrow.'",
    },
    {
      question: "Which modal verb is used to offer help?",
      options: [
        { label: "A. Can", value: "A", isCorrect: true },
        { label: "B. Will", value: "B" },
        { label: "C. Must", value: "C" },
        { label: "D. Might", value: "D" },
      ],
      explanation:
        "'Can' is often used to offer help, for example: 'Can I help you with that?'",
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
      setIsAnswered(answers[currentQuestionIndex + 1] !== undefined);
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
      setIsAnswered(answers[currentQuestionIndex - 1] !== undefined);
    }
  };

  const handleFinishQuiz = () => {
    setIsFinished(true);
  };

  const resetQuiz = () => {
    setAnswers([]);
    setIsAnswered(false);
    setIsCorrect(false);
    setCurrentQuestionIndex(0);
    setScore(0);
    setIsFinished(false);
  };

  if (isFinished) {
    return (
      <div className="latihan-soal1-container">
        <div className="latihan-soal1-question-box">
          <h1 className="latihan-soal1-title">Modals in English</h1>
          <h2>Quiz Completed!</h2>
          <p>
            Your Score: {score}/{questions.length}
          </p>
          <button className="latihan-soal1-reset-button" onClick={resetQuiz}>
            Retake Quiz
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="latihan-soal1-container">
      <div className="latihan-soal1-question-box">
        <h1 className="latihan-soal1-title">Modals in English</h1>
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
              className={`latihan-soal1-answer-button ${
                answers[currentQuestionIndex] === option.value
                  ? "latihan-soal1-selected-answer"
                  : ""
              }`}
              onClick={() => handleAnswerClick(option)}
              disabled={answers[currentQuestionIndex] !== undefined}
            >
              {option.label}
            </button>
          ))}
        </div>
        {answers[currentQuestionIndex] !== undefined && (
          <div className="latihan-soal1-explanation-box">
            <h2>Your Answer: {answers[currentQuestionIndex]}</h2>
            <h3>
              {isCorrect
                ? "Your answer is correct!"
                : `Correct Answer: ${
                    currentQuestion.options.find((opt) => opt.isCorrect)?.value
                  }`}
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
            onClick={
              currentQuestionIndex === questions.length - 1
                ? handleFinishQuiz
                : goToNextQuestion
            }
          >
            {currentQuestionIndex === questions.length - 1
              ? "Finish"
              : "Next Question →"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LatihanSoal;