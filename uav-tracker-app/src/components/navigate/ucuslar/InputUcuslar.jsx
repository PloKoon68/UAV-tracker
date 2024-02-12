export default function Input({label, id, ind, inputChanged}) {

    return (
        <>
            <label style={{ marginTop: '100px' }} htmlFor={id}><strong>{label}:</strong></label><br/>
            <input type={"text"} placeholder={label} id={id} ind={ind}  onChange={(e) =>inputChanged(id, ind, e.target.value)}/><br/>
        </>
    )
}