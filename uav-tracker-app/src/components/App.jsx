import React, { useState } from 'react';
import '../App.css';


import 'bootstrap/dist/css/bootstrap.min.css';



//components
import PageUcaklar from './navigate/ucaklar/PageUcaklar.jsx';
import PageUcuslar from './navigate/ucuslar copy/PageUcuslar.jsx';
import AdminPanel from './navigate/admin paneli/AdminPanel.jsx';

import Navbar from './NavBar.jsx';

function App() {


  const [currentSection, setCurrentSection] = useState(0);

  //options for admin panel.
  const [ucakTipiTags, setUcakTipiTags] = useState([])
  const [musteriTags, setMusteriTags] = useState([])


  return (
    <>
      
      <Navbar handlePage= {(p) => setCurrentSection(p)} currentSection={currentSection}/>
    
      <div className="app-container">
        <header className="App-header">
          {currentSection === 0 && (
            <PageUcaklar/>
          )}
          {currentSection === 1 && (
            <PageUcuslar/>
          )}
          {currentSection === 2 && (<AdminPanel setUcakTipiTags={setUcakTipiTags} setMusteriTags={setMusteriTags}/>)}
        </header>

      </div>
    </>
  ); 
  
}

export default App;















/*
//components
import PageUcaklar from './navigate/ucaklar/PageUcaklar.jsx';
//import PageUcuslar from './navigate/ucuslar/PageUcuslar.jsx';
import FormUçuşlar from './navigate2/FormUçuşlar.jsx';
import Navbar from './navigate2/NavBar.jsx';
import EnterUav from './navigate2/EnterUavUcaklar.jsx';


function App() {
  const [ucuslarData, setUcuslarData] = useState(null);
  const [currentSection, setCurrentSection] = useState('ucaklar');

  const handleNavClick = (section) => {
    setCurrentSection(section);
  };

  return (
    <div className='main-div'>
      <Navbar/>

      <div className='content'>
        <EnterUav/>
      </div>      
    </div>
  )
  
}

export default App;
*/


