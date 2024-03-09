import {MÜŞTERİ} from '../options.js'
import { useState, useEffect } from 'react'





export default function Müşteri(props) {

    //axios ile db den başka js dosyasında çek buraya getir. Ve ilk render edildiğinde useEffect ile app.js e set ile gönder 

    const [musteriTags, setMusteriTags] = useState(MÜŞTERİ)

    //send to parent 
    useEffect(() => {
        props.setMusteriTags(musteriTags)
      }, [musteriTags]);

    function handleKeyDown(e){
        if(e.key !== 'Enter') return    
        const value = e.target.value
        if(!value.trim()) return //if empty
        if(musteriTags.includes(value)) return  //if already added
        setMusteriTags([...musteriTags, value])
        e.target.value = ''
    }

    function removeTagMusteri(index){
        setMusteriTags(musteriTags.filter((el, ind) => ind !== index));
    }

    return (
        <div className='müşteri-container'>
            <h3>Müşteri seçenekleri</h3>
            <div className="tags-input-container">
                { musteriTags.map((tag, index) => (
                    <div className="tag-item" key={index}>
                        <span className="text">{tag}</span>
                        <span className="close" onClick={() => removeTagMusteri(index)}>&times;</span>
                    </div>
                )) }
                <input onKeyDown={handleKeyDown} type="text" className="tags-input" placeholder="Müşteri ekleyin" />
            </div>
        </div>
    )
}