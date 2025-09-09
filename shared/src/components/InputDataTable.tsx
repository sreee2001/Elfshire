import React from "react";
import Papa from "papaparse";
import type { Row } from "./Row";

type InputDataTableProps = {
  rows: Row[];
  setRows: React.Dispatch<React.SetStateAction<Row[]>>;
};

const defaultRow = { Label: "", col1: "", col2: "", col3: "" };

const InputDataTable: React.FC<InputDataTableProps> = ({ rows, setRows }) => {
  const handleInputChange = (
    index: number,
    field: keyof Row,
    value: string
  ) => {
    const updatedRows = rows.map((row, i) =>
      i === index ? { ...row, [field]: value } : row
    );
    setRows(updatedRows);
  };

  const addRow = () => setRows([...rows, { ...defaultRow }]);

  const deleteRow = (index: number) => {
    setRows(rows.filter((_, i) => i !== index));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const text = event.target?.result as string;
      const result = Papa.parse<string[]>(text, { skipEmptyLines: true });
      // Expecting 4 columns per row
      const parsedRows = (result.data as string[][])
        .filter((row) => row.length >= 4)
        .map((row) => ({
          Label: row[0] || "",
          col1: row[1] || "",
          col2: row[2] || "",
          col3: row[3] || "",
        }));
      setRows(parsedRows);
    };
    reader.readAsText(file);
  };

  return (
    <div>
      <input
        type="file"
        accept=".csv"
        onChange={handleFileUpload}
        style={{ marginBottom: "1em" }}
      />
      <button onClick={addRow} style={{ marginTop: "1em" }}>
        Add Row
      </button>
      <table>
        <thead>
          <tr>
            <th>Label</th>
            <th>Col 1</th>
            <th>Col 2</th>
            <th>Col 3</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr key={idx}>
              {(["Label", "col1", "col2", "col3"] as (keyof Row)[]).map(
                (col) => (
                  <td key={col}>
                    <input
                      type="text"
                      value={row[col]}
                      onChange={(e) =>
                        handleInputChange(idx, col, e.target.value)
                      }
                    />
                  </td>
                )
              )}
              <td>
                <button onClick={() => deleteRow(idx)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InputDataTable;
