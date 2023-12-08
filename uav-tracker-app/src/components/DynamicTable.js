import React, { useState } from 'react';

const DynamicTable = () => {
  const [tableData, setTableData] = useState([]);

  const addRow = () => {
    setTableData([...tableData, { id: tableData.length + 1, content: `Row ${tableData.length + 1}` }]);
  };

  const deleteRow = (id) => {
    const updatedData = tableData.filter((row) => row.id !== id);
    setTableData(updatedData);
  };

  return (
    <div>
      <button onClick={addRow}>Add Row</button>
        <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>Content</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
            {tableData.map((row) => (
                <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.content}</td>
                <td>
                    <button onClick={() => deleteRow(row.id)}>Delete</button>
                </td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
  );
};

export default DynamicTable;