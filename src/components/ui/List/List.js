import React from 'react';
import PropTypes from 'prop-types';

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

List.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string),
};

List.defaultProps = {
  data: null,
};

export default List;
