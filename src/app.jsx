import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import AuthLayout from './layout/authLayout';
import MainLayout from './layout/mainLayout';
import Contact from './pages/contact';
import Home from './pages/home';
import Login from './pages/login';
import NotFound from './pages/NotFound';
import Register from './pages/register';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="/auth" element={<AuthLayout />}>
          <Route index element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    );
  }
}
