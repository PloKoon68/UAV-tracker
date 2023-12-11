
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
        <button className="navBars" onClick={() => handleNavClick('otherSection1')}>Other Section 1</button>
        <button className="navBars" onClick={() => handleNavClick('otherSection2')}>Other Section 2</button>
        <button className="navBars" onClick={() => handleNavClick('otherSection3')}>Other Section 3</button>
      </nav>

      <header className="App-header">
      {currentSection === 'ucaklar' && (
          <>
            <DynamicTable newData={dataState} />
            <EnterUav newRow={updateDataState} />
          </>
        )}
        {currentSection === 'otherSection1' && <p>Content for Other Section 1</p>}
        {currentSection === 'otherSection2' && <p>Content for Other Section 2</p>}
        {currentSection === 'otherSection3' && <p>Content for Other Section 3</p>}
      
      </header>
    </>
  );
}

export default App;


