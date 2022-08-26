/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, PureComponent } from 'react';
import PropTypes from 'prop-types';

export const ThemeContext = createContext({
  theme: 'dark',
});

ThemeContext.displayName = 'Theme';

export class ThemeProvider extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      theme: 'dark',
    };
  }

  changeTheme = () => {
    this.setState(({ theme }) => ({
      theme: theme === 'dark' ? 'light' : 'dark',
    }));
  };

  render() {
    const { children } = this.props;
    const { theme } = this.state;
    return (
      <ThemeContext.Provider
        value={{
          theme,
          changeTheme: this.changeTheme,
        }}
      >
        {children}
      </ThemeContext.Provider>
    );
  }
}

ThemeProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
