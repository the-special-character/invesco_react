import React from 'react';
import { ThemeContext } from '../../context/themeContext';

function Home() {
  console.log('Home render');

  return (
    <div className="bg-red-400 p-4 flex justify-center">
      <ThemeContext.Consumer>
        {value => (
          <div className="flex flex-col">
            <h1>{`Current Theme is ${value.theme}`}</h1>
            <button
              type="button"
              onClick={value.changeTheme}
            >
              Change Theme
            </button>
          </div>
        )}
      </ThemeContext.Consumer>
    </div>
  );
}

export default Home;
