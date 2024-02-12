

import { useState } from 'react';
import InputForm from './InputForm.jsx'
import { UCUSLAR_FEATURES } from './ucuslarData.js'


export default function EnterUav({newRow}) {

    const [formData, setFormData] = useState(UCUSLAR_FEATURES.map(() => ""));

    function handleInputChange(field, ind, value) {
        let temp = [...formData];
        temp[ind] = value;
        setFormData(temp);
    }

    function uavSubmit() {
        newRow(formData);
    }

    
    return (

        <div id="enter-uav-ucuslar">
            {UCUSLAR_FEATURES.map((feature, ind) => <InputForm key={feature.id} ind={ind} inputChanged={handleInputChange} {...feature}/>)}
        
            <input id="submitButton" type="submit" value="Submit" onClick={uavSubmit}/>
        </div>
    )
}

