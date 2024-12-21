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
      question: "Which of the following is an independent clause?",
      options: [
        { label: "A. Because I was late", value: "A" },
        { label: "B. I went to the store", value: "B", isCorrect: true },
        { label: "C. If it rains tomorrow", value: "C" },
        { label: "D. Although he studied", value: "D" },
      ],
      explanation:
        "An independent clause is a group of words that can stand alone as a complete sentence. 'I went to the store' is an independent clause because it has a subject and a predicate and expresses a complete thought.",
    },
    {
      question: "What type of clause is 'Because she was tired'?",
      options: [
        { label: "A. Independent Clause", value: "A" },
        { label: "B. Dependent Clause", value: "B", isCorrect: true },
        { label: "C. Relative Clause", value: "C" },
        { label: "D. Adjective Clause", value: "D" },
      ],
      explanation:
        "'Because she was tired' is a dependent clause because it does not express a complete thought and relies on an independent clause to make sense.",
    },
    {
      question: "What is the purpose of a relative clause?",
      options: [
        { label: "A. To describe a noun", value: "A", isCorrect: true },
        { label: "B. To connect two independent clauses", value: "B" },
        { label: "C. To show cause and effect", value: "C" },
        { label: "D. To express condition", value: "D" },
      ],
      explanation:
        "A relative clause modifies a noun and provides additional information about it. For example, 'The book, which is on the table, is mine.'",
    },
    {
      question: "Which sentence contains a noun clause?",
      options: [
        { label: "A. She doesn't know what time it is", value: "A", isCorrect: true },
        { label: "B. I went to the store", value: "B" },
        { label: "C. Because I was late", value: "C" },
        { label: "D. The teacher gave us homework", value: "D" },
      ],
      explanation:
        "A noun clause acts as a noun in a sentence. In 'She doesn't know what time it is', 'what time it is' is the noun clause, acting as the object of 'know'.",
    },
    {
      question: "What type of clause is 'If you study hard'?",
      options: [
        { label: "A. Independent Clause", value: "A" },
        { label: "B. Conditional Clause", value: "B", isCorrect: true },
        { label: "C. Relative Clause", value: "C" },
        { label: "D. Adverbial Clause", value: "D" },
      ],
      explanation:
        "'If you study hard' is a conditional clause because it expresses a condition that must be met for something else to happen.",
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
          <h1 className="latihan-soal1-title">Latihan Type of Clauses</h1>
          <h2>Quiz Selesai!</h2>
          <p>
            Skor Anda: {score}/{questions.length}
          </p> 

          <button className="latihan-soal1-reset-button" onClick={resetQuiz}>
            Ulangi Latihan
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="latihan-soal1-container">
      <div className="latihan-soal1-question-box">
        <h1 className="latihan-soal1-title">Latihan Type of Clauses</h1>
        <div className="latihan-soal1-question">
          <h2>
            Soal Nomor {currentQuestionIndex + 1}/{questions.length}
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
            <h2>Jawaban Anda: {answers[currentQuestionIndex]}</h2>
            <h3>
              {isCorrect
                ? "Jawaban Anda Benar!"
                : `Jawaban Benar: ${
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
            ← Soal Sebelumnya
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
              ? "Selesai"
              : "Soal Selanjutnya →"}
          </button>
        </div>
      </div>
    </div>
  );
};
export default LatihanSoal;