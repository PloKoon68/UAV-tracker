export default function InputForm({label, id, ind, type, inputChanged}) {

    return (
        <>
            <label htmlFor={id}><strong>{label}:</strong></label>
            <input type={type} placeholder={label} id={id} ind={ind}  onChange={(e) =>inputChanged(id, ind, e.target.value)}/>

       </>

    )
}

