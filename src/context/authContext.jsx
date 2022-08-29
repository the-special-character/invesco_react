import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import PropTypes from 'prop-types';
import axiosInstance from '../utils/axiosInstance';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userToken = sessionStorage.getItem('@tsc/user');

    if (userToken) {
      setUser(JSON.parse(userToken));
    }
  }, []);

  const register = useCallback(async (values, actions) => {
    try {
      const { confirmPassword, ...rest } = values;
      const res = await axiosInstance.post(
        'register',
        rest,
      );

      sessionStorage.setItem(
        '@tsc/user',
        JSON.stringify(res.data),
      );

      actions.resetForm();
      setUser(res.data);
    } catch (error) {
      actions.setErrors({
        serverError: error.response.data,
      });
    }
  }, []);

  const login = useCallback(async (values, actions) => {
    try {
      const { rememberMe, ...rest } = values;
      const res = await axiosInstance.post('login', rest);

      if (rememberMe) {
        localStorage.setItem(
          '@tsc/user',
          JSON.stringify(res.data),
        );
      } else {
        sessionStorage.setItem(
          '@tsc/user',
          JSON.stringify(res.data),
        );
      }

      actions.resetForm();
      setUser(res.data);
    } catch (error) {
      actions.setErrors({
        serverError: error.response.data,
      });
    }
  }, []);

  const logout = useCallback(() => {
    sessionStorage.clear();
    localStorage.clear();
    setUser(null);
  }, []);

  const value = useMemo(
    () => ({
      register,
      login,
      logout,
      user,
    }),
    [user, login, register, logout],
  );

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
