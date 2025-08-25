import React from 'react';

export function Table() {
  const data = [
    ['JavaScript', 100],
    ['React', 150],
    ['React Native', 180],
    ['Node.js', 200],
    ['VS Code', 120]
  ];

  const onMouseOverRow = (ev) => {
    ev.currentTarget.style.backgroundColor = 'yellow';
  };

  const onMouseOutRow = (ev) => {
    ev.currentTarget.style.backgroundColor = 'white';
  };

  return (
    <table border="1" cellPadding={5} style={{ margin: 'auto', marginTop: 30 }}>
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {
          data.map((item, index) => (
            <tr
              key={index}
              onMouseOver={onMouseOverRow}
              onMouseOut={onMouseOutRow}
            >
              <td>{item[0]}</td>
              <td>{item[1]}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}
