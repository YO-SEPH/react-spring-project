import React from 'react';
import './CommonTable.css';

const CommonTable = props => {
  const { headersName, children } = props;

  return (
    <table className="common-table">
      <thead>
        <tr>
          {
            headersName.map((board, index) => {
              return (
                <td className="common-table-header-column" key={index}>{ board }</td>
              )
            })
          }
        </tr>
      </thead>
      <tbody>
        {
          children
        }
      </tbody>
    </table>
  )
}

export default CommonTable;