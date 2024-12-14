import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function HomePage() {
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedClass, setSelectedClass] = useState(null);

  const subjects = {
    Fisika: {
      kelas10: ['Bab 1: Pengukuran', 'Bab 2: Gerak Lurus'],
      kelas11: ['Bab 1: Dinamika Rotasi', 'Bab 2: Fluida'],
      kelas12: ['Bab 1: Gelombang Elektromagnetik', 'Bab 2: Listrik Dinamis'],
    },
    Matematika: {
      kelas10: ['Bab 1: Persamaan Kuadrat', 'Bab 2: Fungsi'],
      kelas11: ['Bab 1: Trigonometri', 'Bab 2: Logaritma'],
      kelas12: ['Bab 1: Integral', 'Bab 2: Matriks'],
    },
    Biologi: {
      kelas10: ['Bab 1: Sel', 'Bab 2: Jaringan Tumbuhan'],
      kelas11: ['Bab 1: Sistem Pencernaan', 'Bab 2: Sistem Peredaran Darah'],
      kelas12: ['Bab 1: Genetika', 'Bab 2: Evolusi'],
    },
    Ekonomi: {
      kelas10: ['Bab 1: Kebutuhan dan Kelangkaan', 'Bab 2: Permintaan dan Penawaran'],
      kelas11: ['Bab 1: Akuntansi Dasar', 'Bab 2: Pasar Modal'],
      kelas12: ['Bab 1: Kebijakan Fiskal', 'Bab 2: Ekonomi Internasional'],
    },
    'Bahasa Inggris': {
      kelas10: ['Bab 1: Introduction', 'Bab 2: Descriptive Text'],
      kelas11: ['Bab 1: Narrative Text', 'Bab 2: Passive Voice'],
      kelas12: ['Bab 1: Discussion Text', 'Bab 2: Report Text'],
    },
    Kimia: {
      kelas10: ['Bab 1: Atom', 'Bab 2: Sistem Periodik'],
      kelas11: ['Bab 1: Termokimia', 'Bab 2: Laju Reaksi'],
      kelas12: ['Bab 1: Elektrokimia', 'Bab 2: Kimia Organik'],
    },
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4 text-primary">Website Materi Pelajaran SMA</h1>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {Object.keys(subjects).map((subject) => (
          <div className="col" key={subject}>
            <div className="card h-100 shadow-lg">
              <div className="card-body">
                <h5 className="card-title text-center">{subject}</h5>
                <p className="card-text text-center">Pilih Kelas untuk melanjutkan</p>
                <div className="d-flex justify-content-around">
                  {Object.keys(subjects[subject]).map((kelas) => (
                    <button
                      key={kelas}
                      className="btn btn-outline-primary"
                      onClick={() => {
                        setSelectedSubject(subject);
                        setSelectedClass(kelas);
                      }}
                    >
                      {kelas.replace('kelas', 'Kelas ')}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedSubject && selectedClass && (
        <div className="mt-4">
          <h3 className="text-success">{selectedClass.replace('kelas', 'Materi Kelas ')}</h3>
          <ul className="list-group">
            {subjects[selectedSubject][selectedClass].map((bab, index) => (
              <li key={index} className="list-group-item">{bab}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default HomePage;
