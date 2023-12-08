

export default function Input({label, id, inputChanged}) {

    return (
        <>
            <label htmlFor={id}>{label}:</label><br/>
            <input type="text" id={id} onChange={(e) =>inputChanged(id, e.target.value)}/><br/>
        </>
    )
}