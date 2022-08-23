import React from 'react';
import PropTypes from 'prop-types';

function App({ text }) {
  return (
    <>
      <h1
        className="container"
        style={{
          backgroundColor: 'red',
          color: 'white',
        }}
      >
        {text}
      </h1>
      <input type="text" />
      <input type="password" />
      <input type="checkbox" />
    </>
  );
}

App.propTypes = {
  text: PropTypes.string,
};

App.defaultProps = {
  text: 'Hello Component',
};

export default App;
