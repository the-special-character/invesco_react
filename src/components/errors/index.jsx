import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function Errors({ errors, clearError }) {
  return (
    <div className="w-full fixed z-50 bottom-8 right-0 px-4">
      {Object.keys(errors).map(key => (
        <div
          key={key}
          className="max-w-7xl mx-auto my-2 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <strong className="font-bold">
            {`${errors[key].title}: `}
          </strong>
          <span className="block sm:inline">
            {errors[key].message}
          </span>
          <button
            type="button"
            className="absolute top-0 bottom-0 right-0 px-4 py-3"
            onClick={() => clearError(key)}
          >
            <svg
              className="fill-current h-6 w-6 text-red-500"
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <title>Close</title>
              <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
            </svg>
          </button>
        </div>
      ))}
    </div>
  );
}

Errors.propTypes = {
  errors: PropTypes.shape({}).isRequired,
  clearError: PropTypes.func.isRequired,
};

const mapStateToProps = store => ({
  errors: store.errors,
});

const mapDispatchToProps = dispatch => ({
  clearError: key =>
    dispatch({
      type: 'CLEAR_ERROR',
      payload: key,
    }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Errors);
