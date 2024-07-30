import React from 'react';
import QRCode from 'qrcode.react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Concurso from './components/concurso';
import './App.css';

function App() {
  const qrValue = `${window.location.origin}/concurso`;

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <h1>Bases Concurso</h1>
                <div className="qr-container">
                  <QRCode value={qrValue} size={256} />
                </div>
              </div>
            }
          />
          <Route path="/concurso" element={<Concurso />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
