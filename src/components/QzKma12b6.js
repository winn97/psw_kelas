import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./tryout.css";
import Timer from "./Timer";
import Question from "./Question";

const QzKma12b6 = () => {
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
    { question: "1. Dalam pembentukan polimer, ikatan kovalen terbentuk antara monomer-monomer yang berbeda. Proses ini disebut?", 
      options: ["Polimerisasi kondensasi", "Polimerisasi adisi", "Reaksi substitusi", "Reaksi eliminasi"], 
      answer: "Polimerisasi adisi" },
    
    { question: "2. Polimer termoplastik dapat melembek pada suhu tinggi. Fenomena ini terjadi karena?", 
      options: ["Ikatan antar rantai polimer bersifat kovalen", "Ikatan antar rantai polimer bersifat ionik", "Ikatan antar rantai polimer bersifat van der Waals", "Ikatan antar rantai polimer bersifat hidrogen"], 
      answer: "Ikatan antar rantai polimer bersifat van der Waals" },
  
    { question: "3. Polietilena, sebuah polimer plastik, memiliki rantai panjang yang terdiri dari monomer etilena. Apa jenis ikatan yang menghubungkan monomer dalam polietilena?", 
      options: ["Ikatan ionik", "Ikatan hidrogen", "Ikatan kovalen", "Ikatan logam"], 
      answer: "Ikatan kovalen" },
    
    { question: "4. Ketika selulosa dihidrolisis, senyawa yang terbentuk adalah?", 
      options: ["Glukosa", "Fruktosa", "Sukrosa", "Maltosa"], 
      answer: "Glukosa" },
    
    { question: "5. Manakah dari polimer berikut ini yang termasuk dalam kategori biopolimer?", 
      options: ["Polietilena", "Polipropilena", "Nilon", "Selulosa"], 
      answer: "Selulosa" },
    
    { question: "6. Protein terbuat dari asam amino yang terikat oleh ikatan peptida. Ikatan peptida tersebut terbentuk melalui proses?", 
      options: ["Polimerisasi kondensasi", "Polimerisasi adisi", "Reaksi hidrolisis", "Reaksi sublimasi"], 
      answer: "Polimerisasi kondensasi" },
    
    { question: "7. Proses pembentukan protein dari asam amino terjadi di bagian sel yang disebut?", 
      options: ["Mitokondria", "Retikulum endoplasma kasar", "Nukleus", "Lisosom"], 
      answer: "Retikulum endoplasma kasar" },
    
    { question: "8. Manakah dari berikut ini yang bukan merupakan contoh polimer alami?", 
      options: ["Polietilena", "Selulosa", "Starch", "Protein"], 
      answer: "Polietilena" },
    
    { question: "9. Reaksi pemecahan polimer menjadi monomer-penyusun disebut?", 
      options: ["Polimerisasi", "Kondensasi", "Hidrolisis", "Eliminasi"], 
      answer: "Hidrolisis" },
    
    { question: "10. Manakah yang bukan merupakan contoh dari polimer sintetis?", 
      options: ["Polietilena", "Nylon", "Polistirena", "Selulosa"], 
      answer: "Selulosa" },
    
    { question: "11. Pada polimer polietilen tereftalat (PET), kelompok ester terbentuk melalui reaksi kondensasi antara?", 
      options: ["Asam tereftalat dan etilen glikol", "Asam benzoat dan etilen glikol", "Asam asetik dan etilen glikol", "Asam format dan glukosa"], 
      answer: "Asam tereftalat dan etilen glikol" },
    
    { question: "12. Apa yang dimaksud dengan 'struktur primer' dalam protein?", 
      options: ["Urutan asam amino dalam rantai polipeptida", "Struktur tiga dimensi protein", "Pengaturan subunit dalam protein", "Ikatan antara dua rantai polipeptida"], 
      answer: "Urutan asam amino dalam rantai polipeptida" },
    
    { question: "13. Manakah yang merupakan contoh dari polimer yang digunakan dalam produksi plastik dan karet?", 
      options: ["Polypropylene", "Selulosa", "Keratin", "Chitosan"], 
      answer: "Polypropylene" },
    
    { question: "14. Bagaimana sifat mekanik dari polimer dengan struktur bercabang dibandingkan dengan polimer linier?", 
      options: ["Lebih kuat dan lebih tahan panas", "Lebih mudah terurai", "Lebih lentur dan mudah terbentuk", "Lebih keras dan lebih kaku"], 
      answer: "Lebih lentur dan mudah terbentuk" },
    
    { question: "15. Sebuah polimer yang terbuat dari dua jenis monomer disebut?", 
      options: ["Homopolimer", "Heteropolimer", "Kopolimer", "Polimerik"], 
      answer: "Kopolimer" },
    
    { question: "16. Dalam reaksi polimerisasi adisi, apa yang terjadi dengan ikatan rangkap pada monomer?", 
      options: ["Ikatan rangkap terpecah dan membentuk ikatan tunggal", "Ikatan rangkap bertahan dan tidak berubah", "Ikatan rangkap berubah menjadi ikatan tripel", "Ikatan rangkap terpisah dan menjadi dua polimer"], 
      answer: "Ikatan rangkap terpecah dan membentuk ikatan tunggal" },
    
    { question: "17. Polimer polivinil klorida (PVC) digunakan dalam berbagai produk. Proses yang digunakan untuk membuat PVC adalah?", 
      options: ["Polimerisasi adisi", "Polimerisasi kondensasi", "Reaksi sublimasi", "Reaksi eliminasi"], 
      answer: "Polimerisasi adisi" },
    
    { question: "18. Manakah dari protein berikut ini yang berfungsi sebagai enzim dalam tubuh?", 
      options: ["Hemoglobin", "Amilase", "Keratin", "Kolagen"], 
      answer: "Amilase" },
    
    { question: "19. Proses pembentukan enzim dari polipeptida yang terlipat menjadi struktur tiga dimensi disebut?", 
      options: ["Denaturasi", "Lipogenesis", "Lipolisis", "Lipofisis"], 
      answer: "Denaturasi" },
    
    { question: "20. Pada polimerisasi kondensasi, setiap monomer yang bergabung mengeluarkan molekul apa?", 
      options: ["Air", "Amonia", "Karbon dioksida", "Oksigen"], 
      answer: "Air" }
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
      <h1>Tryout Kimia Kelas XII: Benzena dan Turunannya</h1>
      {showResult ? (
        <div className="result">
          <h2>Skor Anda: {score} / {questions.length}</h2>
          <p>Terima kasih telah mengikuti tryout!</p>
        </div>
      ) : (
        <>
          <Timer duration={600} onTimeUp={handleTimeUp} />
          <Question 
            question={questions[currentQuestion].question} 
            options={questions[currentQuestion].options} 
            handleAnswer={handleAnswer} 
          />
        </>
      )}
      <button onClick={handleLogout} className="logout-button">Logout</button>
    </div>
  );
};

export default QzKma12b6;
