

import { useState } from 'react';
import InputForm from './InputForm.jsx'
import { UCAKLAR_FEATURES } from './ucaklarData.js'


export default function EnterUav({newRow}) {

    const [htmhtmlFormData, sethtmhtmlFormData] = useState(UCAKLAR_FEATURES.map(() => ""));


    function handleInputChange(field, ind, value) {
        let temp = [...htmhtmlFormData];
        temp[ind] = value;
        sethtmhtmlFormData(temp);

        //check if all inputs are non-empty
        let isValid = true;
        UCAKLAR_FEATURES.map((feature, ind) => {
            if (document.getElementById(feature.id).value === "") isValid = false;
        })
        
        document.getElementById("submitButton").disabled= !isValid;
        document.getElementById("submitButton").onclick = uavSubmit;
    }

    function uavSubmit() {
        //Number(document.getElementById("toplam-uçuş-saati").value) >= 0/* && document.getElementById("toplam-uçuş-saati").value !== ''*/ && 
        console.log("haydi")
        newRow(htmhtmlFormData);
    }
    
    return (

        <div id="enter-uav-ucaklar">
            <h2>Sample Form</h2>
            <form>
                {UCAKLAR_FEATURES.map((feature, ind) => <InputForm key={feature.id} ind={ind} inputChanged={handleInputChange} {...feature}/>)}
                <button id="submitButton" className="btn btn-primary w-100 py-2" type="submit" onClick={uavSubmit} disabled>Ekle</button>
            </form>
        </div>
    )
}
