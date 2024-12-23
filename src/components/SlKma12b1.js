import React, { useState } from "react";
import "../css/QuestionPage.css";

const LatihanSoalStatistika = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const questions = 
  [
    {
      question: "Mana yang mengalami oksidasi pada reaksi Zn + Cu²⁺ → Zn²⁺ + Cu?",
      options: [
        { label: "A. Zn", value: "A", isCorrect: true },
        { label: "B. Cu", value: "B" },
        { label: "C. Cu²⁺", value: "C" },
        { label: "D. Zn²⁺", value: "D" }
      ],
      explanation: "Zn mengalami oksidasi karena kehilangan elektron dan berubah menjadi Zn²⁺."
    },
    {
      question: "Pada elektrolisis air, gas apa yang dihasilkan di katoda?",
      options: [
        { label: "A. Oksigen", value: "A" },
        { label: "B. Hidrogen", value: "B", isCorrect: true },
        { label: "C. Nitrogen", value: "C" },
        { label: "D. Karbon dioksida", value: "D" }
      ],
      explanation: "Gas hidrogen dihasilkan di katoda karena ion H⁺ mendapatkan elektron."
    },
    {
      question: "Bilangan oksidasi oksigen dalam H₂O adalah?",
      options: [
        { label: "A. +1", value: "A" },
        { label: "B. -2", value: "B", isCorrect: true },
        { label: "C. 0", value: "C" },
        { label: "D. -1", value: "D" }
      ],
      explanation: "Oksigen dalam senyawa biasanya memiliki bilangan oksidasi -2 kecuali dalam senyawa peroksida atau fluorida."
    },
    {
      question: "Reaksi antara seng dan asam klorida menghasilkan gas hidrogen. Reaksi tersebut adalah contoh dari reaksi redoks. Manakah yang mengalami reduksi dalam reaksi tersebut?",
      options: [
        { label: "A. Seng (Zn)", value: "A" },
        { label: "B. Ion hidrogen (H⁺)", value: "B", isCorrect: true },
        { label: "C. Klorida (Cl⁻)", value: "C" },
        { label: "D. Gas hidrogen (H₂)", value: "D" }
      ],
      explanation: "Ion H⁺ menerima elektron dan berubah menjadi gas hidrogen (H₂), sehingga mengalami reduksi."
    },
    {
      question: "Bilangan oksidasi unsur klor (Cl) dalam NaCl adalah...",
      options: [
        { label: "A. -1", value: "A", isCorrect: true },
        { label: "B. 0", value: "B" },
        { label: "C. +1", value: "C" },
        { label: "D. +2", value: "D" }
      ],
      explanation: "Dalam NaCl, klor (Cl) memiliki bilangan oksidasi -1, karena Cl menerima satu elektron dari Na."
    },
    {
      question: "Pada reaksi redoks, suatu zat yang mengalami pengurangan bilangan oksidasinya disebut...",
      options: [
        { label: "A. Oksidator", value: "A" },
        { label: "B. Reduktor", value: "B", isCorrect: true },
        { label: "C. Katalisator", value: "C" },
        { label: "D. Elektrolit", value: "D" }
      ],
      explanation: "Reduktor adalah zat yang memberikan elektron pada zat lain, sehingga mengalami oksidasi dan menurunkan bilangan oksidasinya."
    },
    {
      question: "Reaksi redoks dapat digunakan dalam proses pemurnian logam. Proses ini terjadi karena...",
      options: [
        { label: "A. Perpindahan elektron antara logam dan elektrolit", value: "A", isCorrect: true },
        { label: "B. Perubahan suhu yang sangat tinggi", value: "B" },
        { label: "C. Pembentukan senyawa kompleks", value: "C" },
        { label: "D. Reaksi endergonik", value: "D" }
      ],
      explanation: "Pada pemurnian logam, terjadi perpindahan elektron melalui reaksi redoks antara logam dan elektrolit."
    },
    {
      question: "Pada reaksi redoks antara magnesium dan oksigen, apakah yang terjadi pada magnesium?",
      options: [
        { label: "A. Magnesium mengalami reduksi", value: "A" },
        { label: "B. Magnesium mengalami oksidasi", value: "B", isCorrect: true },
        { label: "C. Oksigen mengalami oksidasi", value: "C" },
        { label: "D. Tidak ada perubahan", value: "D" }
      ],
      explanation: "Magnesium kehilangan elektron dan membentuk ion Mg²⁺, sehingga mengalami oksidasi."
    },
    {
      question: "Pada sel galvanik, apakah yang terjadi pada anoda?",
      options: [
        { label: "A. Terjadi oksidasi", value: "A", isCorrect: true },
        { label: "B. Terjadi reduksi", value: "B" },
        { label: "C. Tidak terjadi reaksi", value: "C" },
        { label: "D. Hanya terjadi perpindahan ion", value: "D" }
      ],
      explanation: "Pada sel galvanik, anoda adalah elektroda tempat terjadinya reaksi oksidasi."
    },
    {
      question: "Ion mana yang bergerak menuju katoda pada sel elektrolisis larutan NaCl?",
      options: [
        { label: "A. Na⁺", value: "A" },
        { label: "B. Cl⁻", value: "B" },
        { label: "C. H⁺", value: "C", isCorrect: true },
        { label: "D. OH⁻", value: "D" }
      ],
      explanation: "Pada sel elektrolisis, ion H⁺ bergerak menuju katoda karena akan mengalami reduksi."
    }
  ]


  const handleNextQuestion = () => {
    if (currentQuestion < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      resetSelection();
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion(currentQuestion - 1);
      resetSelection();
    }
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const resetSelection = () => {
    setSelectedOption(null);
  };

  const handleDropdownChange = (e) => {
    const selectedNumber = parseInt(e.target.value);
    setCurrentQuestion(selectedNumber);
    resetSelection();
  };

  const handleConfirmationResponse = (response) => {
    if (response === "yes") {
      setSelectedOption(true); // Tampilkan pembahasan
    }
    setShowConfirmation(false); // Hilangkan pesan
  };

  return (
    <div className="question-page">
      <div className="question-container">
        <button
          className="oval-button previous-button"
          onClick={handlePreviousQuestion}
          disabled={currentQuestion === 1}
        >
          &larr; Soal Sebelumnya
        </button>
        <div className="question-box">
          <h2>Soal {currentQuestion}</h2>
          <p>{questions[currentQuestion - 1].question}</p>
        </div>
        <button
          className="oval-button next-button"
          onClick={handleNextQuestion}
          disabled={currentQuestion === questions.length}
        >
          Soal Berikutnya &rarr;
        </button>
      </div>

      <div className="interactive-section">
        <div className="dropdown-container">
          <label htmlFor="question-dropdown">Pilih Soal:</label>
          <select
            id="question-dropdown"
            value={currentQuestion}
            onChange={handleDropdownChange}
          >
            {questions.map((_, index) => (
              <option key={index} value={index + 1}>
                Soal {index + 1}
              </option>
            ))}
          </select>
        </div>

        <div className="options-container">
          {questions[currentQuestion - 1].options.map((option, index) => (
            <button
              key={index}
              className={`option-button ${
                selectedOption === option
                  ? option === questions[currentQuestion - 1].correctOption
                    ? "correct"
                    : "incorrect"
                  : ""
              }`}
              onClick={() => handleOptionSelect(option)}
            >
              {option}
            </button>
          ))}
        </div>

        {selectedOption && (
          <div className="explanation-container">
            <p className="explanation-text">
              {questions[currentQuestion - 1].explanation}
            </p>
          </div>
        )}
      </div>

      {showConfirmation && (
        <div className="confirmation-popup">
          <div className="popup-content">
            <p>Yakin mau melihat pembahasan sekarang?</p>
            <div className="popup-buttons">
              <button
                className="popup-button no-button"
                onClick={() => handleConfirmationResponse("no")}
              >
                Tidak
              </button>
              <button
                className="popup-button yes-button"
                onClick={() => handleConfirmationResponse("yes")}
              >
                Iya
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LatihanSoalStatistika;