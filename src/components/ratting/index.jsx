import React from 'react';
import { StarIcon } from '@heroicons/react/24/outline';
import PropTypes from 'prop-types';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function Ratting({ rate, count }) {
  return (
    <div className="mt-6">
      <h4 className="sr-only">Reviews</h4>
      <div className="flex items-center">
        <div className="flex items-center">
          {[0, 1, 2, 3, 4].map(rating => (
            <StarIcon
              key={rating}
              className={classNames(
                rate > rating
                  ? 'text-gray-900'
                  : 'text-gray-200',
                'h-5 w-5 flex-shrink-0',
              )}
              aria-hidden="true"
            />
          ))}
        </div>
        <p className="sr-only">{rate} out of 5 stars</p>
        <a
          href="#reviews"
          className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
        >
          {count} reviews
        </a>
      </div>
    </div>
  );
}

Ratting.propTypes = {
  rate: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
};

export default Ratting;
