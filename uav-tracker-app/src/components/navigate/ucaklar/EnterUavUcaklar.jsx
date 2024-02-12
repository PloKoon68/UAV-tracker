

import { useState } from 'react';
import InputForm from './InputForm.jsx'
import { UCAKLAR_FEATURES } from './ucaklarData.js'


export default function EnterUav({newRow}) {

    const [htmhtmlFormData, sethtmhtmlFormData] = useState(UCAKLAR_FEATURES.map(() => ""));

    //to check if flying input is valid
    

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
            <h2>Sample Form</h2>
            <form>
            
                {UCAKLAR_FEATURES.map((feature, ind) => <InputForm key={feature.id} ind={ind} inputChanged={handleInputChange} {...feature}/>)}
                <button className="btn btn-primary w-100 py-2" type="submit" onClick={uavSubmit}>Ekle</button>
            </form>
            
        </div>
    )
}



/*
{UCAKLAR_FEATURES.map((feature, ind) => <Input key={feature.id} ind={ind} inputChanged={handleInputChange} {...feature}/>)}
         
            <input id="submitButton" type="submit" value="Submit" onClick={uavSubmit}/>
*/