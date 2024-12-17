import React from 'react';
import '../css/Navbar.css';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <h1>Ruang Belajar Cermat</h1>
      </div>
      <nav className="navbar-right">
        <ul className="nav-menu">
          <li><a href="#beranda">Beranda</a></li>
          <li className="dropdown">
            <span>Materi</span>
            <ul className="dropdown-content">
              {['Matematika', 'Biologi', 'Fisika', 'Kimia', 'Bahasa Inggris'].map((subject) => (
                <li key={subject} className="sub-dropdown">
                  <span>{subject}</span>
                  <ul className="sub-dropdown-content">
                    {[10, 11, 12].map((kelas) => (
                      <li key={`${subject}-kelas-${kelas}`}><a href={`#${subject.toLowerCase()}-kelas-${kelas}`}>Kelas {kelas}</a></li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </li>
          <li className="dropdown">
            <span>Kuis</span>
            <ul className="dropdown-content">
              {['Matematika', 'Biologi', 'Fisika', 'Kimia', 'Bahasa Inggris'].map((subject) => (
                <li key={subject} className="sub-dropdown">
                  <span>{subject}</span>
                  <ul className="sub-dropdown-content">
                    {[10, 11, 12].map((kelas) => (
                      <li key={`${subject}-kelas-${kelas}-kuis`}><a href={`#${subject.toLowerCase()}-kelas-${kelas}-kuis`}>Kelas {kelas}</a></li>
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
