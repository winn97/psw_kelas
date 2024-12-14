import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/HomePage';
function App() {
    const [users, setUsers] = useState([]); // Menyimpan data pengguna

    // Fungsi untuk menambah pengguna
    const addUser = (user) => {
        setUsers([...users, user]);
    };

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage />} />
                
            </Routes>
        </BrowserRouter>
    );
}

export default App;
