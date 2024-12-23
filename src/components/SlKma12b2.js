import React, { useState } from "react";
import "../css/QuestionPage.css";

const LatihanSoalStatistika = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const questions = 
  [
    {
      question: "Unsur yang termasuk dalam golongan halogen adalah..",
      options: [
        { label: "A. Klorin", value: "A", isCorrect: true },
        { label: "B. Oksigen", value: "B" },
        { label: "C. Sodium", value: "C" },
        { label: "D. Kalsium", value: "D" },
        { label: "E. Nitrogen", value: "E" }
      ],
      explanation: "Klorin merupakan unsur yang termasuk dalam golongan halogen (golongan VIIA) dalam tabel periodik."
    },
    {
      question: "Unsur yang memiliki sifat non-logam dan mudah membentuk ikatan kovalen adalah..",
      options: [
        { label: "A. Silikon", value: "A" },
        { label: "B. Karbon", value: "B", isCorrect: true },
        { label: "C. Natrium", value: "C" },
        { label: "D. Kalsium", value: "D" },
        { label: "E. Magnesium", value: "E" }
      ],
      explanation: "Karbon adalah unsur non-logam yang mudah membentuk ikatan kovalen dengan unsur lainnya, seperti pada senyawa organik."
    },
    {
      question: "Berikut ini yang merupakan unsur logam transisi adalah..",
      options: [
        { label: "A. Besi (Fe)", value: "A", isCorrect: true },
        { label: "B. Natrium (Na)", value: "B" },
        { label: "C. Klorin (Cl)", value: "C" },
        { label: "D. Kalium (K)", value: "D" },
        { label: "E. Helium (He)", value: "E" }
      ],
      explanation: "Besi (Fe) adalah salah satu unsur logam transisi yang terletak di blok d tabel periodik."
    },
    {
      question: "Unsur dengan konfigurasi elektron [Kr] 5s² 4d¹⁰ 5p² adalah..",
      options: [
        { label: "A. Stronsium", value: "A" },
        { label: "B. Zirkonium", value: "B" },
        { label: "C. Selenium", value: "C" },
        { label: "D. Germanium", value: "D", isCorrect: true },
        { label: "E. Arsenik", value: "E" }
      ],
      explanation: "Germanium memiliki konfigurasi elektron [Kr] 5s² 4d¹⁰ 5p², yang menunjukkan bahwa ia berada di golongan IV."
    },
    {
      question: "Unsur yang memiliki 7 elektron valensi dan termasuk golongan VIIA adalah..",
      options: [
        { label: "A. Fluorin", value: "A" },
        { label: "B. Klorin", value: "B" },
        { label: "C. Bromin", value: "C" },
        { label: "D. Iodin", value: "D" },
        { label: "E. Semua benar", value: "E", isCorrect: true }
      ],
      explanation: "Fluorin, klorin, bromin, dan iodin semuanya adalah unsur golongan VIIA (halogen) yang memiliki 7 elektron valensi."
    },
    {
      question: "Senyawa manakah yang terbentuk dari unsur logam alkali dan halogen?",
      options: [
        { label: "A. NaCl", value: "A", isCorrect: true },
        { label: "B. H₂O", value: "B" },
        { label: "C. CO₂", value: "C" },
        { label: "D. NH₃", value: "D" },
        { label: "E. SO₂", value: "E" }
      ],
      explanation: "NaCl adalah senyawa yang terbentuk dari logam alkali (natrium) dan halogen (klorin)."
    },
    {
      question: "Senyawa manakah yang digunakan sebagai bahan baku pembuatan pupuk urea?",
      options: [
        { label: "A. NH₃", value: "A", isCorrect: true },
        { label: "B. CO₂", value: "B" },
        { label: "C. H₂O", value: "C" },
        { label: "D. NaCl", value: "D" },
        { label: "E. CaCO₃", value: "E" }
      ],
      explanation: "NH₃ (amonia) digunakan sebagai bahan baku utama dalam pembuatan pupuk urea."
    },
    {
      question: "Apa nama proses pemisahan logam dari bijihnya melalui reaksi kimia?",
      options: [
        { label: "A. Ekstraksi", value: "A", isCorrect: true },
        { label: "B. Reduksi", value: "B" },
        { label: "C. Fusi", value: "C" },
        { label: "D. Peleburan", value: "D" },
        { label: "E. Pengendapan", value: "E" }
      ],
      explanation: "Ekstraksi adalah proses pemisahan logam dari bijihnya menggunakan reaksi kimia."
    },
    {
      question: "Unsur yang digunakan dalam baterai lithium-ion adalah..",
      options: [
        { label: "A. Litium (Li)", value: "A", isCorrect: true },
        { label: "B. Natrium (Na)", value: "B" },
        { label: "C. Kalium (K)", value: "C" },
        { label: "D. Kalsium (Ca)", value: "D" },
        { label: "E. Magnesium (Mg)", value: "E" }
      ],
      explanation: "Litium adalah unsur yang digunakan dalam baterai lithium-ion karena sifatnya yang ringan dan reaktif."
    },
    {
      question: "Unsur manakah yang digunakan dalam pengisian bola lampu neon?",
      options: [
        { label: "A. Neon (Ne)", value: "A", isCorrect: true },
        { label: "B. Argon (Ar)", value: "B" },
        { label: "C. Helium (He)", value: "C" },
        { label: "D. Xenon (Xe)", value: "D" },
        { label: "E. Oksigen (O₂)", value: "E" }
      ],
      explanation: "Neon adalah gas mulia yang digunakan dalam bola lampu neon untuk memberikan cahaya berwarna khas."
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