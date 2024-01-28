

import { useState } from 'react';
import Input from './InputUcaklar.jsx'
import InputForm from './InputForm.jsx'
import { UCAKLAR_FEATURES } from './ucaklarData.js'


export default function EnterUav({newRow}) {

    const [htmhtmlFormData, sethtmhtmlFormData] = useState(UCAKLAR_FEATURES.map(() => ""));

    function handleInputChange(field, ind, value) {
        let temp = [...htmhtmlFormData];
        temp[ind] = value;
        sethtmhtmlFormData(temp);
    }

    function uavSubmit() {
        newRow(htmhtmlFormData);
    }

    
    return (

        <div id="enter-uav-ucaklar">
          
        
                <h1 className="h3 mb-3 fw-normal">Uçak ekleyin</h1>



                
                
                <div className="form-floating">
                
                
                {UCAKLAR_FEATURES.map((feature, ind) => <InputForm key={feature.id} ind={ind} inputChanged={handleInputChange} {...feature}/>)}
                
                </div>
                

                <button className="btn btn-primary w-100 py-2" type="submit" onClick={uavSubmit}>Ekle</button>
                <p className="mt-5 mb-3 text-body-secondary">© 2017–2023</p>
        
        </div>
    )
}



/*
{UCAKLAR_FEATURES.map((feature, ind) => <Input key={feature.id} ind={ind} inputChanged={handleInputChange} {...feature}/>)}
         
            <input id="submitButton" type="submit" value="Submit" onClick={uavSubmit}/>
*/