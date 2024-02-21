

import { useEffect, useState } from 'react';
import InputForm from './InputForm.jsx'
import { UCAKLAR_FEATURES } from './ucaklarData.js'


export default function EnterUav(props) {

    function uavSubmit(event) { 
        event.preventDefault();
        const forms = document.querySelectorAll('form');
        const form = forms[0];
        let htmlFormData = [];

        //push the values of inputs to the array
        Array.from(form.elements).forEach((input, ind) => {
            if(input.tagName === "INPUT") htmlFormData.push(input.value);
        })
        
        //check if all inputs are non-empty
        let isValid = true;
        UCAKLAR_FEATURES.map((feature, ind) => {
            if (document.getElementById(feature.id).value === "") isValid = false;
        })
        
        //give warning if not valid: non empty input not acceptable
        if(isValid) props.onChangeData(htmlFormData);  
     }
    
 

    return (
        <div id="enter-uav-ucaklar">
            <h2>Sample Form</h2>
            <form>
                {UCAKLAR_FEATURES.map((feature, ind) => <InputForm key={feature.id} ind={ind} {...feature}/>)}
                <button id="submitButton" className="btn btn-primary w-100 py-2" type="submit" onClick={uavSubmit}>Ekle</button>
            </form>
        </div>
    )
}


