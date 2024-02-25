import React, { useEffect, useState } from 'react';
import { UCAKLAR_FEATURES, UCAKLAR_FEATURES2 } from './ucaklarData.js'

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';


function DynamicTable(props) {
/*
  const products = [
    { code: 'P001', name: 'Product 1', category: 'Category A', quantity: 10 },
    { code: 'P002', name: 'Product 2', category: 'Category B', quantity: 20 },
    // More products...
  ];
*/

  return (
    <div className="container">
      <h2>Uçaklar Tablosu</h2>
      <DataTable value={props.tableData} tableStyle={{ minWidth: '50rem' }}>
        {UCAKLAR_FEATURES2.map((feature) => <Column field={feature.field}  header={feature.header}></Column>)}
      </DataTable>

      <table className="table table-bordered table-striped">
        <thead className="thead-dark">
          <tr>
            {UCAKLAR_FEATURES.map((feature) => <th key={feature.id}>{feature.label}</th>)}
          </tr>
        </thead>
        <tbody>
          {props.tableData.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((item, columnIndex) => (
                  <td key={columnIndex}>{item}</td>
                ))}
                <td>
                  <button onClick={() => props.deleteRow(rowIndex)}>Delete</button>
                </td>
              </tr>
            ))
          }
 
        </tbody>
      </table>
    </div>
  );
}

export default DynamicTable;