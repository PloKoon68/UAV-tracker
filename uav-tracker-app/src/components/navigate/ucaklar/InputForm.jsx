export default function InputForm({label, id, ind, inputChanged}) {

    return (
        <>
            <label htmlFor={id}></label>
            <input type="text"  placeholder={label} id={id} ind={ind}  onChange={(e) =>inputChanged(id, ind, e.target.value)}/>

       </>

    )
}

/*
            <label style={{ marginTop: '100px' }} htmlFor={id}><strong>{label}:</strong></label><br/>
            <input type="text"  placeholder={label} id={id} ind={ind}  onChange={(e) =>inputChanged(id, ind, e.target.value)}/><br/>
*/ 