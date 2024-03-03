

import { useEffect, useState } from 'react';
import InputForm from './InputForm.jsx'
import { TABLE_FEATURES, FORM_FEATURES } from './ucaklarData.js'


export default function EnterUav(props) {

    function uavSubmit(event) { 
        event.preventDefault();
        const forms = document.querySelectorAll('form');
        const form = forms[0];
  
        

        let isValid = true;
        FORM_FEATURES.map((feature) => {
            if (document.getElementById(feature.id).value === "") isValid = false;
        })
        if(isValid) {
            var newData = {};
            Array.from(form.elements).forEach((input, ind) => {
                /*
                if(input.tagName === "INPUT") {
                    newData[TABLE_FEATURES[ind].field] = input.value;
                } */
                if(input.classList[0] === "f") {
                    newData[TABLE_FEATURES[ind].field] = input.value;
                }
                
            })
            props.onChangeData(newData);  
        }

        
        //check if all inputs are non-empty
        
        
       
        //give warning if not valid: non empty input not acceptable
     }
    
     const FORM_FEATURES = [
        {label:"Uçak ismi", id: "uçak-ismi", type: "text"},
        {label:"Uçak tipi", id: "uçak-tipi", type: "text"},
        {label:"Müşteri" ,id: "müşteri", type: "text"},
        {label:"Toplam uçuş saati", id: "toplam-uçuş-saati", type: "number"},
    ]
    
 

    return (
        <div id="enter-uav-ucaklar">
            <h2>Sample Form</h2>
            <form>
                <div className="mb-3">
                    <label className="form-label" htmlFor="uçak-ismi"><strong>Uçak ismi:</strong></label>
                    <input className="f form-control" type="text" placeholder="Uçak ismi" id={"uçak-ismi"} />
                </div>
                
                <div className="mb-3">
                    <label className="form-label" htmlFor="uçak-tipi"><strong>Uçak tipi:</strong></label>
                    <select className="f form-select" id="uçak-tipi">
                        <option value="">Select a Uçak tipi</option>
                        <option value="t1">t1</option>
                        <option value="t2">t2</option>
                        <option value="t3">t3</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label className="form-label" htmlFor="müşteri"><strong>Müşteri:</strong></label>
                    <select className="f form-select" id="müşteri">
                        <option value="">Select a Müşteri</option>
                        <option value="ASELSAN">ASELSAN</option>
                        <option value="HAVELSAN">HAVELSAN</option>
                        <option value="BAYKAR">BAYKAR</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label className="form-label" htmlFor="toplam-uçuş-saati"><strong>Toplam uçuş saati:</strong></label>
                    <input className="f form-control" type="number" placeholder="Toplam uçuş saati" id="toplam-uçuş-saati" min="0" />
                </div>
        

                <button id="submitButton" className="btn btn-primary w-100 py-2" type="submit" onClick={uavSubmit}>Ekle</button>
            </form>
        </div>
    )
}


