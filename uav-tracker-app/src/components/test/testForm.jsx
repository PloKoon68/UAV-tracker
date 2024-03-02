
import React, { useState } from "react";
import { AutoComplete } from "primereact/autocomplete";

export default function DropdownDemo() {
    


    //ucak tipi
    const [ucakTipiValue, setUcakTipiValue] = useState('');
    const [ucakTipItems, setUcakTipiItems] = useState([]);

    const ucakTipiSearch = (event) => {
        let _items = ["T1", "T2", "T3"];
        setUcakTipiItems(event.query ? [_items].map(item => event.query + '-' + item) : _items);
    }


    //ucak ismi
    const [musteriValue, setMusteriValue] = useState('');
    const [musteriItems, setMusteriItems] = useState([]);
    const musteriSearch = (event) => {
        let _items = ["ASELSAN", "HAVELSAN", "BAYKAR"];
        setMusteriItems(event.query ? [_items].map(item => event.query + '-' + item) : _items);
    }


    const [ucaklarValue, setUcaklarValue] = useState('');
    const [ucaklarItems, setUcaklarItems] = useState([]);

    const ucaklarItemsSearch = (event) => {
        setUcaklarItems([...Array(10).keys()].map(item => event.query + '-' + item));
    }

    return (
        <div className="card flex justify-content-center">
            <form>
                <AutoComplete value={ucaklarValue} suggestions={ucaklarItems} completeMethod={ucaklarItemsSearch} onChange={(e) => setUcaklarValue(e.value)} />
                <br></br>
                <AutoComplete value={ucakTipiValue} suggestions={ucakTipItems} completeMethod={ucakTipiSearch} onChange={(e) => setUcakTipiValue(e.value)} dropdown />
                <br></br>
                <AutoComplete value={musteriValue} suggestions={musteriItems} completeMethod={musteriSearch} onChange={(e) => setMusteriValue(e.value)} dropdown />
                <br></br>
            </form>
        </div>
    )
}
        