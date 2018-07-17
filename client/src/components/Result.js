import React from 'react';
import noimage from 'no-image.jpg';

const Result = props => {
  //console.log(props.list.length);

  return (
    <div className="row container-fluid">
      <table className="table table-striped">
        <tbody>
          <tr>
            <th>Name</th>
            <th>Address</th>
          </tr>
          {props.list.map(result => {
            return (
              <tr key={result.name}>
                <td>{result.name}</td>
                <td>{result.address}</td>
                <td>
                  <img src={result.photo_reference} width="600" height="400" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Result;
