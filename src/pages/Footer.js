import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer bg-light text-dark">
      <div className="container">
        <div className="row">
          <div className="col-md-6 footer-section about">
            <div className="col-md-6 footer-section about">
              <h3
                className="text-primary"
                style={{ fontSize: "1.75rem", fontWeight: "bold" }}
              >
                Tentang Kami
              </h3>
              <p
                style={{ fontSize: "1rem", lineHeight: "1.5", color: "black" }}
              >
                Ruang Belajar Cermat adalah platform edukasi online yang
                menyediakan materi pembelajaran dan kuis interaktif untuk
                membantu siswa belajar dengan lebih efektif.
              </p>
            </div>
          </div>
          <div className="col-md-6 footer-section links">
            <h3 className="text-primary">Link Cepat</h3>
            <ul className="list-unstyled">
              <li>
                <a href="#beranda" className="text-dark">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#materi" className="text-dark">
                  Materi
                </a>
              </li>
              <li>
                <a href="#kuis" className="text-dark">
                  Kuis
                </a>
              </li>
              <li>
                <a href="#kontak" className="text-dark">
                  Kontak Kami
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom text-center py-3 bg-secondary text-white">
        <p>&copy; 2024 Ruang Belajar Cermat | DIV TRPL 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
