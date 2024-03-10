import {FORM_DATA, UCUSLAR_FEATURES} from './ucuslarData.js'


export default function EnterUav(props) {

    function uavSubmit(event) { 
        event.preventDefault();
        const forms = document.querySelectorAll('form');
        const form = forms[0];

        let isValid = true;
        
        var newData = {};
        Array.from(form.elements).forEach((input, ind) => {
            if(input.classList[0] === "f") {
                if (input.value === "")  {
                    isValid = false;
                }

               
                newData[UCUSLAR_FEATURES[ind].id] = (input.type == "date")? formatDate(input.value): input.value;
            }
        })
        form.reset();
        if(isValid) { 
            props.onChangeData(newData);  
            //closeForm();
        }
     }

     const closeForm = () => {
        document.getElementById('dataTableUçuşlar').style.filter = 'blur(0px)'
        props.setEnterData(false)
    }
    
    const formatDate = (date) => {
        const [year, month, day] = date.split('-');
        return `${day}/${month}/${year}`;
    };
    


    return (
        <div id="enter-uav-ucuslar" className='col-lg-5 offset-lg-4 fixed-top'>
            <h2 style={{textAlign: "center"}}>Uçuş Girişi</h2>
            <form className='col-lg-8 offset-lg-2 '>
                <div className="mb-3">
                    <label className="form-label" htmlFor="uçak_ismi"><strong>{UCUSLAR_FEATURES[0].label}</strong></label>
                    <input className="f form-control" type="text" placeholder="Uçak ismi" id="uçak_ismi" />
                </div>
                
                <div className="mb-3">
                    <label className="form-label" htmlFor="kalkış_lokasyonu"><strong>{UCUSLAR_FEATURES[1].label}</strong></label>
                    <select className="f form-select" id="kalkış_lokasyonu">
                        <option value="">Seçiniz</option>
                        {FORM_DATA.kalkış_lokasyonu.map((element, index) => (
                            <option key={index} value={element}>{element}</option>
                        ))}
                    </select>
                </div>
        
                <div className="mb-3">
                    <label className="form-label" htmlFor="kalkış_tarihi"><strong>{UCUSLAR_FEATURES[2].label}</strong></label>
                    <input className="f form-control" type="date" placeholder="Tarih seçiniz" id="kalkış_tarihi"/>
                </div>
        
                <div className="mb-3">
                    <label className="form-label" htmlFor="inis_lokasyoni"><strong>{UCUSLAR_FEATURES[3].label}</strong></label>
                    <select className="f form-select" id="inis_lokasyoni">
                        <option value="">Seçiniz</option>
                        {FORM_DATA.iniş_lokasyonu.map((element, index) => (
                            <option key={index} value={element}>{element}</option>
                        ))}
                    </select>
                </div>

                <div className="mb-3">
                    <label className="form-label" htmlFor="inis_tarihi"><strong>{UCUSLAR_FEATURES[4].label}</strong></label>
                    <input className="f form-control" type="date" placeholder="Tarih seçiniz" id="inis_tarihi" />
                </div>
             
                

                <div className="mb-3">
                    <label className="form-label" htmlFor="ucus_suresi"><strong>{UCUSLAR_FEATURES[5].label}</strong></label>
                    <input className="f form-control" type="number" placeholder="Saat giriniz" id="ucus_suresi" min="0" />
                </div>
        

                <button id="submitButton" className="btn btn-primary w-100 py-2" type="submit" onClick={uavSubmit} style={{marginBottom:"5px"}}>Ekle</button>
                <button id="submitButton" className="btn btn-primary w-100 py-2" type="submit" onClick={closeForm}>Kapat</button>
            </form>
        </div>
    )
}


