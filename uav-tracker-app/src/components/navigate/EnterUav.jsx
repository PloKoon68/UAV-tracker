/*
import { useState } from 'react';
import Input from './Input.jsx'
import { FEATURES } from './data.js'


export default function EnterUav({enetered}) {
    console.log(FEATURES.map((feature) => feature))
    
    const [formData, setFormData] = useState({});
    console.log(formData)

    function handleInputChange(field, value) {
        setFormData({ ...formData, [field]: value });
        console.log("f is: ",formData)
    }

    function uavSubmit() {
        //verileri çek, add rowa newData parametresi olarak gir

    }

    
    return (

        <div id="enter-uav">
            {FEATURES.map((feature) => <Input key={feature.id} inputChanged={handleInputChange} {...feature}/>)}
        
            <input type="submit" value="Submit" onClick={uavSubmit}/>
        </div>
    )
}*/


import { useState } from 'react';
import Input from './Input.jsx'
import { FEATURES } from '../../data.js'


export default function EnterUav({newRow}) {
//    const [formData, setFormData] = useState(FEATURES.map(() => ""));



    const [formData, setFormData] = useState(FEATURES.map(() => ""));

    function handleInputChange(field, ind, value) {
        let temp = [...formData];
        temp[ind] = value;
        setFormData(temp);
    }

    function uavSubmit() {
        newRow(formData);
    }

    
    return (

        <div id="enter-uav">
            {FEATURES.map((feature, ind) => <Input key={feature.id} ind={ind} inputChanged={handleInputChange} {...feature}/>)}
        
            <input type="submit" value="Submit" onClick={uavSubmit}/>
        </div>
    )
}

