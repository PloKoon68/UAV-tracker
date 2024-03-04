

import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Dropdown } from 'primereact/dropdown';

import { Button } from 'primereact/button';

import {FORM_DATA} from './ucaklarData.js'

export default function RowEditingDemo(props) {
/*
    const [products, setProducts] = useState([
            {
                uçak_ismi: "aa",
                uçak_tipi: "cc",
                müşteri: "25+",
                toplam_uçuş_saati: "15"
            },
            {
                uçak_ismi: "av",
                uçak_tipi: "cs",
                müşteri: "2as5+",
                toplam_uçuş_saati: "125"
            }
        ]);
    */
    const [statusesUçakTipi] = useState([...FORM_DATA.uçak_tipi]);
    const [statusesMüşteri] = useState([...FORM_DATA.müşteri]);

    const onRowEditComplete = (e) => {
        let _products = [...props.tableData];
        let { newData, index } = e;

        _products[index] = newData;

        props.setTableData(_products);
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


    
    const onDelete = (rowData) => {
        const updatedArray = props.tableData.filter(item => {
            for (const [key, value] of Object.entries(rowData))
                if (item[key] !== value) return true; 
            return false; 
        });
        props.setTableData(updatedArray);
    }
    const BodyTemplate = (rowData) => {
        return (
          <React.Fragment>
            <Column rowEditor={true} headerStyle={{width: '10%',minWidth: '8rem'}} bodyStyle={{ textAlign: 'center' }}></Column> 
            <Button icon="pi pi-trash" rounded outlined severity="danger" onClick={() => onDelete(rowData)} />
          </React.Fragment>
        );
    }; 

    
    return (
        <div className="card p-fluid">
            <DataTable value={props.tableData} editMode="row" dataKey="id" onRowEditComplete={onRowEditComplete} tableStyle={{ minWidth: '50rem' }}>
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
        

