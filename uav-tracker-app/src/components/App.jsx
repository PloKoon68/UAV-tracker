import React, { useState } from 'react';
import '../App.css';


import 'bootstrap/dist/css/bootstrap.min.css';


//components
import PageUcaklar from './navigate/ucaklar/PageUcaklar.jsx';
import PageUcuslar from './navigate/ucuslar/PageUcuslar.jsx';
import Navbar from './NavBar.jsx';

import BasicDemo from './test/testTable.jsx';
import HookFormDoc from './test/testForm.jsx';

function App() {
  const [ucaklarData, setUcaklarData] = useState(null);
  const [ucuslarData, setUcuslarData] = useState(null);

  const [currentSection, setCurrentSection] = useState('ucaklar');

  return (
    <>
      
      <Navbar handlePage= {setCurrentSection}/>
      <BasicDemo/>
      <HookFormDoc inputs={ [
    {
        name: 'city',
        label: 'City',
        options: ["Turkey", "USA", "Germany"],
        optionLabel: 'cname',
        optionGroupLabel: 'name',
        optionGroupChildren: ['states', 'cities']
    }
    // Add more input objects for each input in your data table
]}/>
      <div className="app-container">
        <header className="App-header">
          {currentSection === 'ucaklar' && (
            <PageUcaklar/>
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


