import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Footer from './pages/Footer';
import Home from './pages/Home';

// Import page kelas dari berbagai mata pelajaran
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

// Import komponen tambahan
import Fisika10b1 from './components/Fsk10b1';
import Fisika10b2 from './components/Fsk10b2';
import Fisika10b3 from './components/Fsk10b3';
import Fisika10b4 from './components/Fsk10b4';
import Fisika10b5 from './components/Fsk10b5';
import Fisika10b6 from './components/Fsk10b6';
import Fisika10b7 from './components/Fsk10b7';
import Fisika11b1 from './components/Fsk11b1';
import Fisika11b2 from './components/Fsk11b2';
import Fisika11b3 from './components/Fsk11b3';
import Fisika11b4 from './components/Fsk11b4';
import Fisika11b5 from './components/Fsk11b5';
import Fisika11b6 from './components/Fsk11b6';
import Fisika12b1 from './components/Fsk12b1';
import Fisika12b2 from './components/Fsk12b2';
import Fisika12b3 from './components/Fsk12b3';
import Fisika12b4 from './components/Fsk12b4';
import Fisika12b5 from './components/Fsk12b5';
import Fisika12b6 from './components/Fsk12b6';
import Fisika12b7 from './components/Fsk12b7';
import Fisika12b8 from './components/Fsk12b8';
import Bgl11b1 from './components/Bgl11b1';
import Bgl11b2 from './components/Bgl11b2';
import Bgl11b3 from './components/Bgl11b3';
import Bgl11b4 from './components/Bgl11b4';
import Bgl11b5 from './components/Bgl11b5';
import Bgl11b6 from './components/Bgl11b6';
import Bgl11b7 from './components/Bgl11b7';
import Bgl11b8 from './components/Bgl11b8';
import Eko10b1 from './components/Eko10b1';
import Eko10b2 from './components/Eko10b2';
import Eko10b3 from './components/Eko10b3';
import Eko10b4 from './components/Eko10b4';
import Eko10b5 from './components/Eko10b5';
import Eko11b1 from './components/Eko11b1';
import Eko11b2 from './components/Eko11b2';
import Eko11b3 from './components/Eko11b3';
import Eko11b4 from './components/Eko11b4';
import Eko11b5 from './components/Eko11b5';
import Eko11b6 from './components/Eko11b6';
import Eko11b7 from './components/Eko11b7';
import Eko11b8 from './components/Eko11b8';
import Eko11b9 from './components/Eko11b9';
import Eko11b10 from './components/Eko11b10';
import Eko11b11 from './components/Eko11b11';
import Eko11b12 from './components/Eko11b12';
import Bing10b1 from './components/Bing10b1';
import Bing10b2 from './components/Bing10b2';
import Bing10b3 from './components/Bing10b3';
import Bing10b4 from './components/Bing10b4';
import Bing10b5 from './components/Bing10b5';
import Bing10b6 from './components/Bing10b6';
import Bing10b7 from './components/Bing10b7';
import Bing10b8 from './components/Bing10b8';
import Bing11b1 from './components/Bing11b1';
import Bing11b2 from './components/Bing11b2';
import Bing11b3 from './components/Bing11b3';
import Bing11b4 from './components/Bing11b4';
import Bing11b5 from './components/Bing11b5';
import Bing11b6 from './components/Bing11b6';
import Bing11b7 from './components/Bing11b7';
import Bing11b8 from './components/Bing11b8';
import Bing12b1 from './components/Bing12FC';
import Bing12b2 from './components/Bing12FP';
import Bing12b3 from './components/Bing12FPC';
import Bing12b4 from './components/Bing12PC';
import Bing12b5 from './components/Bing12PCT';
import Bing12b6 from './components/Bing12PP';
import Bing12b7 from './components/Bing12PPC';
import Bing12b8 from './components/Bing12PPCT';
import Bing12b9 from './components/Bing12PPT';
import Bing12b10 from './components/Bing12SF';
import Bing12b11 from './components/Bing12SP';
import Bing12b12 from './components/Bing12SPT';
import Kma10b1 from './components/Kma10b1';
import Kma10b2 from './components/Kma10b2';
import Kma10b3 from './components/Kma10b3';
import Kma10b4 from './components/Kma10b4';
import Kma10b5 from './components/Kma10b5';
import Kma11b1 from './components/Kma11b1';
import Kma11b2 from './components/Kma11b2';
import Kma11b3 from './components/Kma11b3';
import Kma11b4 from './components/Kma11b4';
import Kma11b5 from './components/Kma11b5';
import Kma11b6 from './components/Kma11b6';
import Kma11b7 from './components/Kma11b7';
import Kma11b8 from './components/Kma11b8';
import Kma11b9 from './components/Kma11b9';
import Kma12b1 from './components/Kma12b1';
import Kma12b2 from './components/Kma12b2';
import Kma12b3 from './components/Kma12b3';
import Kma12b4 from './components/Kma12b4';
import Kma12b5 from './components/Kma12b5';
import Kma12b6 from './components/Kma12b6';
import Mtk10b1 from './components/Mtk10b1';
import Mtk10b2 from './components/Mtk10b2';
import Mtk10b3 from './components/Mtk10b3';
import Mtk10b4 from './components/Mtk10b4';
import Mtk10b5 from './components/Mtk10b5';
import Mtk10b6 from './components/Mtk10b3';
import Mtk10b7 from './components/Mtk10b4';
import Mtk10b8 from './components/Mtk10b5';
import Mtk11b1 from './components/Mtk11b1';
import Mtk11b2 from './components/Mtk11b2';
import Mtk11b3 from './components/Mtk11b3';
import Mtk11b4 from './components/Mtk11b4';
import Mtk11b5 from './components/Mtk11b5';
import Mtk11b6 from './components/Mtk11b6';

import SlFisika10b1 from './components/SlFsk10b1';
import SlFisika10b2 from './components/SlFsk10b2';
import SlFisika10b3 from './components/SlFsk10b3';
import SlFisika10b4 from './components/SlFsk10b4';
import SlFisika10b5 from './components/SlFsk10b5';
import SlFisika10b6 from './components/SlFsk10b6';
import SlFisika10b7 from './components/SlFsk10b7';
import SlFisika11b1 from './components/SlFsk11b1';
import SlFisika11b2 from './components/SlFsk11b2';
import SlFisika11b3 from './components/SlFsk11b3';
import SlFisika11b4 from './components/SlFsk11b4';
import SlFisika11b5 from './components/SlFsk11b5';
import SlFisika11b6 from './components/SlFsk11b6';
import SlFisika12b1 from './components/SlFsk12b1';
import SlFisika12b2 from './components/SlFsk12b2';
import SlFisika12b3 from './components/SlFsk12b3';
import SlFisika12b4 from './components/SlFsk12b4';
import SlFisika12b5 from './components/SlFsk12b5';
import SlFisika12b6 from './components/SlFsk12b6';
import SlFisika12b7 from './components/SlFsk12b7';
import SlFisika12b8 from './components/SlFsk12b8';
import SlBgl11b1 from './components/SlBgl11b1';
import SlBgl11b2 from './components/SlBgl11b2';
import SlBgl11b3 from './components/SlBgl11b3';
import SlBgl11b4 from './components/SlBgl11b4';
import SlBgl11b5 from './components/SlBgl11b5';
import SlBgl11b6 from './components/SlBgl11b6';
import SlBgl11b7 from './components/SlBgl11b7';
import SlBgl11b8 from './components/SlBgl11b8';
// import SlEko10b1 from './components/SlEko10b1';
// import SlEko10b2 from './components/SlEko10b2';
// import SlEko10b3 from './components/SlEko10b3';
// import SlEko10b4 from './components/SlEko10b4';
// import SlEko10b5 from './components/SlEko10b5';
import SlEko11b1 from './components/SlEko11b1';
import SlEko11b2 from './components/SlEko11b2';
import SlEko11b3 from './components/SlEko11b3';
import SlEko11b4 from './components/SlEko11b4';
import SlEko11b5 from './components/SlEko11b5';
import SlEko11b6 from './components/SlEko11b6';
import SlEko11b7 from './components/SlEko11b7';
import SlEko11b8 from './components/SlEko11b8';
import SlEko11b9 from './components/SlEko11b9';
import SlEko11b10 from './components/SlEko11b10';
import SlEko11b11 from './components/SlEko11b11';
import SlEko11b12 from './components/SlEko11b12';
// import SlBing10b1 from './components/SlBing10b1';
// import SlBing10b2 from './components/SlBing10b2';
// import SlBing10b3 from './components/SlBing10b3';
// import SlBing10b4 from './components/SlBing10b4';
// import SlBing10b5 from './components/SlBing10b5';
// import SlBing10b6 from './components/SlSlBing10b6';
// import SlBing10b7 from './components/SlBing10b7';
// import SlBing10b8 from './components/SlBing10b8';
import SlBing11b1 from './components/SlBing11b1';
import SlBing11b2 from './components/SlBing11b2';
import SlBing11b3 from './components/SlBing11b3';
import SlBing11b4 from './components/SlBing11b4';
import SlBing11b5 from './components/SlBing11b5';
import SlBing11b6 from './components/Bing11b6';
import SlBing11b7 from './components/SlBing11b7';
import SlBing11b8 from './components/SlBing11b8';
// import SlBing12b1 from './components/SlBing12FC';
// import SlBing12b2 from './components/SlBing12FP';
// import SlBing12b3 from './components/SlBing12FPC';
// import SlBing12b4 from './components/SlBing12PC';
// import SlBing12b5 from './components/SlBing12PCT';
// import SlBing12b6 from './components/SlBing12PP';
// import SlBing12b7 from './components/SlBing12PPC';
// import SlBing12b8 from './components/SlBing12PPCT';
// import SlBing12b9 from './components/SlBing12PPT';
// import SlBing12b10 from './components/SlBing12SF';
// import SlBing12b11 from './components/SlBing12SP';
// import SlBing12b12 from './components/SlBing12SPT';
import SlKma10b1 from './components/SlKma10b1';
import SlKma10b2 from './components/SlKma10b2';
import SlKma10b3 from './components/SlKma10b3';
import SlKma10b4 from './components/SlKma10b4';
import SlKma10b5 from './components/SlKma10b5';
import SlKma11b1 from './components/SlKma11b1';
import SlKma11b2 from './components/SlKma11b2';
import SlKma11b3 from './components/SlKma11b3';
import SlKma11b4 from './components/SlKma11b4';
import SlKma11b5 from './components/SlKma11b5';
import SlKma11b6 from './components/SlKma11b6';
import SlKma11b7 from './components/SlKma11b7';
// import SlKma11b8 from './components/SlKma11b8';
// import SlKma11b9 from './components/SlKma11b9';
// import SlKma12b1 from './components/SlKma12b1';
// import SlKma12b2 from './components/SlKma12b2';
// import SlKma12b3 from './components/SlKma12b3';
// import SlKma12b4 from './components/SlKma12b4';
// import SlKma12b5 from './components/SlKma12b5';
// import SlKma12b6 from './components/SlKma12b6';
import SlMtk10b1 from './components/Mtk10b1';
import SlMtk10b2 from './components/Mtk10b2';
import SlMtk10b3 from './components/Mtk10b3';
import SlMtk10b4 from './components/Mtk10b4';
import SlMtk10b5 from './components/Mtk10b5';
import SlMtk10b6 from './components/Mtk10b3';
import SlMtk10b7 from './components/Mtk10b4';
import SlMtk10b8 from './components/Mtk10b5';
import SlMtk11b1 from './components/Mtk11b1';
import SlMtk11b2 from './components/Mtk11b2';
import SlMtk11b3 from './components/Mtk11b3';
import SlMtk11b4 from './components/Mtk11b4';
import SlMtk11b5 from './components/Mtk11b5';
import SlMtk11b6 from './components/Mtk11b6';


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
        {/* Rute untuk Materi Fisika 10 */}
        <Route path="/Fsk10b1" element={<Fisika10b1 />} />
        <Route path="/Fsk10b2" element={<Fisika10b2 />} />
        <Route path="/Fsk10b3" element={<Fisika10b3 />} />
        <Route path="/Fsk10b4" element={<Fisika10b4 />} />
        <Route path="/Fsk10b5" element={<Fisika10b5 />} />
        <Route path="/Fsk10b6" element={<Fisika10b6 />} />
        <Route path="/Fsk10b7" element={<Fisika10b7 />} />
        {/* Rute untuk Materi Fisika 11 */}
        <Route path="/Fsk11b1" element={<Fisika11b1 />} />
        <Route path="/Fsk11b2" element={<Fisika11b2 />} />
        <Route path="/Fsk11b3" element={<Fisika11b3 />} />
        <Route path="/Fsk11b4" element={<Fisika11b4 />} />
        <Route path="/Fsk11b5" element={<Fisika11b5 />} />
        <Route path="/Fsk11b6" element={<Fisika11b6 />} />
        {/* Rute untuk Materi Fisika 12 */}
        <Route path="/Fsk12b1" element={<Fisika12b1 />} />
        <Route path="/Fsk12b2" element={<Fisika12b2 />} />
        <Route path="/Fsk12b3" element={<Fisika12b3 />} />
        <Route path="/Fsk12b4" element={<Fisika12b4 />} />
        <Route path="/Fsk12b5" element={<Fisika12b5 />} />
        <Route path="/Fsk12b6" element={<Fisika12b6 />} />
        <Route path="/Fsk12b7" element={<Fisika12b7 />} />
        <Route path="/Fsk12b8" element={<Fisika12b8 />} />
        {/* Rute untuk Materi Biologi 11 */}
        <Route path="/Bgl11b1" element={<Bgl11b1 />} />
        <Route path="/Bgl11b2" element={<Bgl11b2 />} />
        <Route path="/Bgl11b3" element={<Bgl11b3 />} />
        <Route path="/Bgl11b4" element={<Bgl11b4 />} />
        <Route path="/Bgl11b5" element={<Bgl11b5 />} />
        <Route path="/Bgl11b6" element={<Bgl11b6 />} />
        <Route path="/Bgl11b7" element={<Bgl11b7 />} />
        <Route path="/Bgl11b8" element={<Bgl11b8 />} />
        {/* Rute untuk Materi Ekonomi 10 */}
        <Route path="/Eko10b1" element={<Eko10b1 />} />
        <Route path="/Eko10b2" element={<Eko10b2 />} />
        <Route path="/Eko10b3" element={<Eko10b3 />} />
        <Route path="/Eko10b4" element={<Eko10b4 />} />
        <Route path="/Eko10b5" element={<Eko10b5 />} />
        {/* Rute untuk Materi Ekonomi 11 */}
        <Route path="/Eko11b1" element={<Eko11b1 />} />
        <Route path="/Eko11b2" element={<Eko11b2 />} />
        <Route path="/Eko11b3" element={<Eko11b3 />} />
        <Route path="/Eko11b4" element={<Eko11b4 />} />
        <Route path="/Eko11b5" element={<Eko11b5 />} />
        <Route path="/Eko11b6" element={<Eko11b6 />} />
        <Route path="/Eko11b7" element={<Eko11b7 />} />
        <Route path="/Eko11b8" element={<Eko11b8 />} />
        <Route path="/Eko11b9" element={<Eko11b9 />} />
        <Route path="/Eko11b10" element={<Eko11b10 />} />
        <Route path="/Eko11b11" element={<Eko11b11 />} />
        <Route path="/Eko11b12" element={<Eko11b12 />} />
        {/* Rute untuk Materi Inggris 10 */}
        <Route path="/Bing10b1" element={<Bing10b1 />} />
        <Route path="/Bing10b2" element={<Bing10b2 />} />
        <Route path="/Bing10b3" element={<Bing10b3 />} />
        <Route path="/Bing10b4" element={<Bing10b4 />} />
        <Route path="/Bing10b5" element={<Bing10b5 />} />
        <Route path="/Bing10b6" element={<Bing10b6 />} />
        <Route path="/Bing10b7" element={<Bing10b7 />} />
        <Route path="/Bing10b8" element={<Bing10b8 />} />
        {/* Rute untuk Materi Inggris 11 */}
        <Route path="/Bing11b1" element={<Bing11b1 />} />
        <Route path="/Bing11b2" element={<Bing11b2 />} />
        <Route path="/Bing11b3" element={<Bing11b3 />} />
        <Route path="/Bing11b4" element={<Bing11b4 />} />
        <Route path="/Bing11b5" element={<Bing11b5 />} />
        <Route path="/Bing11b6" element={<Bing11b6 />} />
        <Route path="/Bing11b7" element={<Bing11b7 />} />
        <Route path="/Bing11b8" element={<Bing11b8 />} />
        {/* Rute untuk Materi Inggris 12 */}
        <Route path="/Bing12b1" element={<Bing12b1 />} />
        <Route path="/Bing12b2" element={<Bing12b2 />} />
        <Route path="/Bing12b3" element={<Bing12b3 />} />
        <Route path="/Bing12b4" element={<Bing12b4 />} />
        <Route path="/Bing12b5" element={<Bing12b5 />} />
        <Route path="/Bing12b6" element={<Bing12b6 />} />
        <Route path="/Bing12b7" element={<Bing12b7 />} />
        <Route path="/Bing12b8" element={<Bing12b8 />} />
        <Route path="/Bing12b9" element={<Bing12b9 />} />
        <Route path="/Bing12b10" element={<Bing12b10 />} />
        <Route path="/Bing12b11" element={<Bing12b11 />} />
        <Route path="/Bing12b12" element={<Bing12b12 />} />
        {/* Rute untuk Materi Kimia 10 */}
        <Route path="/Kma10b1" element={<Kma10b1 />} />
        <Route path="/Kma10b2" element={<Kma10b2 />} />
        <Route path="/Kma10b3" element={<Kma10b3 />} />
        <Route path="/Kma10b4" element={<Kma10b4 />} />
        <Route path="/Kma10b5" element={<Kma10b5 />} />
        {/* Rute untuk Materi Kimia 11 */}
        <Route path="/Kma11b1" element={<Kma11b1 />} />
        <Route path="/Kma11b2" element={<Kma11b2 />} />
        <Route path="/Kma11b3" element={<Kma11b3 />} />
        <Route path="/Kma11b4" element={<Kma11b4 />} />
        <Route path="/Kma11b5" element={<Kma11b5 />} />
        <Route path="/Kma11b6" element={<Kma11b6 />} />
        <Route path="/Kma11b7" element={<Kma11b7 />} />
        <Route path="/Kma11b8" element={<Kma11b8 />} />
        <Route path="/Kma11b9" element={<Kma11b9 />} />
        {/* Rute untuk Materi Kimia 12 */}
        <Route path="/Kma12b1" element={<Kma12b1 />} />
        <Route path="/Kma12b2" element={<Kma12b2 />} />
        <Route path="/Kma12b3" element={<Kma12b3 />} />
        <Route path="/Kma12b4" element={<Kma12b4 />} />
        <Route path="/Kma12b5" element={<Kma12b5 />} />
        <Route path="/Kma12b6" element={<Kma12b6 />} />
        {/* Rute untuk Materi Matematika 10 */}
        <Route path="/Mtk10b1" element={<Mtk10b1 />} />
        <Route path="/Mtk10b2" element={<Mtk10b2 />} />
        <Route path="/Mtk10b3" element={<Mtk10b3 />} />
        <Route path="/Mtk10b4" element={<Mtk10b4 />} />
        <Route path="/Mtk10b5" element={<Mtk10b5 />} />
        <Route path="/Mtk10b6" element={<Mtk10b6 />} />
        <Route path="/Mtk10b7" element={<Mtk10b7 />} />
        <Route path="/Mtk10b8" element={<Mtk10b8 />} />
        {/* Rute untuk Materi Matematika 11 */}
        <Route path="/Mtk11b1" element={<Mtk11b1 />} />
        <Route path="/Mtk11b2" element={<Mtk11b2 />} />
        <Route path="/Mtk11b3" element={<Mtk11b3 />} />
        <Route path="/Mtk11b4" element={<Mtk11b4 />} />
        <Route path="/Mtk11b5" element={<Mtk11b5 />} />
        <Route path="/Mtk11b6" element={<Mtk11b6 />} />

        {/* Rute untuk Materi Inggris 11 */}
        <Route path="/SlBing11b1" element={<SlBing11b1 />} />
        <Route path="/SlBing11b2" element={<SlBing11b2 />} />
        <Route path="/SlBing11b3" element={<SlBing11b3 />} />
        <Route path="/SlBing11b4" element={<SlBing11b4 />} />
        <Route path="/SlBing11b5" element={<SlBing11b5 />} />
        <Route path="/SlBing11b6" element={<SlBing11b6 />} />
        <Route path="/SlBing11b7" element={<SlBing11b7 />} />
        <Route path="/SlBing11b8" element={<SlBing11b8 />} />
        {/* Rute untuk Materi Biologi 11 */}
        <Route path="/SlBgl11b1" element={<SlBgl11b1 />} />
        <Route path="/SlBgl11b2" element={<SlBgl11b2 />} />
        <Route path="/SlBgl11b3" element={<SlBgl11b3 />} />
        <Route path="/SlBgl11b4" element={<SlBgl11b4 />} />
        <Route path="/SlBgl11b5" element={<SlBgl11b5 />} />
        <Route path="/SlBgl11b6" element={<SlBgl11b6 />} />
        <Route path="/SlBgl11b7" element={<SlBgl11b7 />} />
        <Route path="/SlBgl11b8" element={<SlBgl11b8 />} />
        {/* Rute untuk Materi Ekonomi 11 */}
        <Route path="/SlEko11b1" element={<SlEko11b1 />} />
        <Route path="/SlEko11b2" element={<SlEko11b2 />} />
        <Route path="/SlEko11b3" element={<SlEko11b3 />} />
        <Route path="/SlEko11b4" element={<SlEko11b4 />} />
        <Route path="/SlEko11b5" element={<SlEko11b5 />} />
        <Route path="/SlEko11b6" element={<SlEko11b6 />} />
        <Route path="/SlEko11b7" element={<SlEko11b7 />} />
        <Route path="/SlEko11b8" element={<SlEko11b8 />} />
        <Route path="/SlEko11b9" element={<SlEko11b9 />} />
        <Route path="/SlEko11b10" element={<SlEko11b10 />} />
        <Route path="/SlEko11b11" element={<SlEko11b11 />} />
        <Route path="/SlEko11b12" element={<SlEko11b12 />} />
        {/* Rute untuk Materi Fisika 10 */}
        <Route path="/SlFsk10b1" element={<SlFisika10b1 />} />
        <Route path="/SlFsk10b2" element={<SlFisika10b2 />} />
        <Route path="/SlFsk10b3" element={<SlFisika10b3 />} />
        <Route path="/SlFsk10b4" element={<SlFisika10b4 />} />
        <Route path="/SlFsk10b5" element={<SlFisika10b5 />} />
        <Route path="/SlFsk10b6" element={<SlFisika10b6 />} />
        <Route path="/slFsk10b7" element={<SlFisika10b7 />} />
        {/* Rute untuk Materi Fisika 11 */}
        <Route path="/SlFsk11b1" element={<SlFisika11b1 />} />
        <Route path="/SlFsk11b2" element={<SlFisika11b2 />} />
        <Route path="/SlFsk11b3" element={<slFisika11b3 />} />
        <Route path="/SlFsk11b4" element={<SlFisika11b4 />} />
        <Route path="/SlFsk11b5" element={<SlFisika11b5 />} />
        <Route path="/slFsk11b6" element={<SlFisika11b6 />} />
        {/* Rute untuk Materi Fisika 12 */}
        <Route path="/SlFsk12b1" element={<SlFisika12b1 />} />
        <Route path="/SlFsk12b2" element={<SlFisika12b2 />} />
        <Route path="/SlFsk12b3" element={<SlFisika12b3 />} />
        <Route path="/SlFsk12b4" element={<SlFisika12b4 />} />
        <Route path="/SlFsk12b5" element={<SlFisika12b5 />} />
        <Route path="/SlFsk12b6" element={<SlFisika12b6 />} />
        <Route path="/SlFsk12b7" element={<SlFisika12b7 />} />
        <Route path="/SlFsk12b8" element={<SlFisika12b8 />} />
        {/* Rute untuk Materi Kimia 10 */}
        <Route path="/SlKma10b1" element={<SlKma10b1 />} />
        <Route path="/SlKma10b2" element={<SlKma10b2 />} />
        <Route path="/SlKma10b3" element={<SlKma10b3 />} />
        <Route path="/SlKma10b4" element={<SlKma10b4 />} />
        <Route path="/SlKma10b5" element={<SlKma10b5 />} />
        {/* Rute untuk Materi Kimia 11 */}
        <Route path="/SlKma11b1" element={<SlKma11b1 />} />
        <Route path="/SlKma11b2" element={<SlKma11b2 />} />
        <Route path="/SlKma11b3" element={<SlKma11b3 />} />
        <Route path="/SlKma11b4" element={<SlKma11b4 />} />
        <Route path="/SlKma11b5" element={<SlKma11b5 />} />
        <Route path="/SlKma11b6" element={<SlKma11b6 />} />
        <Route path="/SlKma11b7" element={<SlKma11b7 />} />
        <Route path="/SlKma11b8" element={<SlBgl11b8 />} />
        <Route path="/SlKma11b9" element={<SlKma11b5 />} />
        {/* Rute untuk Materi Matematika 10 */}
        <Route path="/SlMtk10b1" element={<SlMtk10b1 />} />
        <Route path="/SlMtk10b2" element={<SlMtk10b2 />} />
        <Route path="/SlMtk10b3" element={<SlMtk10b3 />} />
        <Route path="/SlMtk10b4" element={<SlMtk10b4 />} />
        <Route path="/SlMtk10b5" element={<SlMtk10b5 />} />
        <Route path="/SlMtk10b6" element={<SlMtk10b6 />} />
        <Route path="/SlMtk10b7" element={<SlMtk10b7 />} />
        <Route path="/SlMtk10b8" element={<SlMtk10b8 />} />
        {/* Rute untuk Materi Matematika 11 */}
        <Route path="/SlMtk11b1" element={<SlMtk11b1 />} />
        <Route path="/SlMtk11b2" element={<SlMtk11b2 />} />
        <Route path="/SlMtk11b3" element={<SlMtk11b3 />} />
        <Route path="/SlMtk11b4" element={<SlMtk11b4 />} />
        <Route path="/SlMtk11b5" element={<SlMtk11b5 />} />
        <Route path="/SlMtk11b6" element={<SlMtk11b6 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
