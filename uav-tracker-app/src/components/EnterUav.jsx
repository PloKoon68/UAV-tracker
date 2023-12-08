import { useState } from 'react';
import Input from './Input.jsx'
import { FEATURES } from './data.js'


export default function EnterUav({enetered}) {
    console.log(FEATURES.map((feature) => feature.id))
    
    const [formData, setFormData] = useState({});
    console.log(formData)

    function handleInputChange(field, value) {
        setFormData({ ...formData, [field]: value });
        console.log("f is: ",formData)
    }

    function uavSubmit() {

    }

    
    return (

        <div id="enter-uav">
            {FEATURES.map((feature) => <Input key={feature.id} inputChanged={handleInputChange} {...feature}/>)}
        
            <input type="submit" value="Submit" onClick={uavSubmit}/>
        </div>
    )
}