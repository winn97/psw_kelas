import React, { useState } from "react";
import "../css/QuestionPage.css";

const SlKma12b4 = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const questions = [
    {
      question: "Senyawa karbon yang termasuk dalam golongan hidrokarbon jenuh adalah..",
      options: [
        { label: "A. Metana", value: "A", isCorrect: true },
        { label: "B. Etilena", value: "B" },
        { label: "C. Asetilena", value: "C" },
        { label: "D. Benzena", value: "D" },
      ],
      explanation:
        "Metana (CH₄) adalah contoh hidrokarbon jenuh, yang berarti hanya memiliki ikatan tunggal antara atom karbon.",
    },
    {
      question: "Senyawa karbon yang memiliki gugus fungsi alkohol adalah..",
      options: [
        { label: "A. Ethanol", value: "A", isCorrect: true },
        { label: "B. Aseton", value: "B" },
        { label: "C. Asam asetat", value: "C" },
        { label: "D. Metanal", value: "D" },
      ],
      explanation:
        "Ethanol (C₂H₅OH) memiliki gugus fungsi -OH, yang membuatnya termasuk dalam golongan alkohol.",
    },
    {
      question: "Berikut ini yang merupakan senyawa karbon yang termasuk dalam golongan aldehida adalah..",
      options: [
        { label: "A. Etanal", value: "A", isCorrect: true },
        { label: "B. Asam propionat", value: "B" },
        { label: "C. Ethanol", value: "C" },
        { label: "D. Glukosa", value: "D" },
      ],
      explanation:
        "Etanal (atau asetaldehida) adalah senyawa karbon yang memiliki gugus fungsi -CHO, yang merupakan ciri khas aldehida.",
    },
    {
        question: "Senyawa karbon yang mengandung gugus fungsi karboksil (-COOH) adalah..",
        options: [
          { label: "A. Asam asetat", value: "A", isCorrect: true },
          { label: "B. Metanol", value: "B" },
          { label: "C. Etena", value: "C" },
          { label: "D. Benzena", value: "D" },
        ],
        explanation:
          "Asam asetat (CH₃COOH) memiliki gugus karboksil (-COOH), yang memberikan sifat asam pada senyawa tersebut.",
    },
    {
        question: "Senyawa karbon berikut yang merupakan isomer struktural dari butana adalah..",
        options: [
          { label: "A. Isobutana", value: "A", isCorrect: true },
          { label: "B. Metana", value: "B" },
          { label: "C. Etana", value: "C" },
          { label: "D. Asetilen", value: "D" },
        ],
        explanation:
          "Isobutana adalah isomer struktural dari butana, yang berarti memiliki rumus molekul yang sama tetapi struktur atom yang berbeda.",
    },
    {
        question: "Manakah dari senyawa berikut yang memiliki ikatan rangkap tiga?",
        options: [
          { label: "A. Etana", value: "A" },
          { label: "B. Etena", value: "B" },
          { label: "C. Asetilena", value: "C", isCorrect: true },
          { label: "D. Propana", value: "D" },
        ],
        explanation:
          "Asetilena (C₂H₂) adalah senyawa hidrokarbon yang memiliki ikatan rangkap tiga antara atom karbonnya.",
    },
    {
        question: "Senyawa karbon berikut yang termasuk dalam golongan keton adalah..",
        options: [
          { label: "A. Aseton", value: "A", isCorrect: true },
          { label: "B. Metanal", value: "B" },
          { label: "C. Etanol", value: "C" },
          { label: "D. Asam format", value: "D" },
        ],
        explanation:
          "Aseton (CH₃COCH₃) adalah senyawa karbon dengan gugus fungsi keton, yang memiliki ikatan karbon ke oksigen melalui ikatan rangkap.",
    },
    {
        question: "Manakah senyawa berikut yang merupakan senyawa aromatik?",
        options: [
          { label: "A. Benzena", value: "A", isCorrect: true },
          { label: "B. Etena", value: "B" },
          { label: "C. Propana", value: "C" },
          { label: "D. Asetilena", value: "D" },
        ],
        explanation:
          "Benzena (C₆H₆) adalah senyawa aromatik dengan struktur cincin yang mengandung ikatan rangkap terkonjugasi.",
    },
    {
        question: "Gugus fungsi amina terdapat pada senyawa berikut, kecuali..",
        options: [
          { label: "A. Metilamina", value: "A" },
          { label: "B. Etanol", value: "B", isCorrect: true },
          { label: "C. Dimetilamina", value: "C" },
          { label: "D. Anilina", value: "D" },
        ],
        explanation:
          "Etanol (C₂H₅OH) tidak memiliki gugus fungsi amina (-NH₂), melainkan gugus hidroksil (-OH).",
    },
    {
        question: "Senyawa karbon yang memiliki sifat optik aktif adalah..",
        options: [
          { label: "A. Glukosa", value: "A", isCorrect: true },
          { label: "B. Etanol", value: "B" },
          { label: "C. Asetilena", value: "C" },
          { label: "D. Propana", value: "D" },
        ],
        explanation:
          "Glukosa adalah senyawa karbon yang memiliki atom karbon asimetris, sehingga menunjukkan sifat optik aktif.",
    }
];

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

export default SlKma12b4;