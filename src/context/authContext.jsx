import React, {
  createContext,
  useEffect,
  useState,
} from 'react';
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

  const register = async (values, actions) => {
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
  };

  const login = async (values, actions) => {
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
  };

  const logout = () => {
    sessionStorage.clear();
    localStorage.clear();
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        register,
        login,
        logout,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
