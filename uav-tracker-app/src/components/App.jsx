
import React from 'react';
import '../App.css';
import { useState } from 'react';

//components
import DynamicTable from './navigate/DynamicTable.jsx'
import EnterUav from './navigate/EnterUav.jsx'


function App() {
  const [dataState, setDataState] = useState(null);
  const [currentSection, setCurrentSection] = useState('ucaklar');


  function updateDataState(newData)  {
    //console.log(newData)
    setDataState(newData);
  }

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

      <header className="App-header">
      {currentSection === 'ucaklar' && (
          <>
            <DynamicTable newData={dataState} />
            <EnterUav newRow={updateDataState} />
          </>
        )}
        {currentSection === 'ucuslar' && <p>Uçuşlar Tablosu</p>}
        {currentSection === 'adminPaneli' && <p>Admin Paneli</p>}
      
      </header>
    </>
  );
}

export default App;


