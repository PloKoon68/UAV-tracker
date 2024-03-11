
import React from 'react'; 
import { PanelMenu } from 'primereact/panelmenu';

 function Pnl(props) {
    const items = [     
        {
            label: 'Uçaklar',
            icon: 'pi pi-file',
            items: [
                {
                    label: 'Uçak tipleri',
                    icon: 'pi pi-file',
                    command: () => props.setCurrentComponent("Uçak tipleri")
                },
                {
                    label: 'Müşteriler',
                    icon: 'pi pi-image',
                    command: () => props.setCurrentComponent("Müşteriler")
                }
            ]
        },
        {
            label: 'Uçuşlar',
            icon: 'pi pi-cloud',
            items: [
                {
                    label: 'Kalkış lokasyonları',
                    icon: 'pi pi-cloud-upload',
                    url: '/theming'
                },
                {
                    label: 'İniş Lokasyonları',
                    icon: 'pi pi-cloud-download',
                    url: '/theming'
                }
            ]
        }
    ];
    return (
        <div className="card flex justify-content-center">
            <PanelMenu model={items} className="w-full md:w-20rem" />
        </div>
    )
}
        
export default Pnl; // Exporting Panel as default
