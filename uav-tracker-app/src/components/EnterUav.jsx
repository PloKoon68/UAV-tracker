import Input from './Input.jsx'

const features = [
    {label: "Uçak ismi", id: "uçak-ismi"},
    {label: "Uçak tipi", id: "uçak-tipi"},
    {label: "Müşteri", id: "müşteri"},
    {label: "Toplam uçuş saati", id: "toplam-uçuş-saati"},
]


export default function EnterUav() {

    function uavSubmit() {

    }
    return (

        <div id="enter-uav">
            {features.map((feature) => <Input key={feature.id} {...feature}/>)}
        
            <input type="submit" value="Submit" onClick={uavSubmit}/>
        </div>
    )
}