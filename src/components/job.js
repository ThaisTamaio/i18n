import React from "react";
import { FormattedDate, FormattedNumber, FormattedMessage } from 'react-intl';

const Job = (props) => {
  const { id, name, company, salary, city, date, views } = props.offer;
  const isSpanish = (navigator.language || navigator.userLanguage).includes("es");
  const salaryLabel = isSpanish ? (salary === 1 ? "millón" : "millones") : "million";

  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{company}</td>
      <td>{`${salary} ${salaryLabel}`}</td>
      <td>{city}</td>
      <td>
        <FormattedDate
          value={new Date(date)}
          year='numeric'
          month='long'
          day='numeric'
          weekday='long'
        />
      </td>
      <td><FormattedNumber value={views} /></td>
    </tr>
  );
};

export default Job;