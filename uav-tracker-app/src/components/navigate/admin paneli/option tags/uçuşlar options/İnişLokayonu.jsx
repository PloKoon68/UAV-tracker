import { İNİŞ_LOKASYONU} from '../options.js'
import { useState, useEffect } from 'react'





export default function İnişLokasyonu(props) {

    //axios ile db den başka js dosyasında çek buraya getir. Ve ilk render edildiğinde useEffect ile app.js e set ile gönder 

    const [inişLokasyonuTags, setİnişLokasyonuTags] = useState(İNİŞ_LOKASYONU)

    //send to parent 
    useEffect(() => {
        props.setİnişLokasyonuTags(inişLokasyonuTags)
      }, [inişLokasyonuTags]);

    function handleKeyDown(e){
        if(e.key !== 'Enter') return    
        const value = e.target.value
        if(!value.trim()) return //if empty
        if(inişLokasyonuTags.includes(value)) return  //if already added
        setİnişLokasyonuTags([...inişLokasyonuTags, value])
        e.target.value = ''
    }

    function removeİnişLokasyonu(index){
        setİnişLokasyonuTags(inişLokasyonuTags.filter((el, ind) => ind !== index));
    }

    return (
        <div className='iniş-lokasyonu-container'>
            <h3>İniş lokasyonları</h3>
            <div className="tags-input-container">
                { ucakTipiTags.map((tag, index) => (
                    <div className="tag-item" key={index}>
                        <span className="text">{tag}</span>
                        <span className="close" onClick={() => removeİnişLokasyonu(index)}>&times;</span>
                    </div>
                )) }
                <input onKeyDown={handleKeyDown} type="text" className="tags-input" placeholder="İniş Lokasyonu ekleyin" />
            </div>
        </div>
    )
}