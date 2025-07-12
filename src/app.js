import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HelicsLanding from './components/HelicsLanding';
import HelicsApp from './components/HelicsApp';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Landing Page Route */}
          <Route path="/" element={<HelicsLanding />} />
          
{/*       
          <Route path="/app/*" element={<HelicsApp />} />
          <Route path="/dashboard" element={<Navigate to="/app" replace />} /> */}
          
          {/* Fallback route */}
          {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;