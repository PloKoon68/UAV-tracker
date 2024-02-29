

import React, { useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Dropdown } from 'primereact/dropdown';
import { Tag } from 'primereact/tag';

import { Button } from 'primereact/button';

export default function RowEditingDemo() {
    const [products, setProducts] = useState([
            {
            uçak_ismi: "aa",
            uçak_tipi: "cc",
            müşteri: "25+"
            }
        ]);
        const [statusesUçakTipi] = useState(['AKSUNGUR', 'ANKA-3', 'KAAN']);
        const [statusesMüşteri] = useState(['ASELSAN', 'HAVELSAN']);

    const onRowEditComplete = (e) => {
        let _products = [...products];
        let { newData, index } = e;

        _products[index] = newData;

        setProducts(_products);
    };

    

    //UÇAK İSMİ
    const textEditor = (options) => {
        return <InputText type="text" value={options.value} onChange={(e) => options.editorCallback(e.target.value)} />;
    };

    //UÇAK TİPİ (OPTİON)
    const statusBodyTemplateUçakTipi = (rowData) => {
        return rowData.uçak_tipi;
    };
    const statusEditorUçakTipi = (options) => {
        return (
            <Dropdown
                value={options.value}
                options={statusesUçakTipi}
                onChange={(e) => options.editorCallback(e.value)}
                placeholder="Select a Status"
                itemTemplate={(option) => {
                    return option;
                }}
            />
        );
    };

    //MÜŞTERİ (OPTİON)
    const statusBodyTemplateMüşteri = (rowData) => {
        return rowData.müşteri;
    };
    const statusEditorMüşteri = (options) => {
        console.log(options)

        return (
            <Dropdown
                value={options.value}
                options={statusesMüşteri}
                onChange={(e) => options.editorCallback(e.value)}
                placeholder="Select a Status"
                itemTemplate={(option) => {
                    return option;
                }}
            />
        );
    };


    const uçuşSaatiTemplate = (rowData) => {
        return new Intl.NumberFormat('tr-TR', {
            style: "unit",
            unit: "hour",
          }).format(rowData.toplam_uçuş_saati)
    };
    const uçuşSaatiEditor = (options) => {
        return <InputNumber value={options.value} onValueChange={(e) => options.editorCallback(e.value) } suffix=" sa." />;
    };


    const allowEdit = (rowData) => {
        return rowData.name !== 'Blue Band';
    };

    const BodyTemplate = (rowData) => {
        return (
          <React.Fragment>
            <Column rowEditor={true} headerStyle={{ width: '10%', minWidth: '8rem' }} bodyStyle={{ textAlign: 'center' }}></Column> 
            <Button icon="pi pi-trash" rounded outlined severity="danger" onClick={() => console.log(rowData) /*onDelete(rowData)*/} />
        </React.Fragment>
        );
      }; 


    return (
        <div className="card p-fluid">
            <DataTable value={products} editMode="row" dataKey="id" onRowEditComplete={onRowEditComplete} tableStyle={{ minWidth: '50rem' }}>
                <Column field="uçak_ismi" header="Uçak ismi:" editor={(options) => textEditor(options)} style={{ width: '20%'}}></Column>
                <Column field="uçak_tipi" header="Uçak tipi" body={(statusBodyTemplateUçakTipi)} editor={(options) => statusEditorUçakTipi(options)} style={{ width: '20%' }}></Column>
                <Column field="müşteri" header="Müşteri" body={statusBodyTemplateMüşteri} editor={(options) => statusEditorMüşteri(options)} style={{ width: '20%' }}></Column>
                <Column field="toplam_uçuş_saati" header="Toplam uçuş saati" body={uçuşSaatiTemplate} editor={(options) => uçuşSaatiEditor(options)} style={{ width: '20%' }}></Column>
                <Column rowEditor={allowEdit} headerStyle={{ width: '10%', minWidth: '8rem' }} bodyStyle={{ textAlign: 'center' }}></Column>
                <Column body={BodyTemplate}></Column>
            </DataTable>
        </div>
    );
}
        

