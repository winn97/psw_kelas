import React, { useState } from "react";
import "../css/QuestionPage.css";

const SlKma12b6 = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const questions = [
    {
      question: "Apa yang dimaksud dengan makromolekul?",
      options: [
        "Molekul kecil",
        "Molekul besar yang terdiri dari banyak atom",
        "Molekul yang tidak larut dalam air",
        "Molekul yang hanya terdiri dari karbon"
      ],
      correctOption: "Molekul besar yang terdiri dari banyak atom",
      explanation: "Makromolekul adalah molekul besar yang terdiri dari banyak atom, biasanya terdiri dari ribuan atom yang terikat bersama.",
    },
    {
      question: "Karbohidrat terdiri dari unit dasar yang disebut?",
      options: ["Asam amino", "Gula", "Nukleotida", "Asam lemak"],
      correctOption: "Gula",
      explanation: "Karbohidrat terdiri dari unit dasar yang disebut gula, yang dapat berupa monosakarida, disakarida, atau polisakarida.",
    },
    {
      question: "Apa fungsi utama protein dalam tubuh?",
      options: [
        "Sumber energi",
        "Penyimpanan genetik",
        "Katalisator dalam reaksi biokimia",
        "Pengatur suhu"
      ],
      correctOption: "Katalisator dalam reaksi biokimia",
      explanation: "Protein berfungsi sebagai katalisator dalam reaksi biokimia, membantu mempercepat reaksi tanpa terlibat secara permanen.",
    },
    {
      question: "Lipid yang memiliki satu ikatan rangkap disebut?",
      options: ["Asam lemak jenuh", "Asam lemak tak jenuh", "Trigliserida", "Fosfolipid"],
      correctOption: "Asam lemak tak jenuh",
      explanation: "Asam lemak tak jenuh memiliki satu atau lebih ikatan rangkap dalam rantai karbonnya, yang membuatnya lebih cair pada suhu kamar.",
    },
    {
      question: "Nukleotida terdiri dari tiga komponen utama, yaitu?",
      options: [
        "Gula, asam lemak, dan gliserol",
        "Asam amino, gula, dan fosfat",
        "Gula, basa nitrogen, dan fosfat",
        "Asam lemak, gliserol, dan basa nitrogen"
      ],
      correctOption: "Gula, basa nitrogen, dan fosfat",
      explanation: "Nukleotida terdiri dari tiga komponen utama: gula, basa nitrogen, dan kelompok fosfat, yang membentuk DNA dan RNA.",
    },
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
    setShowConfirmation(true);
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
      setShowConfirmation(false);
    } else {
      resetSelection();
      setShowConfirmation(false);
    }
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

      {selectedOption && !showConfirmation && (
        <div className="explanation-container">
          <p className="explanation-text">
            {questions[currentQuestion - 1].explanation}
          </p>
        </div>
      )}
    </div>
  );
};

export default SlKma12b6;