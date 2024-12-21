import React from "react";
import { useNavigate } from "react-router-dom";
import '../css/Bgl11b1.css';

const Bab7 = () => {
  const navigate = useNavigate();
  return (
    <div className="bab1-container">
      <h1>Bab 7: Teks Eksposisi</h1>

      <section>
        <h2>1. Pengertian Teks Eksposisi</h2>
        <p>
          Teks eksposisi adalah jenis tulisan yang dirancang untuk menjelaskan, mendeskripsikan, atau menginformasikan kepada pembaca tentang suatu topik tertentu. Tujuan utamanya adalah untuk memberikan informasi yang jelas dan faktual serta meningkatkan pemahaman pembaca tentang suatu subjek.        </p>
        <p>
          Tujuan Utama:
        </p>
        <p>
          Untuk memberikan informasi rinci tentang suatu topik.
          Untuk menjelaskan konsep atau proses yang kompleks.
          Untuk mendidik pembaca melalui informasi yang obyektif.
          Untuk menganalisis dan memperjelas ide secara sistematis.
        </p>
      </section>

      <section>
        <h2>2. Struktur Teks Eksposisi</h2>
        <h3>a. Pernyataan Umum</h3>
        <p>
          Memperkenalkan topik atau subjek utama dan memberikan gambaran umum tentang apa yang akan dijelaskan.
        </p>
        <h3>b. Penjelasan</h3>
        <p>
          Menyajikan informasi rinci tentang topik dan memecah ide-ide kompleks menjadi bagian-bagian yang dapat dimengerti.
        </p>
        <h3>c. Klarifikasi</h3>
        <p>
          Memberikan wawasan atau contoh lebih lanjut dan memastikan pemahaman lengkap tentang topik tersebut.
        </p>
      </section>

      <section>
        <h2>3. Karakteristik Teks Eksposisi</h2>
        <h3>a. Kunci Utama</h3>
        <p>
          menggunakan penyajian yang bersifat obyektif dan faktual, pengorganisasian dilakukan secara logis dan sistematis, menggunakan bahasa yang jelas dan tepat, dan berfokus pada pemberian informasi dibandingkan hiburan.
        </p>
        <h3>b. Fitur Bahasa</h3>
        <p>
          Menggunakan kosakata yang teknis dan spesifik, menggunakan kalimat pasif dan nada impersonal, menggunakan penjelasan sebab akibat, menggunakan bahasa komparatif dan analitis.
        </p>
      </section>

      <section>
        <h2>4. Contoh Teks Eksposisi</h2>
        <p>
          Contoh umum: Artikel dan laporan ilmiah, ensiklopediap, dan deskripsi proses.
        </p>
        <h3>Contoh Teks Eksposisi</h3>
        <p><strong>Judul:</strong> Fotosintesis: Proses Penting</p>
        <p><strong>Pernyataan umum:</strong>Fotosintesis adalah proses biokimia kompleks yang penting bagi kehidupan di Bumi.</p>
        <p><strong>Penjelasan:</strong> Tumbuhan mengubah sinar matahari, air, dan karbon dioksida menjadi glukosa dan oksigen melalui serangkaian reaksi kimia di kloroplasnya.</p>
        <p><strong>Klarifikasi:</strong> Proses ini tidak hanya menyediakan energi bagi tanaman tetapi juga menghasilkan oksigen sebagai produk sampingan, yang penting bagi sebagian besar bentuk kehidupan.</p>
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

export default Bab7;