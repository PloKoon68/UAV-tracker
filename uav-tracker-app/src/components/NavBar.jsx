import React, { useState } from 'react';
import { TabMenu } from 'primereact/tabmenu';
import { Button } from 'primereact/button';

const Navbar = (props) => {

  const items = [
        { label: 'Uçaklar', icon: 'pi pi-send', ind:0},
        { label: 'Uçuşlar', icon: 'pi pi-clock', ind:1},
        { label: 'Admin Paneli', icon: 'pi pi-list', ind:2},
    ];

    return (
        <div className="card">
            <TabMenu activeIndex={props.currentSection} model={items} onTabChange={(e) => props.handlePage(e.value.ind)}/>
        </div>
    )
  /*
  return (
    <div className='navbar-div'>
    <nav className="navbar navbar-expand-lg bg-secondary" >
      <div className="container-fluid">
        
        <div className="collapse navbar-collapse navbar-content-container" id="navbarNavAltMarkup">
          <div className="navbar-nav navbar-content">
            <a className="nav-link active" onClick={() => props.handlePage('ucaklar')} style={{cursor:'pointer'}}>Uçaklar</a>
            <a className="nav-link active" onClick={() => props.handlePage('ucuslar')} style={{cursor:'pointer'}}>Uçuşlar</a>
            <a className="nav-link active" onClick={() => props.handlePage('adminPaneli')} style={{cursor:'pointer'}}>Admin Paneli</a>
          </div>
        </div>
      </div>
    </nav>
  </div>
  )*/
  
};

export default Navbar;
