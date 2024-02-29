
import React, { useState } from "react";
import { AutoComplete } from "primereact/autocomplete";

export default function DropdownDemo() {
    const [value, setValue] = useState('');
    const [items, setItems] = useState([]);
    console.log(items)
    const search = (event) => {
        let _items = ["AKSUNGUR", "ANKA-3", "KAAN"];
        setItems(event.query ? [_items].map(item => event.query + '-' + item) : _items);
    }

    return (
        <div className="card flex justify-content-center">
            <AutoComplete value={value} suggestions={items} completeMethod={search} onChange={(e) => setValue(e.value)} dropdown />
        </div>
    )
}
        