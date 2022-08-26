import React from 'react';
import { ThemeContext } from '../../context/themeContext';

function Contact() {
  return (
    <div>
      <ThemeContext.Consumer>
        {value => (
          <>
            <h1>{`Current Theme is ${value.theme}`}</h1>
          </>
        )}
      </ThemeContext.Consumer>
    </div>
  );
}

export default Contact;
