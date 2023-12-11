
/*
//for {...feature} parameter
export default function Input({label, id, inputChanged}) {

    return (
        <>
            <label htmlFor={id}>{label}:</label><br/>
            <input type="text" id={id} onChange={(e) =>inputChanged(id, e.target.value)}/><br/>
        </>
    )
}
*/




export default function Input({label, id, ind, inputChanged}) {

    return (
        <>
            <label htmlFor={id}>{label}:</label><br/>
            <input type="text" id={id} ind={ind}  onChange={(e) =>inputChanged(id, ind, e.target.value)}/><br/>
        </>
    )
}