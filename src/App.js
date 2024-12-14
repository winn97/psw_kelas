import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/HomePage';

// Mengimpor Bootstrap CSS dan JS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
    const [users, setUsers] = useState([]); // Menyimpan data pengguna

    // Fungsi untuk menambah pengguna
    const addUser = (user) => {
        setUsers([...users, user]);
    };

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage addUser={addUser} users={users} />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
