

import { useEffect, useState } from 'react';
import InputForm from './InputForm.jsx'
import { TABLE_FEATURES, FORM_FEATURES } from './ucaklarData.js'


export default function EnterUav(props) {

    function uavSubmit(event) { 
        event.preventDefault();
        const forms = document.querySelectorAll('form');
        const form = forms[0];
  
    
        let isValid = true;
        FORM_FEATURES.map((feature, ind) => {
            if (document.getElementById(feature.id).value === "") isValid = false;
        })
        if(isValid) {
            var newData = {};
            Array.from(form.elements).forEach((input, ind) => {
                if(input.tagName === "INPUT") {
                    newData[TABLE_FEATURES[ind].field] = input.value;
                } 
            })
            props.onChangeData(newData);  
        }

        
        //check if all inputs are non-empty
        
        
       
        //give warning if not valid: non empty input not acceptable
     }
    
 

    return (
        <div id="enter-uav-ucaklar">
            <h2>Sample Form</h2>
            <form>
                {FORM_FEATURES.map((feature, ind) => <InputForm key={ind} ind={ind} {...feature}/>)}
                <button id="submitButton" className="btn btn-primary w-100 py-2" type="submit" onClick={uavSubmit}>Ekle</button>
            </form>
        </div>
    )
}


