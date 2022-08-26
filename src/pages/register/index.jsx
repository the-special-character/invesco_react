/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import FormikForm from '../../components/formikForm';
import FormikInput from '../../components/formikInput';

const wait = time =>
  new Promise(resolve => {
    setTimeout(resolve, time);
  });

const registerFields = [
  {
    name: 'name',
    id: 'name',
    placeholder: 'Name',
    component: FormikInput,
    type: 'text',
    autoComplete: 'name',
    validate: value => {
      if (!value) return 'Required...';
      return '';
    },
  },
  {
    name: 'birthDate',
    id: 'birthDate',
    placeholder: 'Birth Date',
    component: FormikInput,
    type: 'date',
    autoComplete: 'birth-date',
    validate: value => {
      if (!value) return 'Required...';
      return '';
    },
  },
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
    autoComplete: 'new-password',
    validate: value => {
      if (!value) return 'Required...';
      return '';
    },
  },
  {
    name: 'confirmPassword',
    id: 'confirmPassword',
    placeholder: 'Confirm Password',
    component: FormikInput,
    type: 'password',
    autoComplete: 'new-password',
    validate: value => {
      if (!value) return 'Required...';
      return '';
    },
  },
];

const initialValues = {
  name: '',
  birthDate: '',
  email: '',
  password: '',
  confirmPassword: '',
};

function Register() {
  return (
    <FormikForm
      initialValues={initialValues}
      onSubmit={async (values, actions) => {
        await wait(3000);
        console.log(values);
        actions.resetForm();
      }}
      fields={registerFields}
      btnTitle="Sign Up"
    />
  );
}

export default Register;
