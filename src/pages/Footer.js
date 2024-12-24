import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons"; // Brand icons
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"; // Solid icon for email

const Footer = () => {
  return (
    <footer className="footer bg-light text-dark">
      <div className="container">
        <div className="row">
          <div className="col-md-6 footer-section about">
            <h3
              className="text-primary"
              style={{ fontSize: "1.75rem", fontWeight: "bold" }}
            >
              Tentang Kami
            </h3>
            <p style={{ fontSize: "1rem", lineHeight: "1.5", color: "black" }}>
              Ruang Belajar Cermat adalah platform edukasi online yang
              menyediakan materi pembelajaran dan kuis interaktif untuk membantu
              siswa belajar dengan lebih efektif.
            </p>
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

      {/* Social Media Icons Section */}
      <div className="text-center py-3">
        <a
          href="https://www.instagram.com/d4trpl_24?igsh=N284aTJ5MnV5NTB0"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "black", margin: "0 10px" }}
        >
          <FontAwesomeIcon icon={faInstagram} size="lg" />
        </a>
        <a
          href="https://www.facebook.com/share/19p9HV6dDK/?mibextid=wwXIfr"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "black", margin: "0 10px" }}
        >
          <FontAwesomeIcon icon={faFacebook} size="lg" />
        </a>
        <a
          href="jonathansimamoraa02@gmail.com"
          style={{ color: "black", margin: "0 10px" }}
        >
          <FontAwesomeIcon icon={faEnvelope} size="lg" />
        </a>
        <a
          href="https://youtube.com/@institutteknologidel1337?si=BnygPrEmuVdK2-eM"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "black", margin: "0 10px" }}
        >
          <FontAwesomeIcon icon={faYoutube} size="lg" />
        </a>
      </div>

      {/* Updated footer bottom section */}
      <div className="footer-bottom text-center py-3 bg-white text-dark">
        <p style={{ color: "black" }}>
          &copy; 2024 Ruang Belajar Cermat | DIV TRPL 2024
        </p>
      </div>
    </footer>
  );
};

export default Footer;
