import React, { useState } from "react";
import "../css/QuestionPage.css";

const LatihanSoal3 = () => {
  const [answers, setAnswers] = useState([]);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const questions = [
    {
      question: "Apa faktor yang dapat mempengaruhi laju reaksi?",
      options: [
        { label: "A. Konsentrasi, suhu, dan katalis", value: "A", isCorrect: true },
        { label: "B. Volume, tekanan, dan suhu", value: "B" },
        { label: "C. Waktu, suhu, dan warna", value: "C" },
        { label: "D. Berat molekul, tekanan, dan waktu", value: "D" },
      ],
      explanation: "Faktor utama yang mempengaruhi laju reaksi adalah konsentrasi, suhu, dan keberadaan katalis."
    },
    {
      question: "Bagaimana cara katalis mempercepat laju reaksi?",
      options: [
        { label: "A. Dengan meningkatkan suhu reaksi", value: "A" },
        { label: "B. Dengan menurunkan energi aktivasi reaksi", value: "B", isCorrect: true },
        { label: "C. Dengan meningkatkan konsentrasi reaktan", value: "C" },
        { label: "D. Dengan menambah energi ke dalam sistem", value: "D" },
      ],
      explanation: "Katalis mempercepat reaksi dengan menurunkan energi aktivasi, sehingga reaksi lebih mudah terjadi."
    },
    {
      question: "Apa yang terjadi pada laju reaksi jika suhu dinaikkan?",
      options: [
        { label: "A. Laju reaksi meningkat", value: "A", isCorrect: true },
        { label: "B. Laju reaksi menurun", value: "B" },
        { label: "C. Tidak ada perubahan", value: "C" },
        { label: "D. Reaksi berhenti", value: "D" },
      ],
      explanation: "Peningkatan suhu menyebabkan partikel bergerak lebih cepat, sehingga peluang tumbukan efektif meningkat."
    },
    {
      question: "Dalam grafik energi vs lintasan reaksi, apa peran puncak kurva?",
      options: [
        { label: "A. Energi potensial awal", value: "A" },
        { label: "B. Energi aktivasi", value: "B", isCorrect: true },
        { label: "C. Energi kinetik maksimum", value: "C" },
        { label: "D. Energi produk reaksi", value: "D" },
      ],
      explanation: "Puncak kurva menunjukkan energi aktivasi, yaitu energi minimum yang diperlukan agar reaksi berlangsung."
    },
    {
      question: "Apa pengaruh luas permukaan pada laju reaksi?",
      options: [
        { label: "A. Semakin kecil luas permukaan, semakin cepat reaksi", value: "A" },
        { label: "B. Semakin besar luas permukaan, semakin cepat reaksi", value: "B", isCorrect: true },
        { label: "C. Tidak ada pengaruh", value: "C" },
        { label: "D. Hanya memengaruhi reaksi endoterm", value: "D" },
      ],
      explanation: "Luas permukaan yang lebih besar meningkatkan peluang tumbukan antar partikel, sehingga mempercepat laju reaksi."
    },
    {
      question: "Apa pengaruh konsentrasi terhadap laju reaksi?",
      options: [
        { label: "A. Semakin tinggi konsentrasi, semakin cepat reaksi", value: "A", isCorrect: true },
        { label: "B. Semakin rendah konsentrasi, semakin cepat reaksi", value: "B" },
        { label: "C. Konsentrasi tidak mempengaruhi laju reaksi", value: "C" },
        { label: "D. Hanya mempengaruhi reaksi endoterm", value: "D" },
      ],
      explanation: "Semakin banyak partikel dalam volume tertentu, semakin banyak tumbukan efektif yang terjadi, sehingga laju reaksi meningkat."
    },
    {
      question: "Bagaimana pengaruh tekanan terhadap laju reaksi gas?",
      options: [
        { label: "A. Menurunkan laju reaksi", value: "A" },
        { label: "B. Meningkatkan laju reaksi", value: "B", isCorrect: true },
        { label: "C. Tidak mempengaruhi laju reaksi", value: "C" },
        { label: "D. Mengurangi jumlah produk", value: "D" },
      ],
      explanation: "Meningkatkan tekanan pada gas memperkecil volume dan meningkatkan frekuensi tumbukan antara partikel, mempercepat reaksi."
    },
    {
      question: "Apa yang dimaksud dengan reaksi orde satu?",
      options: [
        { label: "A. Laju reaksi berbanding lurus dengan konsentrasi reaktan", value: "A", isCorrect: true },
        { label: "B. Laju reaksi berbanding terbalik dengan konsentrasi reaktan", value: "B" },
        { label: "C. Laju reaksi tidak tergantung pada konsentrasi reaktan", value: "C" },
        { label: "D. Laju reaksi tidak berubah dengan suhu", value: "D" },
      ],
      explanation: "Pada reaksi orde satu, laju reaksi berbanding lurus dengan konsentrasi reaktan yang ada."
    },
    {
      question: "Apa yang terjadi pada laju reaksi jika konsentrasi reaktan sangat tinggi?",
      options: [
        { label: "A. Laju reaksi sangat cepat", value: "A", isCorrect: true },
        { label: "B. Laju reaksi sangat lambat", value: "B" },
        { label: "C. Tidak ada perubahan", value: "C" },
        { label: "D. Reaksi terhambat", value: "D" },
      ],
      explanation: "Pada konsentrasi yang sangat tinggi, lebih banyak partikel yang bertumbukan, yang mengarah pada peningkatan laju reaksi."
    },
    {
      question: "Apa yang dimaksud dengan reaksi yang mencapai keadaan setimbang?",
      options: [
        { label: "A. Laju reaksi maju dan mundur sama", value: "A", isCorrect: true },
        { label: "B. Laju reaksi tidak berubah", value: "B" },
        { label: "C. Reaksi berhenti", value: "C" },
        { label: "D. Reaksi berlangsung tanpa pengaruh luar", value: "D" },
      ],
      explanation: "Keadaan setimbang terjadi ketika laju reaksi maju dan mundur menjadi sama, sehingga konsentrasi reaktan dan produk tetap konstan."
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
          <p>Skor Anda: {score}/{questions.length}</p>
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
                answers[currentQuestionIndex] === option.value ? "latihan-soal1-selected-answer" : ""
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
            {currentQuestionIndex === questions.length - 1 ? "Selesai" : "Soal Selanjutnya →"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LatihanSoal3;