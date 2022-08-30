import React from 'react';
import PropTypes from 'prop-types';

function Currency({ price }) {
  return (
    <p className="text-2xl text-gray-900">
      {new Intl.NumberFormat('en-IN', {
        currency: 'INR',
        style: 'currency',
      }).format(price)}
    </p>
  );
}

Currency.propTypes = {
  price: PropTypes.number.isRequired,
};

export default Currency;
