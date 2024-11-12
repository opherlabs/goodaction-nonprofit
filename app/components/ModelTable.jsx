// components/ModelTable.js
import React from 'react';

const ModelTable = ({ modelData, modelConfig }) => {
  return (
    <table border="1" style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          {modelConfig.headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {modelData.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {modelConfig.fields.map((field, fieldIndex) => (
              <td key={fieldIndex}>{row[field]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ModelTable;
