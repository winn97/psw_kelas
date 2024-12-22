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
        question: "Apa yang dimaksud dengan larutan penyangga?",
        options: [
            { label: "A. Larutan yang pH-nya berubah drastis saat ditambah air", value: "A" },
            { label: "B. Larutan yang dapat mempertahankan pH meskipun ditambahkan asam atau basa", value: "B", isCorrect: true },
            { label: "C. Larutan yang dapat mempercepat reaksi kimia", value: "C" },
            { label: "D. Larutan yang hanya mengandung air dan garam", value: "D" },
        ],
        explanation: "Larutan penyangga dapat mempertahankan pH-nya meskipun ditambahkan sedikit asam atau basa."
    },
    {
        question: "Komponen utama larutan penyangga adalah?",
        options: [
            { label: "A. Air dan garam", value: "A" },
            { label: "B. Asam lemah dan basa kuat", value: "B" },
            { label: "C. Asam lemah dan garamnya, atau basa lemah dan garamnya", value: "C", isCorrect: true },
            { label: "D. Asam kuat dan basa kuat", value: "D" },
        ],
        explanation: "Larutan penyangga terdiri dari asam lemah dan garamnya, atau basa lemah dan garamnya."
    },
    {
        question: "pH larutan penyangga asam dapat dihitung menggunakan rumus?",
        options: [
            { label: "A. pH = -log[H+]", value: "A" },
            { label: "B. pH = pKa + log([garam]/[asam])", value: "B", isCorrect: true },
            { label: "C. pH = pKa - log([garam]/[asam])", value: "C" },
            { label: "D. pH = -log[OH-]", value: "D" },
        ],
        explanation: "pH larutan penyangga asam dihitung dengan rumus pH = pKa + log([garam]/[asam])."
    },
    {
        question: "Larutan yang termasuk larutan penyangga basa adalah?",
        options: [
            { label: "A. HCl dan NaCl", value: "A" },
            { label: "B. CH3COOH dan CH3COONa", value: "B" },
            { label: "C. NH3 dan NH4Cl", value: "C", isCorrect: true },
            { label: "D. HNO3 dan NaNO3", value: "D" },
        ],
        explanation: "NH3 dan NH4Cl merupakan larutan penyangga basa karena terdiri dari basa lemah dan garamnya."
    },
    {
        question: "Apa fungsi larutan penyangga dalam tubuh manusia?",
        options: [
            { label: "A. Meningkatkan kecepatan reaksi metabolisme", value: "A" },
            { label: "B. Menjaga kestabilan pH darah", value: "B", isCorrect: true },
            { label: "C. Menguraikan zat-zat makanan", value: "C" },
            { label: "D. Menghancurkan racun dalam tubuh", value: "D" },
        ],
        explanation: "Larutan penyangga menjaga kestabilan pH darah agar tetap sekitar 7,4."
    },
    // Additional questions (6-10)
    {
        question: "Apa yang dimaksud dengan hidrolisis garam?",
        options: [
            { label: "A. Reaksi garam dengan basa", value: "A" },
            { label: "B. Reaksi garam dengan air", value: "B", isCorrect: true },
            { label: "C. Reaksi garam dengan asam", value: "C" },
            { label: "D. Reaksi garam dengan logam", value: "D" },
        ],
        explanation: "Hidrolisis garam adalah reaksi antara garam dengan air yang menghasilkan ion H+ atau OH-."
    },
    {
        question: "Garam dari asam lemah dan basa kuat akan menghasilkan larutan dengan sifat apa?",
        options: [
            { label: "A. Asam", value: "A" },
            { label: "B. Basa", value: "B", isCorrect: true },
            { label: "C. Netral", value: "C" },
            { label: "D. Tidak bereaksi", value: "D" },
        ],
        explanation: "Garam dari asam lemah dan basa kuat menghasilkan larutan yang bersifat basa karena ion OH- lebih dominan."
    },
    {
        question: "Apa yang terjadi jika larutan NaCl dilarutkan dalam air?",
        options: [
            { label: "A. Bersifat asam", value: "A" },
            { label: "B. Bersifat basa", value: "B" },
            { label: "C. Bersifat netral", value: "C", isCorrect: true },
            { label: "D. Tidak larut", value: "D" },
        ],
        explanation: "NaCl merupakan garam dari asam kuat (HCl) dan basa kuat (NaOH), sehingga larutannya bersifat netral."
    },
    {
        question: "Apa sifat larutan yang dihasilkan oleh NH4Cl?",
        options: [
            { label: "A. Asam", value: "A", isCorrect: true },
            { label: "B. Basa", value: "B" },
            { label: "C. Netral", value: "C" },
            { label: "D. Tidak bereaksi", value: "D" },
        ],
        explanation: "NH4Cl merupakan garam dari asam lemah (NH4+) dan basa kuat (Cl-), sehingga larutannya bersifat asam."
    },
    {
        question: "Manakah di bawah ini yang merupakan contoh garam netral?",
        options: [
            { label: "A. CH3COONa", value: "A" },
            { label: "B. NaCl", value: "B", isCorrect: true },
            { label: "C. NH4Cl", value: "C" },
            { label: "D. KCN", value: "D" },
        ],
        explanation: "NaCl adalah garam dari asam kuat (HCl) dan basa kuat (NaOH), sehingga larutannya netral."
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