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
      question: "Apa yang dimaksud dengan kelarutan (solubility)?",
      options: [
        { label: "A. Jumlah maksimum zat yang dapat larut dalam pelarut pada kondisi tertentu", value: "A", isCorrect: true },
        { label: "B. Jumlah zat yang tidak larut dalam pelarut", value: "B" },
        { label: "C. Kecepatan zat larut dalam air", value: "C" },
        { label: "D. Kemampuan zat untuk bereaksi dengan pelarut", value: "D" },
      ],
      explanation: "Kelarutan adalah jumlah maksimum zat yang dapat larut dalam pelarut tertentu pada suhu dan tekanan tertentu."
    },
    {
      question: "Apa yang dimaksud dengan hasil kali kelarutan (Ksp)?",
      options: [
        { label: "A. Hasil kali konsentrasi ion-ion dalam larutan jenuh, masing-masing dipangkatkan dengan koefisiennya", value: "A", isCorrect: true },
        { label: "B. Hasil kali konsentrasi ion-ion dalam larutan tak jenuh", value: "B" },
        { label: "C. Hasil kali massa zat yang larut dan tidak larut", value: "C" },
        { label: "D. Hasil kali ion-ion dalam larutan yang tidak larut", value: "D" },
      ],
      explanation: "Ksp adalah hasil kali konsentrasi ion-ion dalam larutan jenuh, dipangkatkan dengan koefisien reaksi ionisasi."
    },
    {
      question: "Jika Ksp suatu senyawa lebih besar, maka kelarutannya akan?",
      options: [
        { label: "A. Menjadi lebih kecil", value: "A" },
        { label: "B. Tidak berubah", value: "B" },
        { label: "C. Menjadi lebih besar", value: "C", isCorrect: true },
        { label: "D. Tidak ada hubungan dengan kelarutan", value: "D" },
      ],
      explanation: "Semakin besar nilai Ksp, semakin besar kelarutan senyawa tersebut."
    },
    {
      question: "Apa yang terjadi jika ion-ion sejenis ditambahkan ke dalam larutan jenuh?",
      options: [
        { label: "A. Kelarutan bertambah", value: "A" },
        { label: "B. Kelarutan berkurang", value: "B", isCorrect: true },
        { label: "C. Kelarutan tetap sama", value: "C" },
        { label: "D. Konsentrasi ion-ion lain bertambah", value: "D" },
      ],
      explanation: "Penambahan ion sejenis menyebabkan kelarutan berkurang, dikenal sebagai efek ion sejenis."
    },
    {
      question: "Bagaimana pengaruh pH terhadap kelarutan senyawa yang mengandung ion basa lemah?",
      options: [
        { label: "A. Kelarutan tidak terpengaruh oleh pH", value: "A" },
        { label: "B. Kelarutan bertambah pada pH tinggi", value: "B" },
        { label: "C. Kelarutan bertambah pada pH rendah", value: "C", isCorrect: true },
        { label: "D. Kelarutan berkurang pada pH rendah", value: "D" },
      ],
      explanation: "Kelarutan senyawa dengan ion basa lemah bertambah pada pH rendah karena ion H+ bereaksi dengan ion basa lemah, mengurangi konsentrasi ion dalam larutan."
    },
    {
      question: "Apa yang dimaksud dengan efek ion sejenis?",
      options: [
        { label: "A. Penurunan kelarutan senyawa dalam larutan yang mengandung ion sejenis", value: "A", isCorrect: true },
        { label: "B. Peningkatan kelarutan senyawa dalam larutan yang mengandung ion sejenis", value: "B" },
        { label: "C. Penambahan ion yang mempercepat reaksi dalam larutan", value: "C" },
        { label: "D. Peningkatan ion dalam larutan", value: "D" },
      ],
      explanation: "Efek ion sejenis terjadi ketika penambahan ion sejenis dalam larutan menyebabkan penurunan kelarutan senyawa tersebut."
    },
    {
      question: "Bagaimana pengaruh suhu terhadap kelarutan senyawa padat dalam cairan?",
      options: [
        { label: "A. Kelarutan senyawa padat dalam cairan meningkat dengan suhu", value: "A", isCorrect: true },
        { label: "B. Kelarutan senyawa padat dalam cairan menurun dengan suhu", value: "B" },
        { label: "C. Suhu tidak mempengaruhi kelarutan senyawa padat", value: "C" },
        { label: "D. Hanya senyawa yang larut dengan cepat yang terpengaruh suhu", value: "D" },
      ],
      explanation: "Secara umum, kelarutan senyawa padat dalam cairan meningkat seiring dengan meningkatnya suhu."
    },
    {
      question: "Bagaimana Ksp dapat digunakan untuk menghitung kelarutan senyawa?",
      options: [
        { label: "A. Ksp digunakan untuk menghitung konsentrasi senyawa yang larut", value: "A", isCorrect: true },
        { label: "B. Ksp digunakan untuk menghitung konsentrasi senyawa yang tidak larut", value: "B" },
        { label: "C. Ksp digunakan untuk menghitung laju reaksi", value: "C" },
        { label: "D. Ksp digunakan untuk menghitung suhu reaksi", value: "D" },
      ],
      explanation: "Ksp dapat digunakan untuk menghitung kelarutan senyawa dengan menggunakan rumus kelarutan (S) yang diperoleh dari Ksp."
    },
    {
      question: "Apa yang dimaksud dengan larutan jenuh?",
      options: [
        { label: "A. Larutan yang sudah tidak dapat lagi melarutkan zat tambahan", value: "A", isCorrect: true },
        { label: "B. Larutan yang mengandung pelarut lebih banyak", value: "B" },
        { label: "C. Larutan yang hanya mengandung satu zat terlarut", value: "C" },
        { label: "D. Larutan yang sudah tidak mengandung zat terlarut", value: "D" },
      ],
      explanation: "Larutan jenuh adalah larutan yang sudah tidak dapat lagi melarutkan zat tambahan karena telah mencapai kapasitas kelarutannya."
    },
    // Soal tambahan (ke-9 dan ke-10)
    {
      question: "Apa yang dimaksud dengan kelarutan maksimum?",
      options: [
        { label: "A. Jumlah zat yang larut dalam pelarut pada suhu tertentu", value: "A", isCorrect: true },
        { label: "B. Jumlah pelarut yang dapat mengalir dalam sistem", value: "B" },
        { label: "C. Kadar air dalam pelarut", value: "C" },
        { label: "D. Volume pelarut yang digunakan", value: "D" },
      ],
      explanation: "Kelarutan maksimum adalah jumlah zat yang dapat larut dalam pelarut pada suhu tertentu dan pada tekanan tetap."
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