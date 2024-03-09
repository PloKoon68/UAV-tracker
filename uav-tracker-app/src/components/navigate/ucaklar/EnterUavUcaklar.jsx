import { TABLE_FEATURES } from './ucaklarData.js'
import {FORM_DATA} from './ucaklarData.js'

import { Button } from 'primereact/button';

export default function EnterUav(props) {

    function uavSubmit(event) { 
        event.preventDefault();
        const forms = document.querySelectorAll('form');
        const form = forms[0];
  
        

        let isValid = true;
        
            var newData = {};
            Array.from(form.elements).forEach((input, ind) => {
                
                if(input.classList[0] === "f") {
                    if (input.value === "")  {
                        isValid = false;
                        console.log(input.value)
                    }
                    newData[TABLE_FEATURES[ind].field] = input.value;
                }
                
            })
            form.reset();

            if(isValid) 
                props.onChangeData(newData);  

     }

     const closeForm = () => {
        document.getElementById('dataTable').style.filter = 'blur(0px)'
        props.setEnterData(false)
    }
    
 

    return (
        <div id="enter-uav-ucaklar" className='col-lg-5 offset-lg-4 fixed-top'>
            <h2 style={{textAlign: "center"}}>Uçak Girişi</h2>
            <form className='col-lg-8 offset-lg-2 '>
                <div className="mb-3">
                    <label className="form-label" htmlFor="uçak-ismi"><strong>Uçak ismi:</strong></label>
                    <input className="f form-control" type="text" placeholder="Uçak ismi giriniz" id={"uçak-ismi"} />
                </div>
                
                <div className="mb-3">
                    <label className="form-label" htmlFor="uçak-tipi"><strong>Uçak tipi:</strong></label>
                    <select className="f form-select" id="uçak-tipi">
                        <option value="">Uçak tipi seçiniz</option>
                        {FORM_DATA.uçak_tipi.map((element, index) => (
                            <option key={index} value={element}>{element}</option>
                        ))}
                    </select>
                </div>

                <div className="mb-3">
                    <label className="form-label" htmlFor="uçak-tipi"><strong>Müşteri:</strong></label>
                    <select className="f form-select" id="uçak-tipi">
                        <option value="">Müşteri seçiniz</option>
                        {FORM_DATA.müşteri.map((element, index) => (
                            <option key={index} value={element}>{element}</option>
                        ))}
                    </select>
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="toplam-uçuş-saati"><strong>Toplam uçuş saati:</strong></label>
                    <input className="f form-control" type="number" placeholder="Saat giriniz" id="toplam-uçuş-saati" min="0" />
                </div>
        

                <button id="submitButton" className="btn btn-primary w-100 py-2" type="submit" onClick={uavSubmit} style={{marginBottom:"5px"}}>Ekle</button>
                <button id="submitButton" className="btn btn-primary w-100 py-2" type="submit" onClick={closeForm} style={{backgroundColor: 'red'}}>Kapat</button>
            </form>
        </div>
    )
}


