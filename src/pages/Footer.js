import React from 'react';
import '../css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about">
          <h3>Tentang Kami</h3>
          <p>
            Ruang Belajar Cermat adalah platform edukasi online yang menyediakan materi pembelajaran dan kuis interaktif untuk membantu siswa belajar dengan lebih efektif.
          </p>
        </div>
        <div className="footer-section links">
          <h3>Link Cepat</h3>
          <ul>
            <li><a href="#beranda">Beranda</a></li>
            <li><a href="#materi">Materi</a></li>
            <li><a href="#kuis">Kuis</a></li>
            <li><a href="#kontak">Kontak Kami</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Ruang Belajar Cermat | Semua Hak Dilindungi</p>
      </div>
    </footer>
  );
};

export default Footer;
