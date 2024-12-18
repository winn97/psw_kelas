import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <h1>Ruang Belajar Cermat</h1>
      </div>
      <nav className="navbar-right">
        <ul className="nav-menu">
          <li><Link to="#beranda">Beranda</Link></li>
          <li className="dropdown">
            <span>Materi</span>
            <ul className="dropdown-content">
              {['Matematika', 'Biologi', 'Fisika', 'Kimia', 'Bahasa Inggris', 'Ekonomi'].map((subject) => (
                <li key={subject} className="sub-dropdown">
                  <span>{subject}</span>
                  <ul className="sub-dropdown-content">
                    {[10, 11, 12].map((kelas) => (
                      <li key={`${subject}-kelas-${kelas}`}>
                        <Link to={`/${subject.toLowerCase()}/kelas-${kelas}`}>Kelas {kelas}</Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </li>
          <li className="dropdown">
            <span>Kuis</span>
            <ul className="dropdown-content">
              {['Matematika', 'Biologi', 'Fisika', 'Kimia', 'Bahasa Inggris', 'Ekonomi'].map((subject) => (
                <li key={subject} className="sub-dropdown">
                  <span>{subject}</span>
                  <ul className="sub-dropdown-content">
                    {[10, 11, 12].map((kelas) => (
                      <li key={`${subject}-kelas-${kelas}-kuis`}>
                        <Link to={`/${subject.toLowerCase()}/kelas-${kelas}-kuis`}>Kelas {kelas}</Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </li>
          <li className="dropdown">
            <span>Latihan Soal</span>
            <ul className="dropdown-content">
              {['Matematika', 'Biologi', 'Fisika', 'Kimia', 'Bahasa Inggris', 'Ekonomi'].map((subject) => (
                <li key={subject} className="sub-dropdown">
                  <span>{subject}</span>
                  <ul className="sub-dropdown-content">
                    {[10, 11, 12].map((kelas) => (
                      <li key={`${subject}-kelas-${kelas}-latihan`}>
                        <Link to={`/${subject.toLowerCase()}/kelas-${kelas}-latihan`}>Kelas {kelas}</Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;