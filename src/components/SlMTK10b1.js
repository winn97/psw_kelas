import React, { useState } from "react";
import "../css/QuestionPage.css";

const LatihanSoal1 = () => {
  const soal = [
    { pertanyaan: "Jika 2^x = 16, maka nilai x adalah?", opsi: ["2", "3", "4", "5"], jawaban: "4", penjelasan: "Karena 2^4 = 16, maka nilai x adalah 4." },
    { pertanyaan: "Berapakah nilai log_2(32)?", opsi: ["4", "5", "6", "7"], jawaban: "5", penjelasan: "Karena 2^5 = 32, maka log_2(32) = 5." },
    { pertanyaan: "Jika 8^x = 64, maka nilai x adalah?", opsi: ["2", "3", "4", "5"], jawaban: "2", penjelasan: "Karena 8^2 = 64, maka nilai x adalah 2." },
    { pertanyaan: "Berapakah nilai log_10(1000)?", opsi: ["2", "3", "4", "5"], jawaban: "3", penjelasan: "Karena 10^3 = 1000, maka log_10(1000) = 3." },
    { pertanyaan: "Jika log_2(x) = 3, maka nilai x adalah?", opsi: ["6", "8", "12", "16"], jawaban: "8", penjelasan: "Karena 2^3 = 8, maka nilai x adalah 8." },
    { pertanyaan: "Jika 5^x = 125, maka nilai x adalah?", opsi: ["2", "3", "4", "5"], jawaban: "3", penjelasan: "Karena 5^3 = 125, maka nilai x adalah 3." },
    { pertanyaan: "Berapakah nilai log_5(25)?", opsi: ["2", "3", "4", "5"], jawaban: "2", penjelasan: "Karena 5^2 = 25, maka log_5(25) = 2." },
    { pertanyaan: "Jika log_3(81) = x, maka nilai x adalah?", opsi: ["2", "3", "4", "5"], jawaban: "4", penjelasan: "Karena 3^4 = 81, maka nilai x adalah 4." },
    { pertanyaan: "Berapakah nilai log_4(64)?", opsi: ["2", "3", "4", "5"], jawaban: "3", penjelasan: "Karena 4^3 = 64, maka log_4(64) = 3." },
    { pertanyaan: "Jika 2^(2x) = 64, maka nilai x adalah?", opsi: ["2", "3", "4", "5"], jawaban: "3", penjelasan: "Karena 2^(2*3) = 64, maka nilai x adalah 3." }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [result, setResult] = useState({});

  const handleAnswer = (index, opsi) => {
    const isCorrect = opsi === soal[index].jawaban;
    setSelectedAnswers({ ...selectedAnswers, [index]: opsi });
    setResult({ ...result, [index]: isCorrect ? 'Benar' : 'Salah' });
  };

  const handleNext = () => {
    if (currentIndex < soal.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="latihan-soal1-container">
      <div className="latihan-soal1-question-box">
        <h1 className="latihan-soal1-title">Latihan Soal: Eksponen dan Logaritma</h1>

        <div className="latihan-soal1-question">
          <p>{currentIndex + 1}. {soal[currentIndex].pertanyaan}</p>
          <div className="latihan-soal1-answers">
            {soal[currentIndex].opsi.map((opsi, i) => (
              <button
                key={i}
                className={`latihan-soal1-answer-button ${selectedAnswers[currentIndex] === opsi ? 'latihan-soal1-selected-answer' : ''}`}
                onClick={() => handleAnswer(currentIndex, opsi)}
                disabled={selectedAnswers[currentIndex] !== undefined} // Disable after answering
              >
                {opsi}
              </button>
            ))}
          </div>
          {selectedAnswers[currentIndex] && (
            <p className={`jawaban ${result[currentIndex] === 'Benar' ? 'correct' : 'incorrect'}`}>
              {result[currentIndex] === 'Benar' ? "Jawaban Benar" : "Jawaban Salah"}
            </p>
          )}
          <p className={`penjelasan ${selectedAnswers[currentIndex] ? "show-penjelasan" : ""}`}>
            <strong>Penjelasan:</strong> {soal[currentIndex].penjelasan}
          </p>
        </div>

        <div className="latihan-soal1-navigation-buttons">
          <button
            className="latihan-soal1-answer-button"
            onClick={handlePrevious}
            disabled={currentIndex === 0}
          >
            Soal Sebelumnya
          </button>
          <button
            className="latihan-soal1-answer-button"
            onClick={handleNext}
            disabled={currentIndex === soal.length - 1}
          >
            Soal Selanjutnya
          </button>
        </div>
      </div>
    </div>
  );
};

export default LatihanSoal1;