import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ProfileNathanael from './ProfileNathanael';

function App() {
  return (
    <Router>
      <Routes>
        {/* Jika buka localhost:3000 biasa, arahkan ke halaman profilmu */}
        <Route path="/" element={<Navigate to="/nathanael" replace />} />
        
        {/* URL spesifik untuk halamanmu */}
        <Route path="/nathanael" element={<ProfileNathanael />} />
        
        {/* Nanti temanmu bisa tambahkan route mereka di sini */}
        {/* <Route path="/surya" element={<ProfileSurya />} /> */}
      </Routes>
    </Router>
  );
}

export default App;