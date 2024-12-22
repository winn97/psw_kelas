import React, { useState } from "react";
import "../css/QuestionPage.css";

const LatihanSoal5 = () => {
  const [answers, setAnswers] = useState([]);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const questions = [
    {
      question: "Apa yang dimaksud dengan hidrolisis garam?",
      options: [
        { label: "A. Reaksi garam dengan basa", value: "A" },
        { label: "B. Reaksi garam dengan air", value: "B", isCorrect: true },
        { label: "C. Reaksi garam dengan asam", value: "C" },
        { label: "D. Reaksi garam dengan logam", value: "D" },
      ],
      explanation: "Hidrolisis garam adalah reaksi antara garam dengan air yang menghasilkan ion H+ atau OH-.",
    },
    {
      question: "Garam dari asam lemah dan basa kuat akan menghasilkan larutan dengan sifat apa?",
      options: [
        { label: "A. Asam", value: "A" },
        { label: "B. Basa", value: "B", isCorrect: true },
        { label: "C. Netral", value: "C" },
        { label: "D. Tidak bereaksi", value: "D" },
      ],
      explanation: "Garam dari asam lemah dan basa kuat menghasilkan larutan yang bersifat basa karena ion OH- lebih dominan.",
    },
    {
      question: "Apa yang terjadi jika larutan NaCl dilarutkan dalam air?",
      options: [
        { label: "A. Bersifat asam", value: "A" },
        { label: "B. Bersifat basa", value: "B" },
        { label: "C. Bersifat netral", value: "C", isCorrect: true },
        { label: "D. Tidak larut", value: "D" },
      ],
      explanation: "NaCl merupakan garam dari asam kuat (HCl) dan basa kuat (NaOH), sehingga larutannya bersifat netral.",
    },
    {
      question: "Apa sifat larutan yang dihasilkan oleh NH4Cl?",
      options: [
        { label: "A. Asam", value: "A", isCorrect: true },
        { label: "B. Basa", value: "B" },
        { label: "C. Netral", value: "C" },
        { label: "D. Tidak bereaksi", value: "D" },
      ],
      explanation: "NH4Cl merupakan garam dari asam lemah (NH4+) dan basa kuat (Cl-), sehingga larutannya bersifat asam.",
    },
    {
      question: "Manakah di bawah ini yang merupakan contoh garam netral?",
      options: [
        { label: "A. CH3COONa", value: "A" },
        { label: "B. NaCl", value: "B", isCorrect: true },
        { label: "C. NH4Cl", value: "C" },
        { label: "D. KCN", value: "D" },
      ],
      explanation: "NaCl adalah garam dari asam kuat (HCl) dan basa kuat (NaOH), sehingga larutannya netral.",
    },
    // Added questions to make it 10 questions
    {
      question: "Garam dari asam kuat dan basa kuat akan menghasilkan larutan dengan pH yang...",
      options: [
        { label: "A. Asam", value: "A" },
        { label: "B. Basa", value: "B" },
        { label: "C. Netral", value: "C", isCorrect: true },
        { label: "D. Dapat berubah-ubah", value: "D" },
      ],
      explanation: "Garam dari asam kuat dan basa kuat akan menghasilkan larutan netral dengan pH sekitar 7.",
    },
    {
      question: "Apa yang dimaksud dengan pH larutan?",
      options: [
        { label: "A. Kadar ion H+ dalam larutan", value: "A", isCorrect: true },
        { label: "B. Kadar ion OH- dalam larutan", value: "B" },
        { label: "C. Suhu larutan", value: "C" },
        { label: "D. Kadar garam dalam larutan", value: "D" },
      ],
      explanation: "pH larutan mengukur konsentrasi ion H+ dalam larutan, yang menentukan tingkat keasaman atau kebasaan.",
    },
    {
      question: "Apa yang terjadi pada larutan asam saat diberi indikator lakmus biru?",
      options: [
        { label: "A. Lakmus biru berubah menjadi merah", value: "A", isCorrect: true },
        { label: "B. Lakmus biru tidak berubah", value: "B" },
        { label: "C. Lakmus biru berubah menjadi hijau", value: "C" },
        { label: "D. Lakmus biru menjadi putih", value: "D" },
      ],
      explanation: "Pada larutan asam, indikator lakmus biru akan berubah menjadi merah.",
    },
    {
      question: "Apa yang terjadi jika larutan HCl ditambahkan ke dalam NaOH?",
      options: [
        { label: "A. Larutan menjadi asam", value: "A" },
        { label: "B. Larutan menjadi basa", value: "B" },
        { label: "C. Terjadi reaksi netralisasi", value: "C", isCorrect: true },
        { label: "D. Tidak terjadi perubahan", value: "D" },
      ],
      explanation: "Larutan HCl (asam) yang ditambahkan ke NaOH (basa) akan menghasilkan air dan garam melalui reaksi netralisasi.",
    },
    {
      question: "Pada larutan NH3, sifat larutan cenderung...",
      options: [
        { label: "A. Asam", value: "A" },
        { label: "B. Netral", value: "B" },
        { label: "C. Basa", value: "C", isCorrect: true },
        { label: "D. Tidak dapat diprediksi", value: "D" },
      ],
      explanation: "Larutan amonia (NH3) bersifat basa karena NH3 bereaksi dengan air untuk menghasilkan ion OH-.",
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