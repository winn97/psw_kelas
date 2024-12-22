import React from "react";
import { useNavigate } from "react-router-dom";
import '../css/Bing11b4.css';

const Bab6 = () => {
  const navigate = useNavigate();
  return (
    <div className="bab1-container">
      <h1>Bab 6: Teks Prosedural</h1>

      <section>
        <h2>1. Pengertian Teks Prosedural</h2>
        <p>
          Teks prosedur adalah jenis tulisan yang memberikan petunjuk langkah demi langkah secara jelas tentang cara melakukan sesuatu atau menyelesaikan tugas tertentu. Tujuan utamanya adalah untuk membimbing pembaca melalui suatu proses secara sistematis dan tepat.
        </p>
        <p>
          Tujuan Utama:
        </p>
        <p>
          Untuk memberikan instruksi yang jelas dan berurutan.
          Untuk menjelaskan cara menyelesaikan tugas tertentu.
          Untuk memastikan pembaca dapat mengikuti proses dengan sukses.
          Untuk memecah tugas-tugas kompleks menjadi langkah-langkah yang dapat dikelola.
        </p>
      </section>

      <section>
        <h2>2. Struktur Teks Prosedural</h2>
        <h3>a. Sasaran/Tujuan</h3>
        <p>
          Menyatakan dengan jelas tujuan prosedur dan memberikan konteks tugas.
        </p>
        <h3>b. Alat dan Bahan</h3>
        <p>
          Mencantumkan segala sesuatu yang diperlukan untuk menyelesaikan tugas dan membantu pembaca mempersiapkan diri terlebih dahulu.
        </p>
        <h3>c. Petunjuk Langkah demi Langkah</h3>
        <p>
          Memberikan langkah-langkah yang jelas dan berurutan serta menggunakan kata kerja imperatif.
        </p>
      </section>

      <section>
        <h2>3. Karakteristik Teks Prosedural</h2>
        <h3>a. Kunci Utama</h3>
        <p>
          Menggunakan bahasa yang jelas dan lugas, memiliki urutan langkah yang logis, menggunakan instruksi yang tepat dan ringkas, berfokus pada panduan praktis.
        </p>
        <h3>b. Fitur Bahasa</h3>
        <p>
          Menggunakan Kata kerja imperatif(campurkan, tuangkan, panaskan), langkah-langkahnya bernomor atau berpoin, menggunakan kosakata teknis atau spesifik, menggunakan penanda waktu dan kata-kata berurutan.
        </p>
      </section>

      <section>
        <h2>4. Contoh Teks Prosedural</h2>
        <p>
          Contoh umum: Resep, manual pengguna, dan protokol eksperimen.
        </p>
        <h3>Contoh Teks Prosedur: Cara Membuat Pancake.</h3>
        <p><strong>Tujuan:</strong> Membuat pancake buatan sendiri yang lezat.</p>
        <p><strong>Bahan:</strong>
          - 1 cangkir tepung.
          - 2 sdm gula.
          - 2 sdt baking powder.
          - 1 butir telur.
          - 3/4 cangkir susu.
          - 2 sdm mentega cair.
        </p>
        <p><strong>Lngkah-langkah:</strong>
          1. Campur bahan kering dalam mangkuk.
          2. Kocok telur, susu, dan mentega cair di mangkuk lain.
          3. Campurkan bahan basah dan kering.
          4. Panaskan wajan dan tambahkan mentega.
          5. Tuang adonan dan masak hingga terbentuk gelembung.
          6. Balik dan masak sisi lainnya hingga berwarna keemasan.
        </p>
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

export default Bab6;