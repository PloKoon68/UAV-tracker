import React, { useEffect, useState } from 'react';
import { TABLE_FEATURES } from './ucaklarData.js'

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';


function DynamicTable(props) {
  
  
  const BodyTemplate = (rowData) => {
    return (
      <React.Fragment>
        <Column rowEditor={true} headerStyle={{ width: '10%', minWidth: '8rem' }} bodyStyle={{ textAlign: 'center' }}></Column> 
        <Button icon="pi pi-trash" rounded outlined severity="danger" onClick={() => console.log(rowData) /*onDelete(rowData)*/} />
    </React.Fragment>
    );
  }; 
  const allowEdit = (rowData) => {
    return rowData.name !== 'Blue Band';
  };
  
  console.log(props.tableData);
  return (
    <div className="container">
      <h2>Uçaklar Tablosu</h2>
      <DataTable value={props.tableData} stripedRows removableSort tableStyle={{ minWidth: '50rem' }} >
        {TABLE_FEATURES.map((feature, ind) => <Column key={ind} field={feature.field} header={feature.header} sortable></Column>)}

        <Column body={BodyTemplate}></Column>
        <Column rowEditor={allowEdit} headerStyle={{ width: '10%', minWidth: '8rem' }} bodyStyle={{ textAlign: 'center' }}></Column>

      </DataTable>
    </div>
  );
}

export default DynamicTable;