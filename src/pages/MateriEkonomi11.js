import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Materi.css';

const Materi = () => {
  const [biologies, setBiologies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const mockBiologies = [
      { id: 1, name: 'Pengantar Ekonomi',image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnvFGslaVYbEa8R6zGOQCDmTXzKlDtJd5oqw&s', category: 'Bab 1', link: '/Eko11b1' },
      { id: 2, name: 'Kebutuhan dan Kelangkaan', image: 'https://www.quipper.com/id/blog/wp-content/uploads/2021/10/Kelangkaan-dan-Kebutuhan-Manusia-1.webp', category: 'Bab 2', link: '/Eko11b2' },
      { id: 3, name: 'Sistem Ekonomi', image: 'https://img.inews.co.id/media/600/files/inews_new/2022/09/15/ilustrasi_sistem_ekonomi.jpg', category: 'Bab 3', link: '/Eko11b3' },
      { id: 4, name: 'Permintaan dan Penawaran', image: 'https://cdn0-production-images-kly.akamaized.net/m2O935cnlhab1zHY9UvpAwYzk5U=/0x629:7500x4856/800x450/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4348826/original/099805100_1678163171-20827466_Small_business_owner_shaking_hands_with_money_lender.jpg', category: 'Bab 4', link: '/Eko11b4' },
      { id: 5, name: 'Pasar Persaingan', image: 'https://asset.kompas.com/crops/jYANqcjpso8V2UcSJus8rK4dCgQ=/0x9:730x496/1200x800/data/photo/2022/01/03/61d2d2b63611a.jpg', category: 'Bab 5', link: '/Eko11b5' },
      { id: 6, name: 'Uang dan Perbankan', image: 'https://media.istockphoto.com/id/682621178/id/foto/konsep-keuangan-tumpukan-uang-dengan-gedung-bank-ilustrasi-3d.jpg?s=170667a&w=0&k=20&c=ZTBFGhXEgR2EWsJWnKyNOSjF0fqRqBoMIbw1tq32py0=', category: 'Bab 6', link: '/Eko11b6' },
      { id: 7, name: 'Inflasi', image: 'https://png.pngtree.com/png-clipart/20220404/original/pngtree-inflation-ilustration-design-png-image_7499594.png', category: 'Bab 7', link: '/Eko11b7' },
      { id: 8, name: 'Pertumbuhan Ekonomi', image : 'https://pojokbandung.com/wp-content/uploads/2024/02/21097-ilustrasi-pemulihan-ekonomi-nasional-shutterstock.jpg', category: 'Bab 8', link: '/Eko11b8' },
      { id: 9, name: 'Pembangunan Ekonomi', image: 'https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/2023/06/28/5139933-194353019.jpg', category: 'Bab 5', link: '/Eko11b9' },
      { id: 10, name: 'Perdagangan Internasional', image: 'https://cdn1-production-images-kly.akamaized.net/dcE4pohxJdxiBV2H5zOUxZiBDMU=/0x140:3000x1831/800x450/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4254992/original/005792000_1670557222-19962385_6206720.jpg', category: 'Bab 6', link: '/Eko11b10' },
      { id: 11, name: 'Kebijakan Ekonomi', image: 'https://feb.umsu.ac.id/wp-content/uploads/2023/05/pembangunan-ekonomi-750x375.png', category: 'Bab 7', link: '/Eko11b11' },
      { id: 12, name: 'Globalisasi Ekonomi', image : 'https://asset.kompas.com/crops/-x4SpqijBmemB-SNiagyh0qCpCA=/63x30:739x481/750x500/data/photo/2022/09/24/632ebaeb35015.jpg', category: 'Bab 8', link: '/Eko11b12' },
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
            <h2>Materi Ekonomi 11</h2>
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