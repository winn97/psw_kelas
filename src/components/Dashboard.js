import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Dashboard = () => {
  return (
    <div className="container mt-5">
      <h2>Dashboard</h2>
      <p>Selamat datang di dashboard mata pelajaran fisika kelas 12!</p>
      <Link to="/materi" className="btn btn-primary">Lihat Materi</Link>
    </div>
  );
};

export default Dashboard;
