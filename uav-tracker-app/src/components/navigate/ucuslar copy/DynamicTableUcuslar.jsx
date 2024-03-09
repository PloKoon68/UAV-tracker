

import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Dropdown } from 'primereact/dropdown';

import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';


import {FORM_DATA} from './ucuslarData.js'

export default function DynamicTableUcaklar(props) {

        //bunları use effect çevir
    const [statusesKalkışLokasyonu] = useState([...FORM_DATA.kalkış_lokasyonu]);
    const [statusesİnişLokasyonu] = useState([...FORM_DATA.iniş_lokasyonu]);

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

    //KALKIŞ LOKASYONU(OPTİON)
    const statusBodyTemplateKalkışLokasyonu = (rowData) => {
        return rowData.kalkış_lokasyonu;
    };
    const statusEditorKalkışLokasyonu = (options) => {
        return (
            <Dropdown
                value={options.value}
                options={statusesKalkışLokasyonu}
                onChange={(e) => options.editorCallback(e.value)}
                placeholder="Kalkış Lokasyonu Seçin"
                itemTemplate={(option) => {
                    return option;
                }}
            />
        );
    };

    //İNİŞ LOKASYONU (OPTİON)
    const statusBodyTemplateİnişLokasyonu = (rowData) => {
        return rowData.iniş_lokasyonu;
    };
    const statusEditorİnişLokasyonu = (options) => {

        return (
            <Dropdown
                value={options.value}
                options={statusesİnişLokasyonu}
                onChange={(e) => options.editorCallback(e.value)}
                placeholder="İniş Lokasyonu Seçiniz"
                itemTemplate={(option) => {
                    return option;
                }}
            />
        );
    };


    //KALKIŞ TARİHİ
    const kalkışTarihiTemplate = (rowData) => {
        return (<Calendar  />)
    };
    const kalkışTarihiEditor = (options) => {
        return (<Calendar/>);
    };
// {/*value={date} onChange={(e) => setDate(e.value)} */}


    //KALKIŞ TARİHİ
    const inişTarihiTemplate = (rowData) => {
        return (<Calendar  />)
    };
    //{/*value={date} onChange={(e) => setDate(e.value)*/}
    const inişTarihiEditor = (options) => {
        return (<Calendar />);
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


    //delete button
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
            <Column rowEditor={true} headerStyle={{width: '10%',minWidth: '8rem'}} bodyStyle={{ textAlign: 'center'}}></Column> 
            <Button className="pi pi-times" rounded outlined onClick={() => onDelete(rowData)} />
          </React.Fragment>
        );
    }; 

    const addData = () => {
        document.getElementById('dataTableUçuşlar').style.filter = 'blur(5px)'
        props.setEnterData(true)
    }
    return (
        <>
            <Button id="addData" className="btn btn-primary w-15" icon="pi pi-plus-circle" type="submit" onClick={addData}  >Veri ekle</Button>
    {/*       <button id="addData" className="btn btn-primary w-15 py-2" type="submit" icon="pi pi-plus-circle" style={{marginBottom:"5px"}}  onClick={addData}>Veri ekle</button>*/}
            <div id="dataTableUçuşlar" className="card p-fluid container">
            <DataTable value={props.tableData} editMode="row" dataKey="id" onRowEditComplete={onRowEditComplete} tableStyle={{ minWidth: '70rem' }}>
                <Column field="uçak_ismi" header="Uçak ismi" editor={(options) => textEditor(options)} style={{ width: '20%'}}></Column>
                <Column field="kalkış_lokasyonu" header="Kalkış Lokasyonu" body={(statusBodyTemplateKalkışLokasyonu)} editor={(options) => statusEditorKalkışLokasyonu(options)} style={{ width: '20%' }}></Column>
                <Column field="kalkış_tarihi" header="Kalkış Tarihi" body={kalkışTarihiTemplate} editor={(options) => kalkışTarihiEditor(options)} style={{ width: '20%' }}></Column>
                <Column field="iniş_lokasyonu" header="İniş Lokasyonu" body={statusBodyTemplateİnişLokasyonu} editor={(options) => statusEditorİnişLokasyonu(options)} style={{ width: '20%' }}></Column>
                <Column field="iniş_tarihi" header="İniş Tarihi" body={inişTarihiTemplate} editor={(options) => inişTarihiEditor(options)} style={{ width: '20%' }}></Column>
                <Column field="toplam_uçuş_saati" header="Toplam Uçuş saati" body={uçuşSaatiTemplate} editor={(options) => uçuşSaatiEditor(options)} style={{ width: '20%' }}></Column>
                <Column rowEditor={allowEdit} headerStyle={{ width: '10%', minWidth: '8rem' }} bodyStyle={{ textAlign: 'center' }}></Column>
                <Column body={BodyTemplate}></Column>
            </DataTable>
        </div>
        </>
    );
}

