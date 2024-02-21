import React from 'react';


const Navbar = ({handlePage}) => {

  return (
    <div className='navbar-div'>
      <nav className="navbar navbar-expand-lg bg-secondary" >
        <div className="container-fluid">
          <a className="navbar-brand" href="../../public/index.html">Navbar</a>
          
          <div className="collapse navbar-collapse navbar-content-container" id="navbarNavAltMarkup">
            <div className="navbar-nav navbar-content">
              <a className="nav-link active" aria-current="page" href="../../public/index.html" onClick={() => handlePage('ucaklar')}>Uçaklar</a>
              <a className="nav-link" href="../../public/index.html" onClick={() => handlePage('ucuslar')}>Uçuşlar</a>
              <a className="nav-link" href="../../public/index.html" onClick={() => handlePage('adminPaneli')}>Admin Paneli</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
};

export default Navbar;

