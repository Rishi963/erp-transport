import React from "react";
import * as FileSaver from "file-saver";
import XLSX from "sheetjs-style";

const Exportexcel = ({ exceldata, fileName }) => {
  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtetntion = ".xlsx";

  const exportToExcel = async () => {
    const ws = XLSX.utils.json_to_sheet(exceldata);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtetntion);
  };
  return (
    <>
      <button
        className="btn btn-success"
        onClick={(e) => exportToExcel(fileName)}
      >
        Export as Excel
      </button>
    </>
  );
};

export default Exportexcel;
