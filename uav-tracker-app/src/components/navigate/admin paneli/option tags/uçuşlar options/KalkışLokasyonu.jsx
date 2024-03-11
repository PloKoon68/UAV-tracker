import {KALKIŞ_LOKASYONU, MÜŞTERİ} from '../options.js'
import { useState, useEffect } from 'react'





export default function KalkışLokasyonu(props) {

    //axios ile db den başka js dosyasında çek buraya getir. Ve ilk render edildiğinde useEffect ile app.js e set ile gönder 

    const [kalkışLokasyonuTags, setKalkışLokasyonuTags] = useState(KALKIŞ_LOKASYONU)

    //send to parent 
    useEffect(() => {
        props.setKalkışLokasyonuTags(kalkışLokasyonuTags)
      }, [kalkışLokasyonuTags]);

    function handleKeyDown(e){
        if(e.key !== 'Enter') return    
        const value = e.target.value
        if(!value.trim()) return //if empty
        if(kalkışLokasyonuTags.includes(value)) return  //if already added
        setKalkışLokasyonuTags([...kalkışLokasyonuTags, value])
        e.target.value = ''
    }

    function removeTagKalkışLokasyonu(index){
        setKalkışLokasyonuTags(kalkışLokasyonuTags.filter((el, ind) => ind !== index));
    }

    return (
        <div className='kalkış-lokasyonu-container'>
            <h3>Kalkış Lokasyonları</h3>
            <div className="tags-input-container">
                { musteriTags.map((tag, index) => (
                    <div className="tag-item" key={index}>
                        <span className="text">{tag}</span>
                        <span className="close" onClick={() => removeTagKalkışLokasyonu(index)}>&times;</span>
                    </div>
                )) }
                <input onKeyDown={handleKeyDown} type="text" className="tags-input" placeholder="Kalkış Lokasyonu ekleyin" />
            </div>
        </div>
    )
}