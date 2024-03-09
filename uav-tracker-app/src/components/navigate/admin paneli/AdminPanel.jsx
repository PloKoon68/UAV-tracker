
import { useState } from 'react'

import './AdminPanel.css'

import UçakTipi from './option tags/uçaklar options/UçakTipi.jsx'
import Müşteri from './option tags/uçaklar options/Müşteri.jsx'

export default function AdminPanel(props) 
{
    
/*
    function removeTagUcaklar(index){
        setUcaklarTags(ucaklarTags.filter((el, ind) => ind !== index))
    }
*/

    return (
        <>
           <UçakTipi setUcakTipiTags = {props.setUcakTipiTags}/>
           <Müşteri setMusteriTags = {props.setMusteriTags}/>
        </>
    )
}