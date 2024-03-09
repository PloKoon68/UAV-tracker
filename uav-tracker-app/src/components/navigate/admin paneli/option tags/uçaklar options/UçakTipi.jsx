import {UÇAK_TİPİ} from '../options.js'
import { useState, useEffect } from 'react'





export default function UçakTipi(props) {

    //axios ile db den başka js dosyasında çek buraya getir. Ve ilk render edildiğinde useEffect ile app.js e set ile gönder 

    const [ucakTipiTags, setUcakTipiTags] = useState(UÇAK_TİPİ)

    //send to parent 
    useEffect(() => {
        props.setUcakTipiTags(ucakTipiTags)
      }, [ucakTipiTags]);

    function handleKeyDown(e){
        if(e.key !== 'Enter') return    
        const value = e.target.value
        if(!value.trim()) return //if empty
        if(ucakTipiTags.includes(value)) return  //if already added
        setUcakTipiTags([...ucakTipiTags, value])
        e.target.value = ''
    }

    function removeTagUcakTipi(index){
        setUcakTipiTags(ucakTipiTags.filter((el, ind) => ind !== index));
    }

    return (
        <div className='uçak-tipi-container'>
            <h3>Uçak tipi seçenekleri</h3>
            <div className="tags-input-container">
                { ucakTipiTags.map((tag, index) => (
                    <div className="tag-item" key={index}>
                        <span className="text">{tag}</span>
                        <span className="close" onClick={() => removeTagUcakTipi(index)}>&times;</span>
                    </div>
                )) }
                <input onKeyDown={handleKeyDown} type="text" className="tags-input" placeholder="Uçak tipi ekleyin" />
            </div>
        </div>
    )
}