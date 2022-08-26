import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

function FormikInput({
  field,
  form: { touched, errors },
  id,
  placeholder,
  inputClassName,
  ...props
}) {
  return (
    <div>
      <label htmlFor={id} className="sr-only">
        {placeholder}
      </label>
      <input
        id={id}
        placeholder={placeholder}
        className={cn(
          'appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm',
          { [inputClassName]: !!inputClassName },
        )}
        {...field}
        {...props}
      />
      {touched[field.name] && !!errors[field.name] && (
        <p className="font-light text-sm text-red-600">
          {errors[field.name]}
        </p>
      )}
    </div>
  );
}

FormikInput.propTypes = {
  field: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
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
};

FormikInput.defaultProps = {
  inputClassName: '',
};

export default FormikInput;
