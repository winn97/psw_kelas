import React from "react";
import { useNavigate } from "react-router-dom";
import '../css/Bing11b4.css';

const Bab5 = () => {
  const navigate = useNavigate();
  return (
    <div className="bab1-container">
      <h1>Bab 5: Teks Naratif</h1>

      <section>
        <h2>1. Pengertian Teks Naratif</h2>
        <p>
          Teks naratif adalah jenis tulisan yang menceritakan sebuah cerita. Ini melibatkan penggunaan karakter, plot, latar, dan urutan peristiwa yang jelas untuk melibatkan dan menghibur pembaca. Tujuan utama teks naratif adalah untuk menghibur, tetapi juga dapat menginformasikan atau mengajarkan pelajaran moral.        </p>
        <p>
          Tujuan Utama:
        </p>
        <p>
          Untuk menghibur dan melibatkan penonton melalui bercerita.
          Untuk menyampaikan pesan atau pesan moral melalui cerita.
          Untuk mencerminkan nilai-nilai budaya dan tradisi.
          Untuk menginspirasi imajinasi dan kreativitas.
        </p>
      </section>

      <section>
        <h2>2. Struktur Teks Naratif</h2>
        <h3>a. Orientasi</h3>
        <p>
          Bagian yang berfungsi untuk memperkenalkan tokoh, latar, dan latar belakang cerita serta memberikan konteks yang diperlukan untuk memahami peristiwa-peristiwa berikutnya.
        </p>
        <h3>b. Komplikasi</h3>
        <p>
          Menyajikan masalah, konflik, atau tantangan yang dihadapi karakter dan membangun ketegangan dan membuat penonton tetap terlibat.
        </p>
        <h3>c. Resolusi</h3>
        <p>
          Menunjukkan bagaimana masalah atau konflik diselesaikan dan Seringkali memberikan pesan moral atau pelajaran.
        </p>
      </section>

      <section>
        <h2>3. Karakteristik Teks Naratif</h2>
        <h3>a. Kunci Utama</h3>
        <p>
          Urutan peristiwa dituliskan secara kronologis, berfokus pada tokoh dan perkembangannya, menggunakan bahasa deskriptif untuk menciptakan pencitraan, dan berisi dialog yangn berfungsi untuk menghidupkan tokoh.
        </p>
        <h3>b. Fitur Bahasa</h3>
        <p>
          Menggunakan bentuk lampau, menggunakan kata kerja tindakan untuk menggambarkan peristiwa, menggunakan ucapan langsung dan tidak langsung, dan menggunakan Kata sifat dan kata keterangan deskriptif.
        </p>
      </section>

      <section>
        <h2>4. Contoh Teks Naratif</h2>
        <p>
          Contoh umum: Cinderella, Putri Salju, Novel, dan cerita-cerita pendek
        </p>
        <h3>Contoh Dalam Paragraf</h3>
        <p><strong>Judul:</strong> Kelinci Kecil Pemberani</p>
        <p><strong>Orientasi:</strong> Pada suatu ketika, di sebuah hutan lebat, hiduplah seekor kelinci kecil bernama Ruby.</p>
        <p><strong>Komplikasi:</strong> Suatu hari, Ruby bertemu dengan serigala ganas yang mengancam keluarganya. Dia harus mengakalinya.</p>
        <p><strong>Resolusi:</strong> Dengan menggunakan kecerdasannya, Ruby menipu serigala tersebut agar jatuh ke dalam lubang yang dalam, menyelamatkan keluarganya dan menjadi pahlawan hutan.</p>
        <p><strong>Moral:</strong> Keberanian dan kecerdasan dapat mengatasi tantangan terbesar sekalipun.</p>
      </section>

      <div className="bottom-container">
        <h2>"Yuk, uji pemahamanmu dengan latihan soal! <br/>
        Siap mulai?"</h2>
        <button 
          className="btn-latihan"
          onClick={() => window.location.href = "/latihansoal1"}
        >
          Mulai Latihan Soal
        </button>
      </div>
   {/* Navigasi Halaman */}
   <div className="navigation-container">
        <button 
          className="btn-navigate"
          onClick={() => navigate("/materi")}
        >
          Kembali ke Halaman Sebelumnya
        </button>
        <button 
          className="btn-navigate"
          onClick={() => navigate("/bab2")}
        >
          Lanjut ke Bab Selanjutnya
        </button>
      </div>
    </div>
  );
};

export default Bab5;