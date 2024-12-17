import React from 'react';
import '../css/Home.css';

const Home = () => {
  return (
    <main className="content">
      <section className="welcome-section">
        <h1 className="welcome-title">Selamat Datang di Ruang Belajar Cermat!</h1>
        <p className="welcome-message">
          Kami senang menyambut Anda di platform edukasi interaktif yang dirancang khusus 
          untuk membantu Anda belajar dengan lebih mudah, menyenangkan, dan efektif.
        </p>
      </section>

      <section className="info-section">
        <div className="info-card">
          <h2>Materi Lengkap</h2>
          <p>
            Temukan berbagai materi pembelajaran dari kelas 10, 11, dan 12. Semua materi 
            dikemas dalam format yang mudah dipahami.
          </p>
        </div>

        <div className="info-card">
          <h2>Kuis Interaktif</h2>
          <p>
            Uji pemahaman Anda dengan beragam kuis seru dan menantang untuk setiap mata 
            pelajaran favorit Anda.
          </p>
        </div>

        <div className="info-card">
          <h2>Soal Latihan Menarik</h2>
          <p>
            Kerjakan soal latihan yang bervariasi dan menarik untuk membantu Anda
            memahami materi dengan lebih mendalam.
          </p>
        </div>
        
        <div className="info-card">
          <h2>Bersama Kami</h2>
          <p>
            Belajar menjadi lebih seru dengan panduan dari tim pengajar profesional 
            dan sumber belajar berkualitas tinggi.
          </p>
        </div>

      </section>

      <section className="motivation-section">
        <h2 className="motivation-title">“Setiap hari adalah kesempatan baru untuk belajar sesuatu yang luar biasa.”</h2>
        <p>
          Mari mulai perjalanan belajar Anda hari ini, tingkatkan pengetahuan, dan raih 
          impian Anda bersama <b>Ruang Belajar Cermat</b>.
        </p>
      </section>
    </main>
  );
};

export default Home;
