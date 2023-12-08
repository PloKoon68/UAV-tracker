

export default function EnterUav() {

    return (
        <div id="enter-uav">
            <label htmlFor="uçak-ismi">Uçak ismi:</label><br/>
            <input type="text" id="uçak-ismi" /><br/>

            <label htmlFor="uçak-tipi">Uçak tipi:</label><br/>
            <input type="text" id="uçak-tipi"/><br/>
            
            <label htmlFor="müşteri">Müşteri:</label><br/>
            <input type="text" id="müşteri"/><br/>

            <label htmlFor="toplam-uçuş-saati">Toplam uçuş saati:</label><br/>
            <input  type="text" id="toplam-uçuş-saati"/><br/>
            <input on/>
            <input type="submit" value="Submit"/>
        </div>
    )
}