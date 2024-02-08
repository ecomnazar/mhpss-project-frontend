import * as FileSaver from "file-saver";
import XLSX from "sheetjs-style";

// eslint-disable-next-line @typescript-eslint/no-explicit-any

const fileType =
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
const fileExtension = ".xlsx";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const exportToExcel = async ({ excelData, fileName }: any) => {
  const ws = XLSX.utils.json_to_sheet(excelData);
  const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
  const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
  const data = new Blob([excelBuffer], { type: fileType });
  FileSaver.saveAs(data, fileName + fileExtension);
};
