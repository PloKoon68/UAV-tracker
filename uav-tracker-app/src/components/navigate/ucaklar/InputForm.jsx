export default function InputForm({label, id, ind, type}) {

    return (
        <div className="mb-3">
        
            <label className="form-label" htmlFor={id}><strong>{label}:</strong></label>
            <input className="form-control" type={type} placeholder={label} id={id} ind={ind} min={(id === "toplam-uçuş-saati"? "0": "")} />

       </div>

    )
}

