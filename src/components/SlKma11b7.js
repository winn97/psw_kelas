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
    {
      question: "Larutan penyangga dapat mengatur pH pada rentang pH?",
      options: [
        { label: "A. 0-7", value: "A" },
        { label: "B. 7-14", value: "B" },
        { label: "C. 4-7", value: "C" },
        { label: "D. 3-12", value: "D", isCorrect: true },
      ],
      explanation: "Larutan penyangga dapat mengatur pH pada rentang 3-12 tergantung pada komponen asam-basa yang digunakan."
    },
    {
      question: "Apa yang terjadi jika larutan penyangga ditambahkan dengan asam kuat?",
      options: [
        { label: "A. pH tidak berubah", value: "A" },
        { label: "B. pH akan turun sedikit", value: "B", isCorrect: true },
        { label: "C. pH akan meningkat", value: "C" },
        { label: "D. pH akan berubah drastis", value: "D" },
      ],
      explanation: "Larutan penyangga akan sedikit menurunkan pH ketika ditambahkan asam kuat, tetapi pH tetap relatif stabil."
    },
    {
      question: "Larutan penyangga dapat digunakan untuk?",
      options: [
        { label: "A. Mempercepat reaksi kimia", value: "A" },
        { label: "B. Menjaga kestabilan pH dalam reaksi biologi", value: "B", isCorrect: true },
        { label: "C. Mengurangi suhu reaksi", value: "C" },
        { label: "D. Meningkatkan konsentrasi ion H+", value: "D" },
      ],
      explanation: "Larutan penyangga membantu menjaga kestabilan pH dalam reaksi biologi, seperti proses metabolisme."
    },
    {
      question: "Larutan penyangga dapat dipersiapkan dengan mencampurkan?",
      options: [
        { label: "A. Asam kuat dengan basa kuat", value: "A" },
        { label: "B. Asam lemah dengan basa lemah", value: "B" },
        { label: "C. Asam lemah dengan garamnya", value: "C", isCorrect: true },
        { label: "D. Basa kuat dengan garam", value: "D" },
      ],
      explanation: "Larutan penyangga dapat dipersiapkan dengan mencampurkan asam lemah dengan garamnya atau basa lemah dengan garamnya."
    },
    {
      question: "pH larutan penyangga dapat berubah jika?",
      options: [
        { label: "A. Ditambahkan banyak asam atau basa", value: "A", isCorrect: true },
        { label: "B. Didinginkan", value: "B" },
        { label: "C. Ditambah air", value: "C" },
        { label: "D. Ditingkatkan konsentrasi garam", value: "D" },
      ],
      explanation: "pH larutan penyangga akan berubah jika ditambahkan banyak asam atau basa, melebihi kapasitas penyangga."
    }
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