import React from 'react';
import PropTypes from 'prop-types';

import './row.css';

const Row = ({ left, right }) => {
  return (
    <div className="row mb2">
      <div className="col-md-6">
        {left}
      </div>
      <div className="col-md-6">
        {right}
      </div>
    </div>
  );
};

Row.propTypes = {
  left: PropTypes.node, // node - описывает, что это свойство что-то, что можно отрендерить на странице
  right: PropTypes.node // element - тоже самое, но только реакт-элементы
};

export default Row;
