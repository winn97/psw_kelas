import React, { useState } from "react";
import "./QuestionPage.css";

const LatihanSoalTeoriAtom = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const questions = [
    {
      question: "Siapa penemu teori atom modern?",
      options: [
        { label: "A. Dalton", value: "A", isCorrect: true },
        { label: "B. Thomson", value: "B" },
        { label: "C. Rutherford", value: "C" },
        { label: "D. Bohr", value: "D" },
      ],
      explanation:
        "John Dalton memperkenalkan teori atom modern pada tahun 1803.",
    },
    {
      question: "Apa partikel penyusun atom?",
      options: [
        { label: "A. Elekron, Proton, Neutron", value: "A", isCorrect: true },
        { label: "B. Elektron dan Proton saja", value: "B" },
        { label: "C. Neutron saja", value: "C", value: "C" },
        { label: "D. Proton saja", value: "D" },
      ],
      explanation:
        "Atom terdiri dari elektron, proton, dan neutron.",
    },
    {
      question: "Apa nama model atom yang dikembangkan oleh Rutherford?",
      options: [
        { label: "A. Model Roti Kismis ", value: "A" },
        { label: "B. Model Planetary", value: "B", isCorrect: true},
        { label: "C. Model Gelombang", value: "C", },
        { label: "D. Model Atom Bohr", value: "D" },
      ],
      explanation:
        "Model Rutherford menggambarkan atom seperti tata surya (model planetary)."
    },
    {
      question: "Dalam model atom Rutherford, inti atom memiliki sifat?",
      options: [
        { label: "A. Berukuran besar dan bermuatan negatif", value: "A" },
        { label: "B. Berukuran kecil dan bermuatan positif", value: "B", isCorrect: true},
        { label: "C. Berukuran besar dan bermuatan positif", value: "C", },
        { label: "D. Berukuran kecil dan netral", value: "D" },
      ],
      explanation:
        "Rutherford melalui eksperimen hamburan sinar alfa menemukan bahwa inti atom berukuran sangat kecil dibandingkan atom secara keseluruhan dan bermuatan positif. Sebagian besar massa atom terkonsentrasi di inti."
    },
    {
      question: "Partikel subatomik yang tidak bermuatan disebut?",
      options: [
        { label: "A. Neutron", value: "A", isCorrect: true },
        { label: "B. Elektron", value: "B" },
        { label: "C. Proton", value: "C", value: "C" },
        { label: "D. Nukleon", value: "D" },
      ],
      explanation:
        "Neutron adalah partikel subatomik yang terdapat dalam inti atom bersama proton. Neutron tidak memiliki muatan listrik, tetapi memiliki massa hampir sama dengan proton.",
    },
    {
      question: "Partikel subatomik yang tidak bermuatan disebut?",
      options: [
        { label: "A. Neutron", value: "A", isCorrect: true },
        { label: "B. Elektron", value: "B" },
        { label: "C. Proton", value: "C" },
        { label: "D. Nukleon", value: "D" },
      ],
      explanation:
        "Neutron adalah partikel subatomik yang terdapat dalam inti atom bersama proton. Neutron tidak memiliki muatan listrik, tetapi memiliki massa hampir sama dengan proton.",
    },
    {
      question: "Siapa yang pertama kali mengusulkan bahwa materi terdiri dari partikel kecil bernama atom?",
      options: [
        { label: "A. John Dalton", value: "A", isCorrect: false },
        { label: "B. Demokritus", value: "B", isCorrect: true },
        { label: "C. J.J. Thomson", value: "C" },
        { label: "D. Ernest Rutherford", value: "D" },
      ],
      explanation:
        "Demokritus adalah filsuf Yunani kuno yang pertama kali mengusulkan gagasan bahwa semua materi terdiri dari partikel kecil tak terpisahkan yang disebut atom.",
    },
    {
      question: "Apa nama model atom yang menyatakan bahwa elektron tersebar dalam atom seperti kismis dalam roti?",
      options: [
        { label: "A. Model atom Bohr", value: "A" },
        { label: "B. Model atom Rutherford", value: "B" },
        { label: "C. Model atom Dalton", value: "C" },
        { label: "D. Model atom Thomson", value: "D", isCorrect: true },
      ],
      explanation:
        "Model atom Thomson dikenal sebagai model 'roti kismis', di mana elektron diasumsikan tersebar dalam atom seperti kismis yang tersebar dalam roti.",
    },
    {
      question: "Dalam eksperimen hamburan sinar alfa, Rutherford menemukan bahwa?",
      options: [
        { label: "A. Atom berbentuk seperti roti kismis", value: "A" },
        { label: "B. Sebagian besar massa atom terkonsentrasi di inti kecil", value: "B", isCorrect: true },
        { label: "C. Elektron bergerak dalam lintasan berbentuk lingkaran di sekitar inti", value: "C" },
        { label: "D. Proton dan neutron tersebar merata dalam atom", value: "D" },
      ],
      explanation:
        "Eksperimen hamburan sinar alfa Rutherford menunjukkan bahwa sebagian besar massa atom terkonsentrasi di inti kecil yang sangat padat, sementara sebagian besar atom adalah ruang kosong.",
    },
    {
      question: "Model atom Bohr menggambarkan elektron bergerak dalam?",
      options: [
        { label: "A. Orbit berbentuk lingkaran dengan energi tetap", value: "A", isCorrect: true },
        { label: "B. Lintasan acak di sekitar inti", value: "B" },
        { label: "C. Ruang kosong di dalam atom", value: "C" },
        { label: "D. Orbit berbentuk elips dengan energi berubah", value: "D" },
      ],
      explanation:
        "Model atom Bohr menjelaskan bahwa elektron bergerak dalam orbit melingkar dengan energi tetap di sekitar inti atom, dan elektron dapat berpindah lintasan dengan menyerap atau memancarkan energi.",
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

export default LatihanSoalTeoriAtom;