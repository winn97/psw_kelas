import React, { useState } from "react";
import "./LatihanSoal1.css";

const LatihanSoal1 = () => {
  const [answers, setAnswers] = useState([]);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const questions = [
    {
      question: "Which sentence is in the correct order of a basic sentence structure (subject + verb + object)?",
      options: [
        { label: "A. I read the book", value: "A", isCorrect: true },
        { label: "B. Read book I the", value: "B" },
        { label: "C. The book I read", value: "C" },
        { label: "D. I the read book", value: "D" },
      ],
      explanation:
        "In a basic sentence structure, the subject (I), verb (read), and object (the book) should appear in the order of subject + verb + object.",
    },
    {
      question: "Which of the following is a correctly formed question in English?",
      options: [
        { label: "A. She is going to the market?", value: "A" },
        { label: "B. Is she going to the market?", value: "B", isCorrect: true },
        { label: "C. Market going to the she is?", value: "C" },
        { label: "D. To the she market going is?", value: "D" },
      ],
      explanation:
        "In English, questions typically follow the order of auxiliary verb + subject + main verb, as seen in option B.",
    },
    {
      question: "Which sentence contains a proper use of a compound sentence?",
      options: [
        { label: "A. I wanted to go shopping, but I didn't have enough money.", value: "A", isCorrect: true },
        { label: "B. I wanted to go shopping I didn't have enough money.", value: "B" },
        { label: "C. I wanted to go shopping and didn't have enough money.", value: "C" },
        { label: "D. I wanted shopping go to I didn't have money enough.", value: "D" },
      ],
      explanation:
        "A compound sentence connects two independent clauses with a coordinating conjunction like 'but' (Option A).",
    },
    {
      question: "What is the correct sentence structure for an imperative sentence?",
      options: [
        { label: "A. You go to the store.", value: "A" },
        { label: "B. Go to the store.", value: "B", isCorrect: true },
        { label: "C. The store you go to.", value: "C" },
        { label: "D. Store the to go you.", value: "D" },
      ],
      explanation:
        "An imperative sentence gives a command or instruction and usually omits the subject, so option B is the correct form.",
    },
    {
      question: "Which sentence is an example of a complex sentence?",
      options: [
        { label: "A. I will go to the store, and I will buy some milk.", value: "A" },
        { label: "B. I will go to the store because I need milk.", value: "B", isCorrect: true },
        { label: "C. I will go to the store, I need milk.", value: "C" },
        { label: "D. I will store the go milk.", value: "D" },
      ],
      explanation:
        "A complex sentence contains an independent clause and at least one dependent clause. Option B contains both.",
    },
    {
      question: "Which of the following sentences correctly uses an adjective?",
      options: [
        { label: "A. She is the most smartest in the class.", value: "A" },
        { label: "B. She is the smartest in the class.", value: "B", isCorrect: true },
        { label: "C. She the smartest is in class.", value: "C" },
        { label: "D. She in the smartest class is.", value: "D" },
      ],
      explanation:
        "In Option B, 'smartest' is used correctly as a superlative adjective to describe 'she'.",
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
  };

  if (isFinished) {
    return (
      <div className="latihan-soal1-container">
        <div className="latihan-soal1-question-box">
          <h1 className="latihan-soal1-title">Sentence Structure Quiz</h1>
          <h2>Quiz Finished!</h2>
          <p>Your score: {score}/{questions.length}</p>
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
        <h1 className="latihan-soal1-title">Sentence Structure Quiz</h1>
        <div className="latihan-soal1-question">
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
                ? "Correct Answer!"
                : `Correct Answer: ${
                    currentQuestion.options.find((opt) => opt.isCorrect)?.value
                  }`}
            </h3>
            <p>{currentQuestion.explanation}</p>
          </div>
        )}
        <div className="latihan-soal1-navigation-buttons">
          <button
            className="nav-button prev"
            onClick={goToPreviousQuestion}
            disabled={currentQuestionIndex === 0}
          >
            ← Previous Question
          </button>
          <button
            className="nav-button next"
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

export default LatihanSoal1;