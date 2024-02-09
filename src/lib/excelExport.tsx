import ExcelJs from "exceljs";

const ExportToExcel = (dat: any) => {
  const year = new Date().getFullYear();
  const day = new Date().getDate();
  const month = new Date().getMonth() + 1;
  const date = year + "-" + month + "-" + day;
  const exportToExcel = (data: any) => {
    const sheetName = "Registered users.xlsx";
    const headerName = "RequestsList";

    const workbook = new ExcelJs.Workbook();
    const sheet = workbook.addWorksheet(sheetName, {
      views: [{ showGridLines: false }]
    });

    const columnArr = [];
    for (const i in data.dat[0]) {
      const tempObj = { name: "" };
      tempObj.name = i;
      columnArr.push(tempObj);
    }

    sheet.addTable({
      name: `Header`,
      ref: "A1",
      headerRow: true,
      totalsRow: false,
      style: {
        //@ts-ignore
        theme: "",
        showRowStripes: false,
        showFirstColumn: true,
        width: 200
      },
      columns: [{ name: "Excel" }, { name: "MHPSS" }],
      rows: [[`Date: ${date}`], [`MHPSS`]]
    });

    sheet.addTable({
      name: headerName,
      ref: "A5",
      headerRow: true,
      totalsRow: false,
      style: {
        theme: "TableStyleMedium2",
        showRowStripes: false,
        //@ts-ignore
        width: 200
      },
      columns: columnArr ? columnArr : [{ name: "" }],
      rows: data.dat?.map((e: any) => {
        const arr = [];
        //@ts-ignore
        for (let i in e) {
          arr.push(e[i]);
        }
        return arr;
      })
    });

    sheet.getCell("A1").font = { size: 20, bold: true };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    sheet.columns = sheet.columns.map((e: any) => {
      const expr = e.values[5];
      switch (expr) {
        case "Name":
          return { width: 50 };
        case "Gender":
          return { width: 40 };
        case "Height":
          return { width: 30 };
        default:
          return { width: 20 };
      }
    });

    const table = sheet.getTable(headerName);
    //@ts-ignore
    for (let i = 0; i < table.table.columns.length; i++) {
      sheet.getCell(`${String.fromCharCode(65 + i)}5`).font = { size: 12 };
      sheet.getCell(`${String.fromCharCode(65 + i)}5`).fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: { argb: "c5d9f1" }
      };

      //@ts-ignore

      for (let j = 0; j < table.table.rows.length; j++) {
        const rowCell = sheet.getCell(`${String.fromCharCode(65 + i)}${j + 6}`);
        rowCell.alignment = { wrapText: true };
        rowCell.border = {
          bottom: {
            style: "thin",
            color: { argb: "a6a6a6" }
          }
        };
      }
    }
    table.commit();

    const writeFile = (fileName: string, content: BlobPart) => {
      const link = document.createElement("a");
      const blob = new Blob([content], {
        type: "application/vnd.ms-excel;charset=utf-8;"
      });
      link.download = fileName;
      link.href = URL.createObjectURL(blob);
      link.click();
    };

    workbook.xlsx.writeBuffer().then((buffer: BlobPart) => {
      writeFile(sheetName, buffer);
    });
  };

  return (
    <button
      onClick={() => {
        exportToExcel(dat)
      }}
      className="bg-primary text-white rounded-md px-4 py-2"
    >
      Click to download as excel
    </button>
  );
};

export default ExportToExcel;
