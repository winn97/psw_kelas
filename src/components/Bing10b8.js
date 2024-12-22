import React from "react";
import { useNavigate } from "react-router-dom";
import '../css/Bgl11b1.css';

const Bab8 = () => {
  const navigate = useNavigate();
  return (
    <div className="bab1-container">
      <h1>Bab 8: Teks Laporan</h1>

      <section>
        <h2>1. Pengertian Teks Laporan</h2>
        <p>
          Teks laporan adalah jenis tulisan informatif yang secara sistematis menggambarkan dan menjelaskan suatu topik, fenomena, atau subjek tertentu. Tujuan utamanya adalah untuk memberikan informasi faktual dan objektif untuk memberi informasi dan mendidik pembaca.
        </p>
        <p>
          Tujuan Utama:
        </p>
        <p>
          Untuk memberikan informasi komprehensif tentang topik tertentu.
          Untuk menggambarkan fenomena alam, sosial, atau ilmiah.
          Untuk menyajikan informasi yang faktual dan obyektif.
          Untuk menganalisis dan menjelaskan subjek yang kompleks.
        </p>
      </section>

      <section>
        <h2>2. Struktur Teks Laporan</h2>
        <h3>a. Klasifikasi Umum</h3>
        <p>
          Memperkenalkan topik atau subjek yang sedang dibahas dan memberikan gambaran luas tentang subjek tersebut.
        </p>
        <h3>b. Deskripsi</h3>
        <p>
          Menawarkan informasi rinci tentang aspek spesifik dari topik dan memecah karakteristik, fungsi, atau perilaku
        </p>
      </section>

      <section>
        <h2>3. Karakteristik Teks Laporan</h2>
        <h3>a. Kunci Utama</h3>
        <p>
          Presentasi dilakukan secara obyektif dan faktual, memiliki organisasi yang logis dan sistematis, berfokus pada informasi dan analisis, menggunakan kosakata teknis atau khusus.
        </p>
        <h3>b. Fitur Bahasa</h3>
        <p>
          Menggunakan bentuk present tense, menggunakan bahasa yang teknis dan tepat, memiliki nada formal, menggunakan gaya obyektif dan impersonal.
        </p>
      </section>

      <section>
        <h2>4. Contoh Teks Laporan</h2>
        <p>
          Contoh umum: Makalah penelitian ilmiah, dokumentasi satwa liar dan alam, dan manual teknis.
        </p>
        <h3>Contoh Teks Eksposisi</h3>
        <p><strong>Judul:</strong> Ekosistem Lebah Madu.</p>
        <p><strong>Klasifikasi Umum:</strong> Lebah madu merupakan penyerbuk penting dalam ekosistem global dan termasuk dalam famili Apidae.</p>
        <p><strong>Deskripsi:</strong> Serangga ini hidup dalam struktur sosial yang kompleks dengan peran berbeda. Lebah pekerja mengumpulkan nektar, memelihara sarang, dan melindungi koloni. Ratu bertanggung jawab atas reproduksi, sedangkan drone kawin dengan ratu dari koloni lain.</p>
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

export default Bab8;