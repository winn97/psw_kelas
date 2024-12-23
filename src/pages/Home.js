import React from "react";
import {
  FaCalculator,
  FaChalkboardTeacher,
  FaBook,
  FaLaptopCode,
  FaQuestionCircle,
  FaTeamspeak,
} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

function Home() {
  return (
    <div
      className="bg-light min-vh-100 d-flex flex-column align-items-center text-center"
      style={{
        paddingTop: "5rem",
        overflowX: "hidden",
      }}
    >
      {/* Header Section */}
      <header className="mb-5" style={{ maxWidth: "800px" }}>
        <h1
          className="text-primary fw-bold animated-title"
          style={{
            fontSize: "3rem",
            lineHeight: "1.2",
            marginBottom: "1rem",
          }}
        >
          <FaCalculator size={40} className="me-2 animated-icon" />R U A N G B E
          L A J A R C E R M A T
        </h1>
        <p
          className="text-muted fs-4 animated-subtitle"
          style={{ marginBottom: "1.5rem" }}
        >
          Kumpulan Materi dan Soal-Soal
        </p>
        <p
          className="text-dark fs-5 animated-description"
          style={{
            margin: "0 auto",
            fontSize: "1.2rem",
            lineHeight: "1.6",
            color: "#555",
          }}
        >
          Platform belajar materi SMA yang interaktif, seru, dan cerdas!
        </p>
      </header>

      {/* Call to Action Button */}
      <footer className="mt-4 mb-5">
        <button
          className="btn btn-primary btn-lg px-5 py-2 shadow"
          onClick={() => (window.location.href = "/materi")}
        >
          Mulai Belajar
        </button>
      </footer>

      {/* Feature Section */}
      <section className="container text-center">
        <div className="row g-4">
          <div className="col-lg-4 col-md-6">
            <div className="card border-0 shadow p-4 h-100 bg-white rounded">
              <FaChalkboardTeacher size={50} className="text-success mb-3" />
              <h4 className="text-primary">Materi Lengkap</h4>
              <p className="text-muted">
                Temukan berbagai macam materi pelajaran yang disajikan dengan
                cara yang menyenangkan dan interaktif dari kelas 10, 11, dan 12.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="card border-0 shadow p-4 h-100 bg-white rounded">
              <FaBook size={50} className="text-warning mb-3" />
              <h4 className="text-primary">Kuis Interaktif</h4>
              <p className="text-muted">
                Uji pemahaman Anda dengan beragam kuis interaktif yang dirancang
                untuk meningkatkan kemampuan belajar Anda.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="card border-0 shadow p-4 h-100 bg-white rounded">
              <FaQuestionCircle size={50} className="text-danger mb-3" />
              <h4 className="text-primary">Soal Latihan Menarik</h4>
              <p className="text-muted">
                Kerjakan soal latihan yang menarik dan menantang untuk
                meningkatkan kemampuan belajar Anda.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="card border-0 shadow p-4 h-100 bg-white rounded">
              <FaTeamspeak size={50} className="text-info mb-3" />
              <h4 className="text-primary">Bersama Kami</h4>
              <p className="text-muted">
                Belajar menjadi lebih seru dengan panduan dari tim pengajar
                kami.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
