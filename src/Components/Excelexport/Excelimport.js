import React, { useState } from 'react';
import { read, utils } from 'xlsx';

export default function Excelimport() {
  const [data, setData] = useState([]);

  const handleImport = (event) => {
    const files = event.target.files;
    if (files.length) {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        const contents = e.target.result;
        const workbook = read(contents, { type: 'binary' });
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const rows = utils.sheet_to_json(worksheet, { header: 1 });
        setData(rows);
        console.log(data);
      };
      reader.readAsBinaryString(file);
    }
  };

  return (
    <div>
      <h1>Excel Data</h1>
      <input type="file" accept=".xlsx, .xls" onChange={handleImport} />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row[0]}</td>
              <td>{row[1]}</td>
              <td>{row[2]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
