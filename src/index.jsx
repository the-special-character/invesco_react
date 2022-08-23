import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app';
import Main from './main';

// Component Rules
// 1. Component Name should Start with capital letter
// 2. return only single element from component
// 3. apply inline style as object and property should be in camel case
// 4. instead of class use className as class is reserve word in javascript

// this lines are for virtul dom
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <>
    <App text="hello from props" />
    <Main text="hello from props" number={5} />
  </>,
);
