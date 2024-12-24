import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../css/QuestionPage.css";

const Tryout = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const alertShown = useRef(false);  

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn) {
      setIsAuthenticated(true);
    } else {
      if (!alertShown.current) {  
        alert("Anda harus login terlebih dahulu!");
        alertShown.current = true;  
      }
      navigate("/login");
    }
  }, [navigate]); 

  const questions = [
    {
      question: "Apa yang dimaksud dengan teori sel dalam biologi?",
      options: [
        { label: "A. Semua makhluk hidup tersusun dari sel", value: "A", isCorrect: true },
        { label: "B. Sel adalah unit fungsional terkecil dari organisme", value: "B" },
        { label: "C. Semua sel berasal dari sel sebelumnya", value: "C" },
        { label: "D. Semua jawaban benar", value: "D" },
      ],
      explanation:
        "Teori Sel menyatakan bahwa sel adalah unit struktural dan fungsional dasar dari makhluk hidup. Semua makhluk hidup tersusun dari satu atau lebih sel, dan semua fungsi kehidupan terjadi dalam sel.",
    },
    
    {
      question: "Apa fungsi utama dari membran sel dalam suatu sel?",
      options: [
        { label: "A. Mengatur keluar masuknya zat", value: "A", isCorrect: true },
        { label: "B. Menyimpan materi genetik", value: "B" },
        { label: "C. Menyintesis protein", value: "C" },
        { label: "D. Menghasilkan energi", value: "D" },
      ],
      explanation:
        "Membran sel berfungsi sebagai penghalang yang mengatur pergerakan zat-zat ke dalam dan keluar dari sel.",
    },
    {
      question: "Dimana sel-sel spermatzoa dimatangkan?",
      options: [
        { label: "A. Tubuli seminiferi", value: "A" },
        { label: "B. Ductus deferens", value: "B" },
        { label: "C. Epididymis", value: "C", isCorrect: true },
        { label: "D. Ductus afferens", value: "D" },
      ],
      explanation:
        "Sel-sel spermatzoa diproduksi di dalam tubulus seminiferus testis dan kemudian dipindahkan ke epididymis untuk proses pematangan.",
    },
    {
      question: "Proses pembelahan sel yang menghasilkan dua sel anak dengan jumlah kromosom yang sama seperti sel induknya adalah...",
      options: [
        { label: "A. Mitosis", value: "A", isCorrect: true },
        { label: "B. Meiosis", value: "B" },
        { label: "C. Pembelahan Biner", value: "C" },
        { label: "D. Fagositosis", value: "D" },
      ],
      explanation:
        "Mitosis adalah proses pembelahan sel yang menghasilkan dua sel anak dengan jumlah kromosom yang identik dengan sel induknya. Mitosis terdiri dari beberapa tahap yaitu profase, metafase, anafase, dan telofase.",
    },
    {
      question: "Jika sel kekurangan fungsi mitokondria, bagaimana hal tersebut mempengaruhi sel dan organisme secara keseluruhan?",
      options: [
        { label: "A. Sel tidak dapat memproduksi energi (ATP) yang cukup, mengganggu fungsi metabolisme sel", value: "A", isCorrect: true },
        { label: "B. Sel tidak dapat menghasilkan protein dengan efisien", value: "B" },
        { label: "C. Sel tidak dapat melakukan pembelahan sel", value: "C" },
        { label: "D. Sel kehilangan kemampuan untuk mengatur keluar masuknya zat", value: "D" },
      ],
      explanation:
        "Mitokondria berfungsi sebagai 'pembangkit tenaga' sel, memproduksi ATP melalui respirasi sel. Tanpa mitokondria yang berfungsi dengan baik, sel tidak dapat menghasilkan energi yang diperlukan untuk aktivitas metabolisme, yang akhirnya akan mempengaruhi kelangsungan hidup sel dan organisme secara keseluruhan.",
    },
    {
      question: "Dalam proses meiosis, terjadi pengurangan jumlah kromosom menjadi setengahnya. Apa tujuan utama dari proses ini dalam reproduksi seksual?",
      options: [
        { label: "A. Untuk menghasilkan sel-sel dengan jumlah kromosom yang sama dengan sel induk", value: "A" },
        { label: "B. Untuk memastikan variasi genetik pada keturunan", value: "B", isCorrect: true },
        { label: "C. Untuk mempercepat pembentukan sel-sel germinal", value: "C" },
        { label: "D. Untuk memperbaiki kerusakan DNA dalam sel germinal", value: "D" },
      ],
      explanation:
        "Meiosis menghasilkan sel-sel germinal (sel telur dan sperma) dengan jumlah kromosom setengah dari sel induknya, yang memungkinkan terjadinya rekombinasi genetik dan memastikan variasi genetik pada keturunan. Proses ini penting untuk mempertahankan keanekaragaman genetik dalam populasi.",
    },
    {
      question: "Apa fungsi dari ribosom dalam sel?",
      options: [
        { label: "A. Sintesis protein", value: "A", isCorrect: true },
        { label: "B. Menghasilkan energi", value: "B" },
        { label: "C. Mengatur pergerakan zat dalam sel", value: "C" },
        { label: "D. Menyimpan materi genetik", value: "D" },
      ],
      explanation:
        "Ribosom berfungsi dalam sintesis protein dengan membaca informasi yang ada pada mRNA dan menghubungkan asam amino untuk membentuk protein.",
    },
    {
      question: "Apa yang dimaksud dengan apoptosis?",
      options: [
        { label: "A. Pembelahan sel", value: "A" },
        { label: "B. Proses kematian sel terprogram", value: "B", isCorrect: true },
        { label: "C. Pembentukan jaringan baru", value: "C" },
        { label: "D. Proses pembentukan energi dalam sel", value: "D" },
      ],
      explanation:
        "Apoptosis adalah proses kematian sel terprogram yang penting dalam pengaturan jumlah sel dan menghilangkan sel-sel yang rusak atau tidak dibutuhkan.",
    },
    {
      question: "Apa peran dari kloroplas dalam sel tumbuhan?",
      options: [
        { label: "A. Menghasilkan energi", value: "A" },
        { label: "B. Menyintesis protein", value: "B" },
        { label: "C. Tempat fotosintesis", value: "C", isCorrect: true },
        { label: "D. Mengatur pergerakan zat", value: "D" },
      ],
      explanation:
        "Kloroplas berfungsi dalam proses fotosintesis, di mana energi cahaya diubah menjadi energi kimia dalam bentuk glukosa.",
    },
    {
      question: "Apa yang dimaksud dengan diferensiasi sel?",
      options: [
        { label: "A. Proses pembelahan sel", value: "A" },
        { label: "B. Proses perubahan sel menjadi bentuk dan fungsi yang lebih spesifik", value: "B", isCorrect: true },
        { label: "C. Proses pembentukan energi", value: "C" },
        { label: "D. Proses pembentukan jaringan baru", value: "D" },
      ],
      explanation:
        "Diferensiasi sel adalah proses di mana sel-sel tidak berdiferensiasi menjadi tipe sel yang lebih spesifik dengan fungsi tertentu dalam tubuh.",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  const handleTimeUp = () => {
    setShowResult(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="app">
      <h1>Tryout Bahasa Inggris Kelas X</h1>
      {showResult ? (
        <div className="result">
          <h2>Skor Anda: {score} / {questions.length}</h2>
          <p>Terima kasih telah mengikuti tryout!</p>
        </div>
      ) : (
        <>
          {/* <Timer duration={600} onTimeUp={handleTimeUp} />
          <Question 
            question={questions[currentQuestion].question} 
            options={questions[currentQuestion].options} 
            handleAnswer={handleAnswer} 
          /> */}
        </>
      )}
      <button onClick={handleLogout} className="logout-button">Logout</button>
    </div>
  );
};

export default Tryout;