import React from 'react';


const Navbar = ({handlePage}) => {

  return (
    <div className='navbar-div'>
      <nav className="navbar navbar-expand-lg bg-secondary" >
        <div className="container-fluid">
          <a className="navbar-brand" href="#" >Navbar</a>
          
          <div className="collapse navbar-collapse navbar-content-container" id="navbarNavAltMarkup">
            <div className="navbar-nav navbar-content">
              <a className="nav-link active" aria-current="page" href="#"   onClick={() => handlePage('ucaklar')}>Uçaklar</a>
              <a className="nav-link" href="#"                              onClick={() => handlePage('ucuslar')}>Uçuşlar</a>
              <a className="nav-link" href="#"                              onClick={() => handlePage('adminPaneli')}>Admin Paneli</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
};

export default Navbar;