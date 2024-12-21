import React from "react";
// import KalUsaha from "../components/KalUsaha";
// import Video from "../components/Video";
import "../css/Fsk10b3.css";

const Bab3 = () => {
  return (
    <div className="usaha-container">
      <h1>Usaha dalam Fisika</h1>

      <section>
        <h2>Apa Itu Usaha?</h2>
        <p>
          Usaha adalah konsep penting dalam fisika yang digunakan untuk menggambarkan transfer energi akibat gaya yang bekerja pada suatu objek.
          Ketika sebuah benda berpindah akibat pengaruh gaya, maka usaha telah dilakukan.
        </p>
        <blockquote className="highlight">
          "Usaha tidak hanya tentang gaya, tapi juga tentang perpindahan!"
        </blockquote>
      </section>

      <section>
        <h2>Aplikasi Usaha dalam Kehidupan</h2>
        <ul>
          <li>
            <strong>Mengangkat Barang:</strong> Saat Anda mengangkat tas dari lantai ke meja, Anda melakukan usaha karena ada perpindahan benda dengan gaya tertentu.
          </li>
          <li>
            <strong>Mendorong Mobil:</strong> Saat Anda mendorong mobil yang mogok, usaha dilakukan untuk memindahkan mobil tersebut.
          </li>
          <li>
            <strong>Olahraga:</strong> Saat seseorang mengangkat barbel, otot memberikan gaya untuk mengatasi gravitasi, sehingga usaha dilakukan.
          </li>
        </ul>
      </section>

      <section>
        <h2>Fakta Menarik tentang Usaha</h2>
        <p>
          Fakta menarik lainnya terkait usaha dapat melibatkan konsep energi dan gaya dalam berbagai aktivitas sehari-hari, seperti pergerakan planet, mesin, dan lain sebagainya.
        </p>
      </section>

        <KalUsaha />
      <div className="bottom-container">
        <h2>Yuk, uji pemahamanmu dengan latihan soal!</h2>
        <button 
          className="btn-latihan"
          onClick={() => window.location.href = "/latihansoal3"}
        >
          Mulai Latihan Soal
        </button>
      </div>

      <div className="navigation-container">
      </div>
      <Video />
    </div>
  );
};

export default Bab3;