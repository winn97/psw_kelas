import React, { useState } from "react";
import "../css/QuestionPage.css";

const LatihanSoalIkatanKimia = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const questions = [
    
{
  question: "Ikatan yang terbentuk antara atom-atom logam dengan cara elektron-elektron valensi bergerak bebas disebut?",
  options: [
    { label: "A. Ikatan kovalen", value: "A" },
    {
      label: "B. Ikatan logam",
      value: "B",
      isCorrect: true,
    },
    { label: "C. Ikatan ion", value: "C" },
    { label: "D. Ikatan hidrogen", value: "D" },
  ],
  explanation:
    "Dalam ikatan logam, elektron valensi tidak terikat pada satu atom saja, tetapi bergerak bebas di antara inti-inti atom. Hal ini menciptakan Lautan elekton yang memberikan sifat unik logam seperti konduktivitas listrik dan kelenturan.",
},
{
  question: "Manakah sifat khas dari senyawa yang memiliki ikatan ionik?",
  options: [
    { label: "A. Mengangkut karbon dioksida", value: "A" },
    { label: "B. Mengangkut oksigen", value: "B", isCorrect: true },
    { label: "C. Mengatur pH darah", value: "C" },
    { label: "D. Memproduksi sel darah merah", value: "D" },
  ],
  explanation:
    "Senyawa ionik seperti NaCl terdisosiasi menjadi ion-ion bebas saat larut dalam air. Ion-ion ini dapat bergerak bebas, memungkinkan larutan menghantarkan listrik. Sebaliknya, dalam bentuk padat, ion tidak dapat bergerak sehingga tidak menghantarkan listrik.",
},
{
  question:
    "Manakah sifat khas dari senyawa yang memiliki ikatan ionik? ",
  options: [
    { label: "A. Titik leleh rendah", value: "A" },
    { label: "B. Konduktor listrik dalam larutan", value: "B", isCorrect: true },
    { label: "C. Tidak larut dalam air", value: "C" },
    { label: "D. Tidak menghantarkan listrik dalam larutan", value: "D" },
  ],
  explanation:
    "Senyawa ionik seperti NaCl terdisosiasi menjadi ion-ion bebas saat larut dalam air. Ion-ion ini dapat bergerak bebas, memungkinkan larutan menghantarkan listrik. Sebaliknya, dalam bentuk padat, ion tidak dapat bergerak sehingga tidak menghantarkan listrik.",
},
{
  question: "Senyawa yang terbentuk oleh ikatan kovalen non-polar adalah...",
  options: [
    { label: "A. H₂O", value: "A" },
    { label: "B. NaCl", value: "B" },
    { label: "C. H₂", value: "C", isCorrect: true },
    { label: "D. NH₃", value: "D" },
  ],
  explanation:
    "Ikatan kovalen non-polar terbentuk ketika elektron dibagi secara merata antara dua atom dengan keelektronegatifan yang sama atau hampir sama. Pada molekul H₂, kedua atom hidrogen memiliki keelektronegatifan yang sama, sehingga elektron dibagi merata, menjadikannya ikatan kovalen non-polar.",
},
{
  question:
    "Apa yang menyebabkan senyawa ionik seperti NaCl memiliki titik leleh tinggi?",
  options: [
    { label: "A. Adanya elektron bebas", value: "A" },
    { label: "B. Gaya tarik antara ion positif dan ion negatif yang kuat", value: "B", isCorrect: true },
    { label: "C. Pasangan elektron yang digunakan bersama", value: "C" },
    { label: "D. Polaritas molekulnya", value: "D" },
  ],
  explanation:
    "Senyawa ionik seperti NaCl memiliki kisi kristal dengan gaya tarik elektrostatik yang sangat kuat antara ion Na⁺ dan Cl⁻. Dibutuhkan energi besar untuk memutuskan gaya ini, sehingga titik lelehnya tinggi.",
},
{
  question: "Ikatan kovalen terbentuk melalui?",
  options: [
    { label: "A. Transfer elektron dari satu atom ke atom lain", value: "A" },
    { label: "B. Penggunaan bersama pasangan elektron", value: "B", isCorrect: true },
    { label: "C. Mobilitas elektron dalam kisi logam", value: "C" },
    { label: "D. Interaksi antara neutron", value: "D" },
  ],
  explanation:
    "Ikatan kovalen terbentuk ketika dua atom berbagi pasangan elektron untuk mencapai kestabilan, biasanya dalam senyawa molekul.",
},
{
  question: "Apa sifat khas dari senyawa kovalen polar seperti H₂O?",
  options: [
    { label: "A. Larut dalam pelarut polar", value: "A", isCorrect: true },
    { label: "B. Tidak larut dalam air", value: "B" },
    { label: "C. Menghantarkan listrik dalam bentuk padat", value: "C" },
    { label: "D. Memiliki titik leleh sangat tinggi", value: "D" },
  ],
  explanation:
    "Senyawa kovalen polar seperti H₂O larut dalam pelarut polar karena adanya perbedaan elektronegativitas yang menciptakan kutub muatan dalam molekul.",
},
{
  question: "Mengapa logam dapat menghantarkan listrik dengan baik?",
  options: [
    { label: "A. Adanya gaya tarik elektrostatik yang kuat", value: "A" },
    { label: "B. Mobilitas elektron valensi dalam struktur logam", value: "B", isCorrect: true },
    { label: "C. Adanya pasangan elektron yang digunakan bersama", value: "C" },
    { label: "D. Polaritas ikatan dalam logam", value: "D" },
  ],
  explanation:
    "Logam dapat menghantarkan listrik karena elektron valensinya bergerak bebas dalam 'lautan elektron', memungkinkan aliran muatan listrik.",
},
{
  question: "Senyawa apa yang memiliki ikatan ionik?",
  options: [
    { label: "A. CO₂", value: "A" },
    { label: "B. CH₄", value: "B" },
    { label: "C. NaCl", value: "C", isCorrect: true },
    { label: "D. H₂O", value: "D" },
  ],
  explanation:
    "Senyawa ionik seperti NaCl terbentuk melalui transfer elektron dari ion positif (Na⁺) ke ion negatif (Cl⁻), menciptakan gaya tarik elektrostatik yang kuat.",
},
{
  question: "Apa yang menyebabkan ikatan hidrogen terbentuk dalam molekul seperti H₂O?",
  options: [
    { label: "A. Interaksi antara neutron", value: "A" },
    { label: "B. Adanya kutub positif dan negatif akibat perbedaan elektronegativitas", value: "B", isCorrect: true },
    { label: "C. Mobilitas elektron bebas", value: "C" },
    { label: "D. Transfer elektron antara atom", value: "D" },
  ],
  explanation:
    "Ikatan hidrogen terbentuk karena adanya kutub positif dan negatif dalam molekul polar seperti H₂O, di mana atom hidrogen bermuatan parsial positif berinteraksi dengan atom elektronegatif seperti oksigen.",
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

export default LatihanSoalIkatanKimia;