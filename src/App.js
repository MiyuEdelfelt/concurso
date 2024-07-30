import React from 'react';
import QRCode from 'qrcode.react';
import './App.css'; 

function App() {
  const imageUrl = 'https://www.dropbox.com/scl/fi/gn3x5fgui028szhg7v9tr/bases-concurso.jpg?rlkey=lm0a0uhu31vjc6c16tvaq25vo&st=80f2y4sl&dl=0'; 

  return (
    <div className="App">
      <h1>Bases Concurso</h1>
      <div className="qr-container">
        <QRCode value={imageUrl} size={256} /> 
      </div>
    </div>
  );
}

export default App;
