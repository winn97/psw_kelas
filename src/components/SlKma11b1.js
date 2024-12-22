import React, { useState } from "react";
import "../css/QuestionPage.css";

const LatihanSoal1 = () => {
  const [answers, setAnswers] = useState([]);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const questions = [
    {
      question: "Apa jenis hidrokarbon yang hanya memiliki ikatan tunggal antar atom karbon?",
      options: [
        { label: "A. Alkana", value: "A", isCorrect: true },
        { label: "B. Alkena", value: "B" },
        { label: "C. Alkuna", value: "C" },
        { label: "D. Aren", value: "D" },
      ],
      explanation: "Alkana hanya memiliki ikatan tunggal antar atom karbon.",
    },
    {
      question: "Minyak bumi terutama terdiri dari senyawa apa?",
      options: [
        { label: "A. Karbohidrat", value: "A" },
        { label: "B. Asam amino", value: "B" },
        { label: "C. Hidrokarbon", value: "C", isCorrect: true },
        { label: "D. Protein", value: "D" },
      ],
      explanation: "Minyak bumi sebagian besar terdiri dari hidrokarbon.",
    },
    {
      question: "Apa nama proses yang digunakan untuk memisahkan komponen minyak bumi?",
      options: [
        { label: "A. Fermentasi", value: "A" },
        { label: "B. Hidrolisis", value: "B" },
        { label: "C. Destilasi Fraksional", value: "C", isCorrect: true },
        { label: "D. Polimerasi", value: "D" },
      ],
      explanation: "Destilasi fraksional memisahkan komponen minyak bumi berdasarkan titik didih.",
    },
    {
      question: "Apa produk utama dari pembakaran sempurna hidrokarbon?",
      options: [
        { label: "A. Karbon dioksida dan air", value: "A", isCorrect: true },
        { label: "B. Karbon monoksida dan air", value: "B" },
        { label: "C. Hidrogen dan karbon", value: "C" },
        { label: "D. Metana dan oksigen", value: "D" },
      ],
      explanation: "Pembakaran sempurna menghasilkan karbon dioksida dan air.",
    },
    {
      question: "Apa jenis reaksi yang terjadi pada pembakaran hidrokarbon?",
      options: [
        { label: "A. Reduksi", value: "A" },
        { label: "B. Eksoterm", value: "B", isCorrect: true },
        { label: "C. Endoterm", value: "C" },
        { label: "D. Netralisasi", value: "D" },
      ],
      explanation: "Reaksi pembakaran hidrokarbon bersifat eksoterm karena menghasilkan energi panas.",
    },
    {
      question: "Apa nama senyawa hidrokarbon yang memiliki cincin benzena sebagai bagian dari strukturnya?",
      options: [
        { label: "A. Alkana", value: "A" },
        { label: "B. Alkena", value: "B" },
        { label: "C. Aren", value: "C", isCorrect: true },
        { label: "D. Alkohol", value: "D" },
      ],
      explanation: "Aren adalah hidrokarbon aromatik yang memiliki cincin benzena.",
    },
    // Soal tambahan 1
    {
      question: "Apa nama senyawa hidrokarbon yang mengandung ikatan rangkap dua?",
      options: [
        { label: "A. Alkana", value: "A" },
        { label: "B. Alkena", value: "B", isCorrect: true },
        { label: "C. Alkuna", value: "C" },
        { label: "D. Aren", value: "D" },
      ],
      explanation: "Alkena adalah senyawa hidrokarbon yang memiliki ikatan rangkap dua antara atom karbon.",
    },
    // Soal tambahan 2
    {
      question: "Apa yang dimaksud dengan fraksi minyak bumi?",
      options: [
        { label: "A. Bagian minyak bumi yang dipisahkan berdasarkan titik didih", value: "A", isCorrect: true },
        { label: "B. Gas yang dihasilkan dalam pembakaran minyak bumi", value: "B" },
        { label: "C. Senyawa kimia yang ditemukan dalam minyak bumi", value: "C" },
        { label: "D. Proses pengolahan minyak bumi", value: "D" },
      ],
      explanation: "Fraksi minyak bumi adalah komponen-komponen yang dipisahkan berdasarkan perbedaan titik didih melalui proses distilasi.",
    },
    // Soal tambahan 3
    {
      question: "Hidrokarbon jenis apakah yang memiliki ikatan rangkap tiga antar atom karbon?",
      options: [
        { label: "A. Alkana", value: "A" },
        { label: "B. Alkena", value: "B" },
        { label: "C. Alkuna", value: "C", isCorrect: true },
        { label: "D. Aren", value: "D" },
      ],
      explanation: "Alkuna adalah senyawa hidrokarbon yang memiliki ikatan rangkap tiga antara atom karbon.",
    },
    // Soal tambahan 4
    {
      question: "Bagaimana cara pengolahan minyak bumi menjadi produk yang dapat digunakan?",
      options: [
        { label: "A. Distilasi Fraksional", value: "A", isCorrect: true },
        { label: "B. Polimerasi", value: "B" },
        { label: "C. Pembakaran", value: "C" },
        { label: "D. Fermentasi", value: "D" },
      ],
      explanation: "Pengolahan minyak bumi dilakukan dengan distilasi fraksional untuk memisahkan komponen-komponennya.",
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
          <h1 className="latihan-soal1-title">Mode Bionik</h1>
          <h2>Quiz Selesai!</h2>
          <p>Skor Anda: {score}/{questions.length}</p>
          <button className="finish-button" onClick={handleRestartQuiz}>
            Ulangi Latihan
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="latihan-soal1-container">
      <div className="latihan-soal1-question-box">
        <h1 className="latihan-soal1-title">Mode Bionik</h1>
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
            className="nav-button prev"
            onClick={goToPreviousQuestion}
            disabled={currentQuestionIndex === 0}
          >
            ← Soal Sebelumnya
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
              ? "Selesai"
              : "Soal Selanjutnya →"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LatihanSoal1;