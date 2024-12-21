import React, { useState } from "react";
import "./LatihanSoal1.css";

const LatihanSoal = () => {
  const [answers, setAnswers] = useState([]);
  const [setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const questions = [
    {
      question: "Which sentence uses an adverb correctly?",
      options: [
        { label: "A. She sings beautifully.", value: "A", isCorrect: true },
        { label: "B. She sings beauty.", value: "B" },
        { label: "C. She sings beautyful.", value: "C" },
        { label: "D. She sings beautyfully.", value: "D" },
      ],
      explanation: "The correct sentence is 'She sings beautifully.' because 'beautifully' is an adverb describing how she sings.",
    },
    {
      question: "Choose the adverb in the following sentence: 'He ran very fast.'",
      options: [
        { label: "A. He", value: "A" },
        { label: "B. ran", value: "B" },
        { label: "C. very", value: "C", isCorrect: true },
        { label: "D. fast", value: "D" },
      ],
      explanation: "'Very' is an adverb that modifies 'fast', showing the degree of speed.",
    },
    {
      question: "Which of the following is an adverb of frequency?",
      options: [
        { label: "A. Quickly", value: "A" },
        { label: "B. Always", value: "B", isCorrect: true },
        { label: "C. Slow", value: "C" },
        { label: "D. Beautiful", value: "D" },
      ],
      explanation: "'Always' is an adverb of frequency, indicating how often something happens.",
    },
    {
      question: "What type of adverb is used in the sentence 'She works hard every day'?",
      options: [
        { label: "A. Adverb of manner", value: "A", isCorrect: true },
        { label: "B. Adverb of time", value: "B" },
        { label: "C. Adverb of place", value: "C" },
        { label: "D. Adverb of degree", value: "D" },
      ],
      explanation: "The adverb 'hard' describes how she works, so it's an adverb of manner.",
    },
    {
      question: "Which of the following sentences does not contain an adverb?",
      options: [
        { label: "A. He is always happy.", value: "A" },
        { label: "B. She runs fast.", value: "B" },
        { label: "C. The dog barks loudly.", value: "C" },
        { label: "D. He speaks English.", value: "D", isCorrect: true },
      ],
      explanation: "The sentence 'He speaks English.' does not contain an adverb. The other sentences have adverbs that modify verbs.",
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
          <h1 className="latihan-soal1-title">Latihan Adverb</h1>
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
        <h1 className="latihan-soal1-title">Latihan Adverb</h1>
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