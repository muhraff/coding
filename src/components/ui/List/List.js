/* eslint-disable react/prop-types */
import React from 'react';

const List = ({ data }) => {
  if (!data) {
    return null;
  }

  return (
    <ul>
      {data.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

export default List;
