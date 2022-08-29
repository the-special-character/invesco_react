import { Field, Form, Formik } from 'formik';
import React from 'react';

function FormikForm({
  children,
  fields,
  btnTitle,
  ...props
}) {
  return (
    <Formik {...props}>
      {({ isValid, dirty, isSubmitting, errors }) => (
        <Form className="mt-8 space-y-6">
          {errors.serverError && (
            <p className="text-red-600 font-semibold text-lg text-center">
              {errors.serverError}
            </p>
          )}
          <div className="rounded-md shadow-sm -space-y-px">
            {fields.map(x => (
              <Field key={x.name} {...x} />
            ))}
          </div>

          {children}

          <div>
            <button
              disabled={isSubmitting || !(dirty && isValid)}
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-slate-400 disabled:cursor-not-allowed"
            >
              {btnTitle}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default FormikForm;
