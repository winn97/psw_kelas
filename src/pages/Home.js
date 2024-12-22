import React from "react";
import {
  FaBook,
  FaClipboardList,
  FaRegStar,
  FaChalkboardTeacher,
} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Home.css";

const Home = () => {
  return (
    <main className="container-fluid d-flex flex-column align-items-center justify-content-center min-vh-100">
      <section className="welcome-section text-center mb-5">
        <h1 className="display-3 text-primary font-weight-bold">
          Selamat Datang di Ruang Belajar Cermat!
        </h1>
        <p className="lead text-muted">
          Kami senang menyambut Anda di platform edukasi interaktif yang
          dirancang khusus untuk membantu Anda belajar dengan lebih mudah,
          menyenangkan, dan efektif.
        </p>
      </section>

      <section className="info-section row text-center">
        <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
          <div className="card shadow-lg border-0 rounded">
            <div className="card-body">
              <FaBook size={50} className="text-primary mb-3" />
              <h5 className="card-title font-weight-bold">Materi Lengkap</h5>
              <p className="card-text">
                Temukan berbagai materi pembelajaran dari kelas 10, 11, dan 12.
                Semua materi dikemas dalam format yang mudah dipahami.
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
          <div className="card shadow-lg border-0 rounded">
            <div className="card-body">
              <FaClipboardList size={50} className="text-primary mb-3" />
              <h5 className="card-title font-weight-bold">Kuis Interaktif</h5>
              <p className="card-text">
                Uji pemahaman Anda dengan beragam kuis seru dan menantang untuk
                setiap mata pelajaran favorit Anda.
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
          <div className="card shadow-lg border-0 rounded">
            <div className="card-body">
              <FaRegStar size={50} className="text-primary mb-3" />
              <h5 className="card-title font-weight-bold">
                Soal Latihan Menarik
              </h5>
              <p className="card-text">
                Kerjakan soal latihan yang bervariasi dan menarik untuk membantu
                Anda memahami materi dengan lebih mendalam.
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
          <div className="card shadow-lg border-0 rounded">
            <div className="card-body">
              <FaChalkboardTeacher size={50} className="text-primary mb-3" />
              <h5 className="card-title font-weight-bold">Bersama Kami</h5>
              <p className="card-text">
                Belajar menjadi lebih seru dengan panduan dari tim pengajar
                profesional dan sumber belajar berkualitas tinggi.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="motivation-section text-center mt-5">
       <h2 className="display-4 font-italic text-primary mb-3">
          <center> “Setiap hari adalah kesempatan baru untuk belajar sesuatu yang luar
          biasa.”</center>
        </h2>
        <p className="lead text-muted">
          Mari mulai perjalanan belajar Anda hari ini, tingkatkan pengetahuan,
          dan raih impian Anda bersama <strong>Ruang Belajar Cermat</strong>.
        </p>
      </section>
    </main>
  );
};

export default Home;
