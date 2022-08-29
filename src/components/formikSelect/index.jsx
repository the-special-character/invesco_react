import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

function FormikSelect({
  field,
  form: { touched, errors },
  id,
  placeholder,
  label,
  inputClassName,
  options,
  ...props
}) {
  return (
    <div>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <select
        id={id}
        className={cn(
          'appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm',
          { [inputClassName]: !!inputClassName },
        )}
        {...field}
        {...props}
      >
        <option value="">{placeholder}</option>
        {options.map(x => (
          <option key={x.value} value={x.value}>
            {x.text}
          </option>
        ))}
      </select>
      {touched[field.name] && !!errors[field.name] && (
        <p className="font-light text-sm text-red-600">
          {errors[field.name]}
        </p>
      )}
    </div>
  );
}

FormikSelect.propTypes = {
  field: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired,
  }).isRequired,
  form: PropTypes.shape({
    touched: PropTypes.shape({}).isRequired,
    errors: PropTypes.shape({}).isRequired,
  }).isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  inputClassName: PropTypes.string,
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.exact({
      value: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

FormikSelect.defaultProps = {
  inputClassName: '',
};

export default FormikSelect;
