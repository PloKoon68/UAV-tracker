import { TABLE_FEATURES } from './ucuslarData.js'
import {FORM_DATA, UCUSLAR_FEATURES} from './ucuslarData.js'

import { Button } from 'primereact/button';

export default function EnterUav(props) {

    function uavSubmit(event) { 
        event.preventDefault();
        const forms = document.querySelectorAll('form');
        const form = forms[0];

        let isValid = true;
        
            var newData = {};
            Array.from(form.elements).forEach((input, ind) => {
                if(input.classList[0] === "f")console.log(input.value)
                /*
                if(input.classList[0] === "f") {
                    if (input.value === "")  {
                        isValid = false;
                    }
                    newData[TABLE_FEATURES[ind].field] = input.value;
                }
                */
            })
            console.log(newData)
            form.reset();
/*
            if(isValid) { 
                props.onChangeData(newData);  
                closeForm();
            }
*/
     }

     const closeForm = () => {
        document.getElementById('dataTableUçuslar').style.filter = 'blur(0px)'
        props.setEnterData(false)
    }
    
 

    return (
        <div id="enter-uav-ucuslar" className='col-lg-5 offset-lg-4 fixed-top'>
            <h2 style={{textAlign: "center"}}>Uçuş Girişi</h2>
            <form className='col-lg-8 offset-lg-2 '>
                <div className="mb-3">
                    <label className="form-label" htmlFor="uçak-ismi"><strong>{UCUSLAR_FEATURES[0].label}</strong></label>
                    <input className="f form-control" type="text" placeholder="Uçak ismi" id="uçak-ismi" />
                </div>
                
                <div className="mb-3">
                    <label className="form-label" htmlFor="kalkış-lokasyonu"><strong>{UCUSLAR_FEATURES[1].label}</strong></label>
                    <select className="f form-select" id="kalkış-lokasyonu">
                        <option value="">Seçiniz</option>
                        {FORM_DATA.kalkış_lokasyonu.map((element, index) => (
                            <option key={index} value={element}>{element}</option>
                        ))}
                    </select>
                </div>
        
                <div className="mb-3">
                    <label className="form-label" htmlFor="kalkış-tarihi"><strong>{UCUSLAR_FEATURES[2].label}</strong></label>
                    <input className="f form-control" type="date" placeholder="Tarih seçiniz" id="kalkış-tarihi" />
                </div>
        
                <div className="mb-3">
                    <label className="form-label" htmlFor="iniş-lokasyonu"><strong>{UCUSLAR_FEATURES[3].label}</strong></label>
                    <select className="f form-select" id="iniş-lokasyonu">
                        <option value="">Seçiniz</option>
                        {FORM_DATA.iniş_lokasyonu.map((element, index) => (
                            <option key={index} value={element}>{element}</option>
                        ))}
                    </select>
                </div>

                <div className="mb-3">
                    <label className="form-label" htmlFor="iniş-tarihi"><strong>{UCUSLAR_FEATURES[4].label}</strong></label>
                    <input className="f form-control" type="date" placeholder="Tarih seçiniz" id="iniş-tarihi" />
                </div>
        
                

                <div className="mb-3">
                    <label className="form-label" htmlFor="toplam-uçuş-saati"><strong>Toplam uçuş saati:</strong></label>
                    <input className="f form-control" type="number" placeholder="Saat giriniz" id="toplam-uçuş-saati" min="0" />
                </div>
        

                <button id="submitButton" className="btn btn-primary w-100 py-2" type="submit" onClick={uavSubmit} style={{marginBottom:"5px"}}>Ekle</button>
                <button id="submitButton" className="btn btn-primary w-100 py-2" type="submit" onClick={closeForm}>Kapat</button>
            </form>
        </div>
    )
}


