import React, { useState } from "react";
import "../css/QuestionPage.css";

const LatihanSoal3 = () => {
  const [answers, setAnswers] = useState([]);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const questions = [
    {
      question: "Serbuk magnesium yang massanya 3 gram tepat habis bereaksi dengan sejumlah serbuk belerang menghasilkan senyawa magnesium sulfida yang massanya 7 gram. Massa serbuk belerang yang bereaksi adalah?",
      options: [
        { label: "A. 10 gram.", value: "A" },
        { label: "B. 4 gram.", value: "B", isCorrect: true },
        { label: "C. 7 gram.", value: "C" },
        { label: "D. 3 gram.", value: "D" },
      ],
      explanation: "Soal tersebut didasarkan pada Hukum Kekekalan Massa (Hukum Lavoisier). Hukum kekekalan massa menyatakan bahwa: massa total zat-zat sebelum reaksi akan selalu sama dengan massa total zat-zat hasil reaksi.\n\nmassa serbuk magnesium + massa serbuk belerang = massa magnesium sulfida\n\n3 gram + massa serbuk belerang = 7 gram\n\nmassa serbuk belerang = 7 gram – 3 gram = 4 gram.",
    },
    {
      question: "Kristal iodin yang massanya 10 gram direaksikan dengan 10 gram gas hidrogen. Setelah bereaksi, ternyata didapatkan 2,5 gram gas hidrogen iodida. Massa zat yang tidak bereaksi adalah?",
      options: [
        { label: "A. (10 – 2,5) gram.", value: "A" },
        { label: "B. (10 + 2,5) gram.", value: "B", isCorrect: true },
        { label: "C. (10 + 10) – 2,5 gram.", value: "C" },
        { label: "D. (10 – 2,5) – 10 gram.", value: "D" },
      ],
      explanation: "massa kristal iodin + massa gas hidrogen = massa gas hidrogen iodida\n\n10 gram + 10 gram = x + 2,5 gram\n\n x = (10 + 10) – 2,5 gram.",
    },
    {
      question: "Di dalam senyawa CaS, perbandingan massa Ca : S = 5 : 4. Jika 10 gram kalsium direaksikan dengan 9 gram serbuk belerang, maka massa CaS yang dihasilkan sebanyak?",
      options: [
        { label: "A. 9 gram. ", value: "A"},
        { label: "B. 9,5 gram. ", value: "B" },
        { label: "C. 10 gram. ", value: "C" , isCorrect: true },
        { label: "D. 19 gram.", value: "D" },
      ],
      explanation: "Diketahui:\n\nperbandingan massa Ca : S = 5 : 4\nmassa Ca = 10 gram\nmassa S= 9 gram\n\nDitanyakan: massa CaS = …?\n\nJawaban:\n\nKarena perbandingan massa Ca : S = 5 : 4, maka massa yang bereaksi Ca : S = 10 : 8. Sehingga:\n\nmassa Ca : massa S = massa CaS\n\n10 gram : 8 gram = 18 gram."
    },
    {
      question: "Gas belerang dioksida direaksikan dengan gas oksigen dengan persamaan reaksi: \nSO2(g) + O2(g) → SO3(g)\n\nBila volume diukur pada suhu dan tekanan yang sama, maka perbandingan volume gas SO2 : O2 : SO3 adalah:",
      options: [
        { label: "A. 1 : 1 : 1 ", value: "A" },
        { label: "B. 2 : 1 : 1", value: "B" , isCorrect: true},
        { label: "C. 1 : 2 : 1", value: "C" },
        { label: "D. 3 : 2 : 1", value: "D" },
      ],
      explanation: "Hukum perbandingan volume atau hukum Gay-Lussac menyatakan bahwa gas-gas yang bereaksi dan volume gas-gas hasil reaksi bila diukur pada suhu dan tekanan sama, berbanding sebagai bilangan bulat dan sederhana.\n\nReaksi setara:\n\n2SO2(g) + O2(g) → 2SO3(g)\n\nJadi, perbandingan volume gas SO2 : O2 : SO3 = 2 : 1 : 2.",
    },
    {
      question: "Jika di dalam senyawa FeS perbandingan massa Fe : S = 7 : 4, maka untuk menghasilkan 4,4 gram senyawa FeS diperlukan Fe dan S berturut-turut sebanyak:",
      options: [
        { label: "A. 4,0 gram dan 0,4 gram ", value: "A" },
        { label: "B. 2,8 gram dan 1,6 gram ", value: "B" },
        { label: "C. 3,7 gram dan 0,7 gram ", value: "C", isCorrect: true },
        { label: "D. 3,0 gram dan 1,4 gram", value: "D" },
      ],
      explanation: "Diketahui:\n\nperbandingan massa Fe : S = 7 : 4\nJumlah perbandingan = 7 + 4 = 11\nmassa FeS = 4,4 gram\n\nDitanyakan: massa Fe dan massa S = …?\n\nJawaban:\n\nMassa Fe yang diperlukan = (7/11) x 4,4 gram= 2,8 gram\nmassa S yang diperlukan = (4/11) x 4,4 gram = 1,6 gram",
    },
    {
      question: "Gas propane (C3H8) dibakar sempurna dengan reaksi:\nC3H8(g) + O2(g) → CO2(g) + H2O(g)\n\nUntuk membakar sempurna setiap liter gas propane, dibutuhkan gas oksigen sebanyak ….",
      options: [
        { label: "A. 1,0 liter", value: "A" },
        { label: "B. 3,0 liter", value: "B" },
        { label: "C. 3,5 liter", value: "C" },
        { label: "D. 4,0 liter", value: "D" },
        { label: "E. 5,0 liter", value: "E", isCorrect: true },
      ],
      explanation: "Reaksi setara:\n\nC3H8(g) + 5O2(g) → 3CO2(g) + 4H2O(g)\n\nPerbandingan volume:\nC3H8 : O2 : CO2 : H2O= 1 : 5 : 3 : 4\n\nUntuk membakar sempurna setiap liter gas propane, maka\n\nvolume O2 = (5/1) x 1 liter = 5 liter.",
    },
    {
      question: "Setiap 1 liter gas nitrogen tepat habis bereaksi dengan 2,5 liter gas oksigen membentuk 1 liter gas oksida nitrogen. Bila volume diukur pada suhu dan tekanan yang sama, maka rumus molekul oksida nitrogen tersebut adalah …. ",
      options: [
        { label: "A. N2O", value: "A" },
        { label: "B. NO", value: "B" },
        { label: "C. N2O3", value: "C" },
        { label: "D. NO2", value: "D" },
        { label: "E. N2O5", value: "E", isCorrect: true },
      ],
      explanation: "Persamaan reaksi:\n\n2N2 + 5O2 → 2NxOy\n\nJumlah atom N sebelum reaksi = Jumlah atom N sesudah reaksi\n\n4 = 2x\n\nx = 2\n\nJumlah atom O sebelum reaksi = Jumlah atom O sesudah reaksi\n\n10 = 2y\n\ny = 5\n\nJadi, rumus molekul oksida nitrogen tersebut adalah N2O5.",
    },
    {
      question: "Diketahui unsur H dalam H2O sebanyak 4 gram, sedangkan perbandingan unsur H dan O dalam suatu senyawa adalah 1 : 8. Massa unsur O dalam senyawa tersebut adalah …. Gram.",
      options: [
        { label: "A. 4", value: "A" },
        { label: "B. 8", value: "B" },
        { label: "C. 10", value: "C" },
        { label: "D. 32", value: "D", isCorrect: true },
        { label: "E. 40", value: "E" },
      ],
      explanation: "Diketahui massa hidrogen yang membentuk senyawa sebanyak 4 gram, maka oksigen yang diperlukan yaitu:\n\nmassa oksigen = (8/1) x 4 gram = 32 gram.",
    },
    {
      question: "Pembakaran sempurna gas ammonia memerlukan gas oksigen dengan persamaan reaksi:\nNH3(g) + O2(g) → NO2(g) + H2O(g)\n\nDengan menganggap bahwa kadar oksigen di udara 20%, maka volume udara yang diperlukan untuk membakar 4 liter gas ammonia adalah …",
      options: [
        { label: "A. 5 liter", value: "A" },
        { label: "B. 7 liter", value: "B" },
        { label: "C. 10 liter", value: "C" },
        { label: "D. 20 liter", value: "D" },
        { label: "E. 35 liter", value: "E", isCorrect: true },
      ],
      explanation: "Persamaan reaksi setara:\n\n4NH3(g) + 7O2(g) → 4NO2(g) + 6H2O(g)\n\nVolume gas oksigen = (7/4) x 4 liter = 7 liter\n\nVolume oksigen = 20% volume udara\n\n7 liter = 0,2 volume udara\n\nvolume udara = 7/0,2 = 35 liter.",
    },
    {
      question: "Di antara senyawa berikut yang mempunyai Mr sama dengan MgSiO3 adalah …. (Ar Mg = 24; Si = 28; O = 16)",
      options: [
        { label: "A. Al2O3", value: "A" },
        { label: "B. CaCO3", value: "B", isCorrect: true },
        { label: "C. CaSO3", value: "C" },
        { label: "D. K2CO3", value: "D" },
        { label: "E. NaNO3", value: "E" },
      ],
      explanation: "Mr MgSiO3 = Ar Mg + Ar Si + 3Ar O\n\nMr MgSiO3 = 24 + 28 + (3 x 16) = 100\n\nMr Al2O3 = (2 x 27) + (3 x 16) = 102\n\nMr CaCO3 = 40 + 12 + (3 x 16) = 100\n\nMr CaSO3 =  40 + 32 + (3 x 16) = 120\n\nMr K2CO3 = (2 x 39) + 12 + (3 x 16) = 138\n\(2 x 39) + 12 + (3 x 16) = 138",
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
          <p>Skor Anda: {score}/{questions.length}</p>
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
                answers[currentQuestionIndex] === option.value ? "latihan-soal1-selected-answer" : ""
              }`}
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

export default LatihanSoal3;