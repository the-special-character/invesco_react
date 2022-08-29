/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import FormikForm from '../../components/formikForm';
import FormikInput from '../../components/formikInput';
import { AuthContext } from '../../context/authContext';

// const wait = time =>
//   new Promise(resolve => {
//     setTimeout(resolve, time);
//   });

const registerFields = [
  {
    name: 'name',
    id: 'name',
    placeholder: 'Name',
    component: FormikInput,
    type: 'text',
    autoComplete: 'name',
    inputClassName: 'rounded-t-md',
    validate: value => {
      if (!value) return 'Required...';
      return '';
    },
  },
  // {
  //   name: 'gender',
  //   id: 'gender',
  //   placeholder: 'Please Select Gender',
  //   label: 'Gender',
  //   options: [
  //     {
  //       text: 'Male',
  //       value: 'male',
  //     },
  //     {
  //       text: 'Female',
  //       value: 'female',
  //     },
  //     {
  //       text: 'Other',
  //       value: 'other',
  //     },
  //   ],
  //   component: FormikSelect,
  //   validate: value => {
  //     if (!value) return 'Required...';
  //     return '';
  //   },
  // },
  // {
  //   name: 'country',
  //   id: 'country',
  //   placeholder: 'Please Select Country',
  //   label: 'Country',
  //   options: [
  //     {
  //       text: 'India',
  //       value: 'india',
  //     },
  //     {
  //       text: 'United State of America',
  //       value: 'usa',
  //     },
  //     {
  //       text: 'Singapore',
  //       value: 'singapore',
  //     },
  //   ],
  //   component: FormikSelect,
  //   validate: value => {
  //     if (!value) return 'Required...';
  //     return '';
  //   },
  // },
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
    inputClassName: 'rounded-b-md',
    validate: value => {
      if (!value) return 'Required...';
      return '';
    },
  },
];

const initialValues = {
  name: '',
  birthDate: '',
  // country: '',
  // gender: '',
  email: '',
  password: '',
  confirmPassword: '',
};

function Register() {
  return (
    <AuthContext.Consumer>
      {({ register }) => (
        <FormikForm
          initialValues={initialValues}
          onSubmit={register}
          fields={registerFields}
          btnTitle="Sign Up"
        />
      )}
    </AuthContext.Consumer>
  );
}

export default Register;
