import React, { useState } from "react";
import "./LatihanSoal1.css";

const LatihanSoal5 = () => {
  const [answers, setAnswers] = useState([]);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const questions = [
    {
      question: "Which of the following is a coordinating conjunction?",
      options: [
        { label: "A. Because", value: "A" },
        { label: "B. Although", value: "B" },
        { label: "C. But", value: "C", isCorrect: true },
        { label: "D. If", value: "D" },
      ],
      explanation:
        "Coordinating conjunctions connect words, phrases, or clauses of equal rank. 'But' is a coordinating conjunction.",
    },
    {
      question: "What is the function of 'although' in a sentence?",
      options: [
        { label: "A. To show cause and effect", value: "A" },
        { label: "B. To introduce an alternative", value: "B" },
        { label: "C. To introduce a contrast", value: "C", isCorrect: true },
        { label: "D. To indicate time", value: "D" },
      ],
      explanation:
        "'Although' is a subordinating conjunction that introduces a contrast between two ideas or clauses.",
    },
    {
      question: "Choose the correct connector for this sentence: 'She was tired, ___ she went to bed early.'",
      options: [
        { label: "A. But", value: "A" },
        { label: "B. So", value: "B", isCorrect: true },
        { label: "C. Because", value: "C" },
        { label: "D. And", value: "D" },
      ],
      explanation:
        "The connector 'so' is used to show cause and effect. The sentence implies that she went to bed early because she was tired.",
    },
    {
      question: "What type of conjunction is used to show a reason for something?",
      options: [
        { label: "A. Coordinating", value: "A" },
        { label: "B. Subordinating", value: "B", isCorrect: true },
        { label: "C. Correlative", value: "C" },
        { label: "D. Adverbial", value: "D" },
      ],
      explanation:
        "Subordinating conjunctions like 'because' or 'since' are used to show cause or reason in a sentence.",
    },
    {
      question: "Which of the following is an example of a correlative conjunction?",
      options: [
        { label: "A. Either...or", value: "A", isCorrect: true },
        { label: "B. And", value: "B" },
        { label: "C. Although", value: "C" },
        { label: "D. But", value: "D" },
      ],
      explanation:
        "Correlative conjunctions come in pairs and work together. 'Either...or' is an example of correlative conjunctions.",
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
          <h1 className="latihan-soal1-title">Sentence Connectors Quiz</h1>
          <h2>Quiz Selesai!</h2>
          <p>Skor Anda: {score}/{questions.length} </p>
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
        <h1 className="latihan-soal1-title">Sentence Connectors Quiz</h1>
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
            onClick={currentQuestionIndex === questions.length - 1 ? handleFinishQuiz : goToNextQuestion}
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

export default LatihanSoal5;