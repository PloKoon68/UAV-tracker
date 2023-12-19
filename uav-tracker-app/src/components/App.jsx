import React, { useState } from 'react';
import '../App.css';

//components
import PageUcaklar from './navigate/ucaklar/PageUcaklar.jsx';
import PageUcuslar from './navigate/ucuslar/PageUcuslar.jsx';

function App() {
  const [ucaklarData, setUcaklarData] = useState(null);
  const [ucuslarData, setUcuslarData] = useState(null);
  const [currentSection, setCurrentSection] = useState('ucaklar');

  const handleNavClick = (section) => {
    setCurrentSection(section);
  };

  return (
    <>
      <nav className="navbar">
        <button className="navBars" onClick={() => handleNavClick('ucaklar')}>Uçaklar</button>
        <button className="navBars" onClick={() => handleNavClick('ucuslar')}>Uçuşlar</button>
        <button className="navBars" onClick={() => handleNavClick('adminPaneli')}>Admin Paneli</button>
      </nav>

      <div className="app-container">
        <header className="App-header">
          {currentSection === 'ucaklar' && (
            <PageUcaklar data={ucaklarData} updateData={setUcaklarData} />
          )}
          {currentSection === 'ucuslar' && (
            <PageUcuslar data={ucuslarData} updateData={setUcuslarData} />
          )}
          {currentSection === 'adminPaneli' && <p>Admin Paneli</p>}
        </header>
      </div>
    </>
  );
}

export default App;
