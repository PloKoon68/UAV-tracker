export const TABLE_FEATURES = [
    {field:"uçak_ismi", header:"Uçak ismi"},
    {field:"uçak_tipi", header:"Uçak tipi"},
    {field:"müşteri", header:"Müşteri"},
    {field:"toplam_uçuş_saati", header:"Toplam uçuş saati"},
]

export const FORM_DATA = {
    kalkış_lokasyonu: ["ANKARA", "İSTANBUL", "ANTALYA"],
    iniş_lokasyonu: ['i1', 'i2', 'i3', 'i4']
}


export const UCUSLAR_FEATURES = [
    {label: "Uçak ismi", id: "uçak_ismi", type: "text" },
    {label: "Kalkış Lokasyonu", id: "kalkış_lokasyonu", type: "text"},
    {label: "Kalkış Tarihi", id: "kalkış_tarihi", type: "text" },
    {label: "İniş Lokasyonu", id: "iniş_lokasyonu", type: "text"},
    {label: "İniş Tarihi", id: "inis_tarihi", type: "date"},    
    {label: "Uçuş Süresi", id: "ucus_suresi", type: "text"}    
]

