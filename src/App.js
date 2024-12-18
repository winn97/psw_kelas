import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Footer from './pages/Footer';
import Home from './pages/Home';

// Import komponen kelas dari berbagai mata pelajaran
import MatematikaKelas10 from './pages/MateriMTK10';
import MatematikaKelas11 from './pages/MateriMTK11';
import MatematikaKelas12 from './pages/MateriMTK12';
import BiologiKelas10 from './pages/MateriBiologi10';
import BiologiKelas11 from './pages/MateriBiologi11';
import BiologiKelas12 from './pages/MateriBiologi12';
import FisikaKelas10 from './pages/MateriFisika10';
import FisikaKelas11 from './pages/MateriFisika11';
import FisikaKelas12 from './pages/MateriFisika12';
import KimiaKelas10 from './pages/MateriKimia10';
import KimiaKelas11 from './pages/MateriKimia11';
import KimiaKelas12 from './pages/MateriKimia12';
import BahasaInggrisKelas10 from './pages/MateriBing10';
import BahasaInggrisKelas11 from './pages/MateriBing11';
import BahasaInggrisKelas12 from './pages/MateriBing12';
import EkonomiKelas10 from './pages/MateriEkonomi10';
import EkonomiKelas11 from './pages/MateriEkonomi11';
import EkonomiKelas12 from './pages/MateriEkonomi12';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Rute untuk Matematika */}
        <Route path="/matematika/kelas-10" element={<MatematikaKelas10 />} />
        <Route path="/matematika/kelas-11" element={<MatematikaKelas11 />} />
        <Route path="/matematika/kelas-12" element={<MatematikaKelas12 />} />
        {/* Rute untuk Biologi */}
        <Route path="/biologi/kelas-10" element={<BiologiKelas10 />} />
        <Route path="/biologi/kelas-11" element={<BiologiKelas11 />} />
        <Route path="/biologi/kelas-12" element={<BiologiKelas12 />} />
        {/* Rute untuk Fisika */}
        <Route path="/fisika/kelas-10" element={<FisikaKelas10 />} />
        <Route path="/fisika/kelas-11" element={<FisikaKelas11 />} />
        <Route path="/fisika/kelas-12" element={<FisikaKelas12 />} />
        {/* Rute untuk Kimia */}
        <Route path="/kimia/kelas-10" element={<KimiaKelas10 />} />
        <Route path="/kimia/kelas-11" element={<KimiaKelas11 />} />
        <Route path="/kimia/kelas-12" element={<KimiaKelas12 />} />
        {/* Rute untuk Bahasa Inggris */}
        <Route path="/bahasa-inggris/kelas-10" element={<BahasaInggrisKelas10 />} />
        <Route path="/bahasa-inggris/kelas-11" element={<BahasaInggrisKelas11 />} />
        <Route path="/bahasa-inggris/kelas-12" element={<BahasaInggrisKelas12 />} />
        {/* Rute untuk Ekonomi */}
        <Route path="/ekonomi/kelas-10" element={<EkonomiKelas10 />} />
        <Route path="/ekonomi/kelas-11" element={<EkonomiKelas11 />} />
        <Route path="/ekonomi/kelas-12" element={<EkonomiKelas12 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
