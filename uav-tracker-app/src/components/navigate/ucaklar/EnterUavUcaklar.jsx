

import { useState } from 'react';
import Input from './InputUcaklar.jsx'
import { UCAKLAR_FEATURES } from './ucaklarData.js'


export default function EnterUav({newRow}) {

    const [formData, setFormData] = useState(UCAKLAR_FEATURES.map(() => ""));

    function handleInputChange(field, ind, value) {
        let temp = [...formData];
        temp[ind] = value;
        setFormData(temp);
    }

    function uavSubmit() {
        newRow(formData);
    }

    
    return (

        <div id="enter-uav-ucaklar">
            {UCAKLAR_FEATURES.map((feature, ind) => <Input key={feature.id} ind={ind} inputChanged={handleInputChange} {...feature}/>)}
        
            <input id="submitButton" type="submit" value="Submit" onClick={uavSubmit}/>
        </div>
    )
}

