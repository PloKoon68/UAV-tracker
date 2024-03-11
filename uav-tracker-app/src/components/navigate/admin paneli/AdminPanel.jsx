
import { useState } from 'react'

import './AdminPanel.css'

import UçakTipi from './option tags/uçaklar options/UçakTipi.jsx'
import Müşteri from './option tags/uçaklar options/Müşteri.jsx'
import KALKIŞ_LOKASYONU from './option tags/uçuşlar options/Müşteri.jsx'
import İnişLokasyonu from './option tags/uçuşlar options/İnişLokasyonu.jsx'
import Pnl from './Pnl.jsx'

export default function AdminPanel(props) 
{
    const [currentComponent, setCurrentComponent] = useState("Uçak tipleri");

    return (
        <div className='admin-panel-container'>
            <div className="panel-container">
                <Pnl setCurrentComponent={setCurrentComponent}/>
            </div>
            <div className="items-container">
                {currentComponent == "Uçak tipleri" && <UçakTipi setUcakTipiTags = {props.setUcakTipiTags}/>}
                {currentComponent == "Müşteriler" && <Müşteri setMusteriTags = {props.setMusteriTags}/>}
                {currentComponent == "Kalkış lokasyonları" && <Müşteri setMusteriTags = {props.setMusteriTags}/>}
                {currentComponent == "Müşteriler" && <Müşteri setMusteriTags = {props.setMusteriTags}/>}
           </div>
        </div>
    )
}