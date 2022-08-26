/* eslint-disable jsx-a11y/label-has-associated-control */
import { Field } from 'formik';
import React from 'react';
import FormikCheckbox from '../../components/formikCheckbox';
import FormikForm from '../../components/formikForm';
import FormikInput from '../../components/formikInput';

const wait = time =>
  new Promise(resolve => {
    setTimeout(resolve, time);
  });

const loginFields = [
  {
    name: 'email',
    id: 'email-address',
    placeholder: 'Email address',
    component: FormikInput,
    type: 'email',
    autoComplete: 'email',
    validate: value => {
      if (!value) return 'Required...';
      return '';
    },
  },
  {
    name: 'password',
    id: 'password',
    placeholder: 'Password',
    component: FormikInput,
    type: 'password',
    autoComplete: 'current-password',
    validate: value => {
      if (!value) return 'Required...';
      return '';
    },
  },
];

const initialValues = {
  email: '',
  password: '',
  rememberMe: false,
};

function Login() {
  return (
    <FormikForm
      initialValues={initialValues}
      onSubmit={async (values, actions) => {
        await wait(3000);
        console.log(values);
        actions.resetForm();
      }}
      fields={loginFields}
      btnTitle="Sign In"
    >
      <div className="flex items-center justify-between">
        <Field
          id="rememberMe"
          name="rememberMe"
          label="Remember Me"
          component={FormikCheckbox}
        />
        <div className="text-sm">
          <a
            href="#forgotPassword"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Forgot your password?
          </a>
        </div>
      </div>
    </FormikForm>
  );
}

export default Login;
