import React, { useState } from "react";
import "../css/QuestionPage.css";

const LatihanSoal2 = () => {
  const [answers, setAnswers] = useState([]);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const questions = [
    {
        question: "Apa yang dimaksud dengan hukum Hess dalam termokimia?",
        options: [
           {label : "A. Energi dalam reaksi kimia tidak dapat diciptakan atau dimusnahkan.", value: "A"},
           {label :  "B. Perubahan entalpi total suatu reaksi hanya bergantung pada keadaan awal dan akhir.", value: "B", isCorrect: true},
           {label :  "C. Panas yang dilepaskan selalu sama dengan energi yang diserap.", value: "C"},
           {label :  "D. Reaksi eksoterm lebih stabil dibandingkan reaksi endoterm.", value: "D"},
        ],
        explanation: "Hukum Hess menyatakan bahwa perubahan entalpi total suatu reaksi hanya bergantung pada keadaan awal dan akhir, tidak tergantung pada jalannya reaksi."
    },
    {
        question: "Apa satuan yang biasanya digunakan untuk mengukur entalpi reaksi?",
        options: [
        {label :  "A. Joule (J)", value: "A"},
        {label :   "B. Kalori (cal)", value: "B"},
        {label :   "C. Kilojoule (kJ)", value: "C"},
        {label :   "D. Semua benar", value: "D", isCorrect: true},
        ],
        explanation: "Entalpi reaksi dapat dinyatakan dalam satuan joule (J), kalori (cal), atau kilojoule (kJ), tergantung konteks pengukurannya."
    },
    {
        question: "Jika suatu reaksi menghasilkan energi 100 kJ, maka reaksi tersebut bersifat?",
        options: [
          {label :   "A. Eksoterm", value: "A", isCorrect: true},
          {label :   "B. Endoterm", value: "B"},
          {label :   "C. Netral", value: "C"},
          {label :   "D. Spontan", value: "D"},
        ],
        explanation: "Reaksi eksoterm menghasilkan energi ke lingkungan, biasanya dalam bentuk panas."
    },
    {
        question: "Proses pembakaran bahan bakar merupakan reaksi yang?",
        options: [
          {label :  "A. Eksoterm", value: "A", isCorrect: true},
          {label :  "B. Endoterm", value: "B"},
          {label :   "C. Isoterm", value: "C"},
          {label :  "D. Adiabatik", value: "D"},
        ],
        explanation: "Pembakaran bahan bakar adalah reaksi eksoterm karena melepaskan panas ke lingkungan."
    },
    {
        question: "Dalam eksperimen termokimia, alat yang digunakan untuk mengukur perubahan panas adalah?",
        options: [
          {label :  "A. Termometer", value: "A"},
          {label :   "B. Barometer", value: "B"},
          {label :  "C. Kalorimeter", value: "C", isCorrect: true},
          {label :  "D. Spektrofotometer", value: "D"},
        ],
        explanation: "Kalorimeter digunakan untuk mengukur perubahan panas dalam eksperimen termokimia."
    },
    // Menambahkan lima soal baru
    {
      question: "Apa yang dimaksud dengan entalpi dalam termokimia?",
      options: [
        { label: "A. Energi yang dibutuhkan untuk mengubah suhu suatu zat", value: "A" },
        { label: "B. Energi yang dilepaskan atau diserap dalam reaksi kimia pada tekanan konstan", value: "B", isCorrect: true },
        { label: "C. Panas yang dilepaskan dalam proses pembakaran", value: "C" },
        { label: "D. Proses perubahan fase zat", value: "D" },
      ],
      explanation: "Entalpi adalah energi yang dilepaskan atau diserap dalam reaksi kimia pada tekanan konstan."
    },
    {
      question: "Bagaimana cara menghitung perubahan entalpi reaksi menggunakan hukum Hess?",
      options: [
        { label: "A. Menjumlahkan entalpi reaksi individual", value: "A", isCorrect: true },
        { label: "B. Mengurangkan entalpi reaksi individual", value: "B" },
        { label: "C. Menggunakan rumus energi aktivasi", value: "C" },
        { label: "D. Menggunakan hukum kekekalan massa", value: "D" },
      ],
      explanation: "Perubahan entalpi reaksi dapat dihitung dengan menjumlahkan entalpi reaksi individual sesuai hukum Hess."
    },
    {
      question: "Apa yang terjadi pada entalpi dalam reaksi endoterm?",
      options: [
        { label: "A. Entalpi bertambah", value: "A", isCorrect: true },
        { label: "B. Entalpi berkurang", value: "B" },
        { label: "C. Entalpi tetap", value: "C" },
        { label: "D. Entalpi tidak berpengaruh", value: "D" },
      ],
      explanation: "Pada reaksi endoterm, energi diserap sehingga entalpi sistem bertambah."
    },
    {
      question: "Apa yang dimaksud dengan reaksi eksoterm?",
      options: [
        { label: "A. Reaksi yang menyerap panas", value: "A" },
        { label: "B. Reaksi yang melepaskan panas", value: "B", isCorrect: true },
        { label: "C. Reaksi yang tidak melibatkan panas", value: "C" },
        { label: "D. Reaksi yang tidak terjadi", value: "D" },
      ],
      explanation: "Reaksi eksoterm adalah reaksi yang melepaskan panas ke lingkungan."
    },
    {
      question: "Apa pengaruh tekanan terhadap entalpi pada reaksi gas?",
      options: [
        { label: "A. Tidak berpengaruh", value: "A" },
        { label: "B. Entalpi akan meningkat seiring dengan meningkatnya tekanan", value: "B" },
        { label: "C. Entalpi berkurang jika tekanan meningkat", value: "C" },
        { label: "D. Tekanan hanya berpengaruh pada suhu, bukan entalpi", value: "D" },
      ],
      explanation: "Pada reaksi gas, tekanan dapat mempengaruhi entalpi, khususnya untuk gas yang terlibat dalam reaksi."
    },
    {
      question: "Apa yang dimaksud dengan entalpi pembentukan standar?",
      options: [
        { label: "A. Energi yang dilepaskan saat pembakaran", value: "A" },
        { label: "B. Perubahan entalpi untuk pembentukan satu mol senyawa dari unsur-unsurnya dalam keadaan standar", value: "B", isCorrect: true },
        { label: "C. Energi yang diserap dalam proses sublimasi", value: "C" },
        { label: "D. Energi yang dibutuhkan dalam pembentukan ikatan", value: "D" },
      ],
      explanation: "Entalpi pembentukan standar adalah perubahan entalpi untuk pembentukan satu mol senyawa dari unsur-unsurnya dalam keadaan standar."
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
    setIsAnswered(false);
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
          <h2>
            Soal Nomor {currentQuestionIndex + 1}/{questions.length}
          </h2>
          <p>{currentQuestion.question}</p>
        </div>
        <div className="latihan-soal1-answers">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              className={`latihan-soal1-answer-button ${answers[currentQuestionIndex] === option.value ? "latihan-soal1-selected-answer" : ""}`}
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

export default LatihanSoal2;