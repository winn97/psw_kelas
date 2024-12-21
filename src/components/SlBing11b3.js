import React, { useState } from "react";
import "./latihansoal.css";

const LatihanSoal3 = () => {
  const [answers, setAnswers] = useState([]);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const questions = [
    {
      question: "Which of the following is a declarative sentence?",
      options: [
        { label: "A. What time is it?", value: "A" },
        { label: "B. Close the door.", value: "B" },
        { label: "C. The sky is blue.", value: "C", isCorrect: true },
        { label: "D. Are you coming to the party?", value: "D" },
      ],
      explanation: "A declarative sentence makes a statement. 'The sky is blue.' is an example of a declarative sentence.",
    },
    {
      question: "Which sentence is an interrogative sentence?",
      options: [
        { label: "A. Please open the window.", value: "A" },
        { label: "B. She is reading a book.", value: "B" },
        { label: "C. How are you?", value: "C", isCorrect: true },
        { label: "D. The book is on the table.", value: "D" },
      ],
      explanation: "An interrogative sentence asks a question. 'How are you?' is an example of an interrogative sentence.",
    },
    {
      question: "Which of the following is an imperative sentence?",
      options: [
        { label: "A. Are you happy?", value: "A" },
        { label: "B. Turn off the lights.", value: "B", isCorrect: true },
        { label: "C. The cat is sleeping.", value: "C" },
        { label: "D. Where is your phone?", value: "D" },
      ],
      explanation: "An imperative sentence gives a command or request. 'Turn off the lights.' is an example of an imperative sentence.",
    },
    {
      question: "Which of the following is an exclamatory sentence?",
      options: [
        { label: "A. I love this song!", value: "A", isCorrect: true },
        { label: "B. This is my favorite color.", value: "B" },
        { label: "C. He went to the store.", value: "C" },
        { label: "D. Can you help me?", value: "D" },
      ],
      explanation: "An exclamatory sentence shows strong feeling. 'I love this song!' is an example of an exclamatory sentence.",
    },
    {
      question: "Which sentence is a complex sentence?",
      options: [
        { label: "A. He went to the store and bought some milk.", value: "A" },
        { label: "B. I can't believe she did that.", value: "B" },
        { label: "C. Because it was raining, the match was canceled.", value: "C", isCorrect: true },
        { label: "D. She likes reading books.", value: "D" },
      ],
      explanation: "A complex sentence contains one independent clause and at least one dependent clause. 'Because it was raining, the match was canceled.' is a complex sentence.",
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
          <h1 className="latihan-soal1-title">Classification of Sentences Quiz</h1>
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
        <h1 className="latihan-soal1-title">Classification of Sentences Quiz</h1>
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