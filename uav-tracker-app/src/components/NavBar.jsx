import React from 'react';
import { TabMenu } from 'primereact/tabmenu';

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';


const Navbar = (props) => {

  const items = [
        { label: 'Uçaklar', icon: 'pi pi-send', ind:0},
        { label: 'Uçuşlar', icon: 'pi pi-clock', ind:1},
        { label: 'Admin Paneli', icon: 'pi pi-list', ind:2},
    ];

    return (
        <div className="card">
            <TabMenu activeIndex={props.currentSection} model={items} onTabChange={(e) => props.handlePage(e.value.ind)} />
        </div>
    )
 
  
};

export default Navbar;
