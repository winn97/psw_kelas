import React, { useState } from "react";
import "../css/QuestionPage.css";

const LatihanSoal = () => {
  const [answers, setAnswers] = useState([]);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const questions = [
    {
      question: "Apa yang dimaksud dengan kesetimbangan kimia?",
      options: [
        { label: "A. Keadaan di mana semua reaktan telah habis bereaksi", value: "A" },
        { label: "B. Keadaan di mana kecepatan reaksi maju sama dengan kecepatan reaksi balik", value: "B", isCorrect: true },
        { label: "C. Keadaan di mana reaksi berhenti sepenuhnya", value: "C" },
        { label: "D. Keadaan di mana hanya reaktan yang tersisa", value: "D" },
      ],
      explanation: "Kesetimbangan kimia adalah keadaan di mana kecepatan reaksi maju sama dengan kecepatan reaksi balik, sehingga konsentrasi reaktan dan produk tetap konstan."
    },
    {
      question: "Apa pengaruh kenaikan tekanan pada reaksi kesetimbangan gas?",
      options: [
        { label: "A. Reaksi bergeser ke arah jumlah mol gas yang lebih besar", value: "A" },
        { label: "B. Reaksi bergeser ke arah jumlah mol gas yang lebih kecil", value: "B", isCorrect: true },
        { label: "C. Tidak ada pengaruh", value: "C" },
        { label: "D. Bergantung pada suhu reaksi", value: "D" },
      ],
      explanation: "Kenaikan tekanan menyebabkan reaksi bergeser ke arah yang memiliki jumlah mol gas lebih kecil untuk mengurangi tekanan."
    },
    {
      question: "Apa yang dimaksud dengan prinsip Le Chatelier?",
      options: [
        { label: "A. Sistem dalam kesetimbangan akan tetap diam jika diberikan gangguan", value: "A" },
        { label: "B. Sistem dalam kesetimbangan akan merespon gangguan dengan cara meminimalkan gangguan tersebut", value: "B", isCorrect: true },
        { label: "C. Sistem dalam kesetimbangan akan meningkatkan gangguan", value: "C" },
        { label: "D. Sistem akan berhenti bereaksi jika ada gangguan", value: "D" },
      ],
      explanation: "Prinsip Le Chatelier menyatakan bahwa jika kesetimbangan terganggu, sistem akan menyesuaikan diri untuk meminimalkan gangguan tersebut."
    },
    {
      question: "Bagaimana pengaruh penambahan reaktan pada kesetimbangan?",
      options: [
        { label: "A. Reaksi bergeser ke arah pembentukan produk", value: "A", isCorrect: true },
        { label: "B. Reaksi bergeser ke arah pembentukan reaktan", value: "B" },
        { label: "C. Tidak ada perubahan", value: "C" },
        { label: "D. Reaksi berhenti sepenuhnya", value: "D" },
      ],
      explanation: "Penambahan reaktan menyebabkan reaksi bergeser ke arah produk untuk mengurangi konsentrasi reaktan tambahan."
    },
    {
      question: "Apa yang terjadi jika suhu dinaikkan pada reaksi eksoterm?",
      options: [
        { label: "A. Reaksi bergeser ke arah pembentukan produk", value: "A" },
        { label: "B. Reaksi bergeser ke arah pembentukan reaktan", value: "B", isCorrect: true },
        { label: "C. Tidak ada perubahan", value: "C" },
        { label: "D. Reaksi berhenti sepenuhnya", value: "D" },
      ],
      explanation: "Pada reaksi eksoterm, kenaikan suhu menyebabkan reaksi bergeser ke arah reaktan untuk menyerap sebagian energi panas yang diberikan."
    },
    {
      question: "Apa yang dimaksud dengan konstanta kesetimbangan?",
      options: [
        { label: "A. Rasio antara konsentrasi reaktan dan produk pada kesetimbangan", value: "A", isCorrect: true },
        { label: "B. Jumlah total mol gas pada kesetimbangan", value: "B" },
        { label: "C. Kecepatan reaksi maju pada kesetimbangan", value: "C" },
        { label: "D. Kecepatan reaksi balik pada kesetimbangan", value: "D" },
      ],
      explanation: "Konstanta kesetimbangan adalah rasio antara konsentrasi produk dan reaktan pada kesetimbangan, yang tergantung pada suhu dan sifat reaksi."
    },
    {
      question: "Apa yang terjadi pada kesetimbangan jika produk ditambahkan?",
      options: [
        { label: "A. Reaksi bergeser ke arah pembentukan produk", value: "A" },
        { label: "B. Reaksi bergeser ke arah pembentukan reaktan", value: "B", isCorrect: true },
        { label: "C. Tidak ada perubahan", value: "C" },
        { label: "D. Reaksi berhenti sepenuhnya", value: "D" },
      ],
      explanation: "Penambahan produk menyebabkan reaksi bergeser ke arah reaktan untuk mengurangi konsentrasi produk tambahan."
    },
    {
      question: "Apa pengaruh penurunan suhu pada reaksi endoterm?",
      options: [
        { label: "A. Reaksi bergeser ke arah pembentukan produk", value: "A", isCorrect: true },
        { label: "B. Reaksi bergeser ke arah pembentukan reaktan", value: "B" },
        { label: "C. Tidak ada perubahan", value: "C" },
        { label: "D. Reaksi berhenti sepenuhnya", value: "D" },
      ],
      explanation: "Pada reaksi endoterm, penurunan suhu menyebabkan reaksi bergeser ke arah pembentukan produk untuk memperoleh panas yang dibutuhkan."
    },
    {
      question: "Bagaimana cara mengubah posisi kesetimbangan dalam reaksi kimia?",
      options: [
        { label: "A. Dengan mengubah konsentrasi, tekanan, atau suhu", value: "A", isCorrect: true },
        { label: "B. Dengan menambah jumlah produk", value: "B" },
        { label: "C. Dengan mengubah volume wadah", value: "C" },
        { label: "D. Dengan menambah jumlah reaktan saja", value: "D" },
      ],
      explanation: "Posisi kesetimbangan dapat dipengaruhi dengan mengubah konsentrasi reaktan atau produk, tekanan, atau suhu dalam sistem."
    },
    {
      question: "Apa yang dimaksud dengan reaksi yang dapat dipulihkan?",
      options: [
        { label: "A. Reaksi yang berhenti setelah beberapa waktu", value: "A" },
        { label: "B. Reaksi yang hanya berjalan ke satu arah", value: "B" },
        { label: "C. Reaksi yang dapat berlangsung maju dan balik", value: "C", isCorrect: true },
        { label: "D. Reaksi yang tidak dapat dipengaruhi oleh suhu", value: "D" },
      ],
      explanation: "Reaksi yang dapat dipulihkan adalah reaksi yang dapat berjalan ke arah maju maupun balik tergantung kondisi."
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
          <h1 className="latihan-soal1-title">Mode Bionik</h1>
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
        <h1 className="latihan-soal1-title">Mode Bionik</h1>
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
                : `Jawaban Benar: ${currentQuestion.options.find((opt) => opt.isCorrect)?.value}`}
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

export default LatihanSoal;