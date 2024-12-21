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
      question: "I _____ to the store yesterday.",
      options: [
        { label: "A. go", value: "A" },
        { label: "B. went", value: "B", isCorrect: true },
        { label: "C. will go", value: "C" },
        { label: "D. am going", value: "D" },
      ],
      explanation:
        "Jawaban yang benar adalah 'went', karena kalimat ini mengandung keterangan waktu 'yesterday', yang menunjukkan penggunaan past tense.",
    },
    {
      question: "She _____ to school every day.",
      options: [
        { label: "A. go", value: "A" },
        { label: "B. went", value: "B" },
        { label: "C. will go", value: "C" },
        { label: "D. goes", value: "D", isCorrect: true },
      ],
      explanation:
        "Jawaban yang benar adalah 'goes', karena kalimat ini menggunakan simple present tense untuk kebiasaan sehari-hari.",
    },
    {
      question: "They _____ studying when I called them.",
      options: [
        { label: "A. are", value: "A" },
        { label: "B. were", value: "B", isCorrect: true },
        { label: "C. will be", value: "C" },
        { label: "D. have been", value: "D" },
      ],
      explanation:
        "Jawaban yang benar adalah 'were', karena kalimat ini menggunakan past continuous tense yang menggambarkan aktivitas yang sedang berlangsung di masa lampau.",
    },
    {
      question: "By the time you arrive, I _____ finished my homework.",
      options: [
        { label: "A. will have", value: "A", isCorrect: true },
        { label: "B. will be", value: "B" },
        { label: "C. had", value: "C" },
        { label: "D. am", value: "D" },
      ],
      explanation:
        "Jawaban yang benar adalah 'will have', karena kalimat ini menggunakan future perfect tense untuk menggambarkan tindakan yang akan selesai sebelum waktu tertentu di masa depan.",
    },
    {
      question: "I _____ my keys. Can you help me find them?",
      options: [
        { label: "A. lost", value: "A" },
        { label: "B. have lost", value: "B", isCorrect: true },
        { label: "C. will lose", value: "C" },
        { label: "D. am losing", value: "D" },
      ],
      explanation:
        "Jawaban yang benar adalah 'have lost', karena kalimat ini menggunakan present perfect tense untuk menunjukkan kejadian yang baru saja terjadi dengan dampak pada saat ini.",
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
          <h1 className="latihan-soal1-title">Latihan Tenses</h1>
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
        <h1 className="latihan-soal1-title">Latihan Tenses</h1>
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