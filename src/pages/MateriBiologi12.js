import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Materi.css';

const Materi = () => {
  const [biologies, setBiologies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const mockBiologies = [
      { id: 1, name: 'Pertumbuhan dan Perkembangan ',image: 'https://i.pinimg.com/474x/82/8b/c2/828bc29de6908e8804326e3a368cfc3e.jpg', category: 'Bab 1', link: '/bab1' },
      { id: 2, name: ' Enzim dan Metabolisme Organisme', image: 'https://i.pinimg.com/474x/58/be/61/58be61dfbf92934a225e4ce597486fae.jpg', category: 'Bab 2', link: '/bab2' },
      { id: 3, name: ' Substansi Materi Genetika', image: 'https://i.pinimg.com/736x/3d/0a/83/3d0a8341a06d9f615b1c6d30d4ecf505.jpg', category: 'Bab 3', link: '/bab3' },
      { id: 4, name: ' Reproduksi Sel', image: 'https://i.pinimg.com/736x/90/49/3f/90493fc7687aa2cf8561fd8171d4dbe3.jpg', category: 'Bab 4', link: '/bab4' },
      { id: 5, name: ' Pembelahan Sel dan Pewarisan Sifat ', image: 'https://i.pinimg.com/474x/3a/8b/9f/3a8b9f04d9ff13c17923bec1c54d29b7.jpg', category: 'Bab 5', link: '/bab5' },
      { id: 6, name: ' Pola-pola Hereditas', image: 'https://i.pinimg.com/474x/4f/ac/2a/4fac2a0e5f3a65bdd83a4f2551b41fdf.jpg', category: 'Bab 6', link: '/bab6' },
      { id: 7, name: ' Evolusi ', image: 'https://i.pinimg.com/474x/a0/1d/7c/a01d7cf27b6420aa6f41e328cd083bf1.jpg', category: 'Bab 7', link: '/bab7' },
      { id: 8, name: ' Bioteknologi ', image : 'https://i.pinimg.com/474x/a3/76/5e/a3765ef5708031d85afdac99e84c65e7.jpg', category: 'Bab 8', link: '/bab8' },
      { id: 9, name: 'Mutasi ', image : 'https://i.pinimg.com/474x/7a/dd/79/7add790f818645bc272be35e824f1966.jpg', category: 'Bab 9', link: '/bab9' },
    ];

    setBiologies(mockBiologies);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          } else {
            entry.target.classList.remove('show');
          }
        });
      },
      { threshold: 0.1 }
    );

    const hiddenElements = document.querySelectorAll('.biologi-biology-card');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <div className="biologi-biology-section">
        <div className="container">
          <div className="section-header">
            <h2>Materi Biologi 12</h2>
          </div>
          <div className="biology-grid">
            {biologies.map((biology) => (
              <div key={biology.id} className="biologi-biology-card">
                <div className="card-image">
                  <img src={biology.image} alt={biology.name} />
                  <div className="card-category">{biology.category}</div>
                </div>
                <div className="card-content">
                  <h3>{biology.name}</h3>
                  <p>{biology.description}</p>
                  <button
                    className="detail-btn"
                    onClick={() => navigate(biology.link)}
                  >
                    Lihat Detail
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Materi;