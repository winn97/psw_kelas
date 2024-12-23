import React, { useState } from "react";
import "../css/QuestionPage.css";

const LatihanSoal = () => {
  const [answers, setAnswers] = useState([]);
  const [setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const questions = [
    {
      question: "Apa yang dimaksud dengan koloid?",
      options: [
        { label: "A. Campuran homogen dari dua zat", value: "A" },
        { label: "B. Campuran heterogen dengan partikel yang berukuran antara larutan dan suspensi", value: "B", isCorrect: true },
        { label: "C. Campuran heterogen dengan partikel besar yang mudah terlihat", value: "C" },
        { label: "D. Campuran dua zat yang tidak dapat bercampur", value: "D" },
      ],
      explanation: "Koloid adalah campuran heterogen dengan partikel berukuran antara larutan dan suspensi, biasanya 1-100 nm."
    },
    {
      question: "Manakah dari berikut ini yang termasuk koloid?",
      options: [
        { label: "A. Air garam", value: "A" },
        { label: "B. Udara", value: "B" },
        { label: "C. Susu", value: "C", isCorrect: true },
        { label: "D. Minyak mentah", value: "D" },
      ],
      explanation: "Susu adalah contoh koloid jenis emulsi karena terdiri dari lemak yang terdispersi dalam air."
    },
    {
      question: "Fenomena apa yang menunjukkan bahwa koloid dapat menyebarkan cahaya?",
      options: [
        { label: "A. Efek Doppler", value: "A" },
        { label: "B. Efek Tyndall", value: "B", isCorrect: true },
        { label: "C. Efek Compton", value: "C" },
        { label: "D. Efek Fotoelektrik", value: "D" },
      ],
      explanation: "Efek Tyndall adalah fenomena di mana koloid menyebarkan cahaya yang melewatinya, membuat berkas cahaya terlihat."
    },
    {
      question: "Apa metode utama untuk memisahkan koloid?",
      options: [
        { label: "A. Filtrasi", value: "A" },
        { label: "B. Destilasi", value: "B" },
        { label: "C. Dialisis", value: "C", isCorrect: true },
        { label: "D. Sublimasi", value: "D" },
      ],
      explanation: "Dialisis adalah metode untuk memisahkan partikel koloid dari ion-ion atau molekul kecil melalui membran semipermeabel."
    },
    {
      question: "Apa fungsi zat pengemulsi dalam koloid?",
      options: [
        { label: "A. Mempercepat reaksi kimia", value: "A" },
        { label: "B. Membantu mencampurkan dua zat yang tidak bercampur", value: "B", isCorrect: true },
        { label: "C. Mengendapkan partikel dalam koloid", value: "C" },
        { label: "D. Menurunkan tekanan uap campuran", value: "D" },
      ],
      explanation: "Zat pengemulsi digunakan untuk membantu mencampurkan dua zat yang tidak bercampur, seperti minyak dan air."
    },
    {
      question: "Apa yang dimaksud dengan aerosols dalam konteks koloid?",
      options: [
        { label: "A. Koloid gas dalam gas", value: "A", isCorrect: true },
        { label: "B. Koloid cair dalam gas", value: "B" },
        { label: "C. Koloid padat dalam gas", value: "C" },
        { label: "D. Koloid gas dalam padat", value: "D" },
      ],
      explanation: "Aerosol adalah koloid yang terdiri dari partikel padat atau cair yang terdispersi dalam gas, seperti kabut atau asap."
    },
    {
      question: "Manakah dari berikut ini yang merupakan contoh koloid jenis sol?",
      options: [
        { label: "A. Gelatin", value: "A" },
        { label: "B. Susu", value: "B" },
        { label: "C. Cat", value: "C", isCorrect: true },
        { label: "D. Mayones", value: "D" },
      ],
      explanation: "Cat adalah contoh koloid jenis sol, yang terdiri dari partikel padat yang terdispersi dalam cairan."
    },
    {
      question: "Apakah yang dimaksud dengan emulsi?",
      options: [
        { label: "A. Koloid gas dalam cairan", value: "A" },
        { label: "B. Koloid cair dalam cairan", value: "B", isCorrect: true },
        { label: "C. Koloid cair dalam padat", value: "C" },
        { label: "D. Koloid padat dalam cairan", value: "D" },
      ],
      explanation: "Emulsi adalah koloid yang terdiri dari dua cairan yang tidak dapat bercampur, seperti minyak dalam air."
    },
    {
      question: "Koloid dapat menyebarkan cahaya karena",
      options: [
        { label: "A. Ukuran partikel yang sangat kecil", value: "A" },
        { label: "B. Ukuran partikel yang besar", value: "B", isCorrect: true },
        { label: "C. Partikel tidak dapat bergerak", value: "C" },
        { label: "D. Partikel sangat besar dan berat", value: "D" },
      ],
      explanation: "Partikel koloid yang berukuran besar dapat menyebarkan cahaya yang melewatinya, yang disebut Efek Tyndall."
    },
    {
      question: "Bagaimana koloid berbeda dengan larutan?",
      options: [
        { label: "A. Koloid adalah campuran homogen, sedangkan larutan adalah campuran heterogen", value: "A" },
        { label: "B. Koloid memiliki partikel yang lebih besar dan dapat menyebarkan cahaya", value: "B", isCorrect: true },
        { label: "C. Koloid tidak dapat disaring, sedangkan larutan dapat disaring", value: "C" },
        { label: "D. Koloid memiliki partikel yang sangat kecil", value: "D" },
      ],
      explanation: "Koloid memiliki partikel yang lebih besar daripada larutan dan dapat menyebarkan cahaya, sedangkan larutan adalah campuran homogen dengan partikel kecil."
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