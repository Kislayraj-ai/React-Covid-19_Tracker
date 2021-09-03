import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';

const CovidList = (props) => {
  const {
    Country,
    NewConfirmed,
    NewRecovered,
    TotalConfirmed,
    TotalDeaths,
    NewDeaths,
  } = props.data;

  return (
    <>
      <tbody className="tableBody">
        <tr>
          <td>{props.Index}</td>
          <td>{Country}</td>
          <td>{NewConfirmed}</td>
          <td>{NewRecovered}</td>
          <td>{NewDeaths}</td>
          <td>{TotalConfirmed}</td>
          <td>{TotalDeaths}</td>
        </tr>
      </tbody>
    </>
  );
};
export default CovidList;
