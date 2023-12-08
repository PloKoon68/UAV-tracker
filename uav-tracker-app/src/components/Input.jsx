export default function Input({label, id}) {

    return (
        <>
            <label htmlFor={id}>{label}:</label><br/>
            <input type="text" id={id} /><br/>
        </>
    )
}