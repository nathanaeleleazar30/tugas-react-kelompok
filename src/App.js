import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ProfileNathanael from './ProfileNathanael';
import ProfileRaihan from './ProfileRaihan'; // <-- 1. Ini tambahan import untuk profilmu

function App() {
  return (
    <Router>
      <Routes>
        {/* Jika buka localhost:3000 biasa, arahkan ke halaman profil ketua */}
        <Route path="/" element={<Navigate to="/nathanael" replace />} />
        
        {/* URL spesifik untuk halaman Nathanael */}
        <Route path="/nathanael" element={<ProfileNathanael />} />
        
        {/* URL spesifik untuk halamanmu (Raihan) */}
        <Route path="/raihan" element={<ProfileRaihan />} /> {/* <-- 2. Ini tambahan rute untukmu */}
        
        {/* Nanti temanmu bisa tambahkan route mereka di sini */}
        {/* <Route path="/surya" element={<ProfileSurya />} /> */}
      </Routes>
    </Router>
  );
}

export default App;