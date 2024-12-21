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
import Bing12b from './components/Bing12PPT';

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
        {/* Rute untuk Materi Inggris 11 */}
        <Route path="/Bing11b1" element={<Bgl11b1 />} />
        <Route path="/Bing11b2" element={<Bgl11b2 />} />
        <Route path="/Bing11b3" element={<Bgl11b3 />} />
        <Route path="/Bing11b4" element={<Bgl11b4 />} />
        <Route path="/Bing11b5" element={<Bgl11b5 />} />
        <Route path="/Bing11b6" element={<Bgl11b6 />} />
        <Route path="/Bing11b7" element={<Bgl11b7 />} />
        <Route path="/Bing11b8" element={<Bgl11b8 />} />
        <Route path="/Bing11b9" element={<Bgl11b5 />} />
        <Route path="/Bing11b10" element={<Bgl11b6 />} />
        {/* Rute untuk Materi Biologi 11 */}
        <Route path="/Kma11b1" element={<Bgl11b1 />} />
        <Route path="/Kma11b2" element={<Bgl11b2 />} />
        <Route path="/Kma11b3" element={<Bgl11b3 />} />
        <Route path="/Kma11b4" element={<Bgl11b4 />} />
        <Route path="/Kma11b5" element={<Bgl11b5 />} />
        <Route path="/Kma11b6" element={<Bgl11b6 />} />
        <Route path="/Kma11b7" element={<Bgl11b7 />} />
        <Route path="/Kma11b8" element={<Bgl11b8 />} />
        <Route path="/Kma11b9" element={<Bgl11b5 />} />
        {/* Rute untuk Materi Biologi 11 */}
        <Route path="/Kma12b1" element={<Bgl11b1 />} />
        <Route path="/Kma12b2" element={<Bgl11b2 />} />
        <Route path="/Kma12b3" element={<Bgl11b3 />} />
        <Route path="/Kma12b4" element={<Bgl11b4 />} />
        <Route path="/Kma12b5" element={<Bgl11b5 />} />
        <Route path="/Kma12b6" element={<Bgl11b6 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
