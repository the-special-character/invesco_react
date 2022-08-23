# invesco_react

## setup

- create src

  - create "index.js" file -> write any javascript code -> import code from app.js
  - create "app.js" file -> write a js code and export that code
  - install webpack
    `npm install -D webpack`
  - create "webpack.config.js" in root folder
  - visit [webpack](https://webpack.js.org/concepts/)
  - add following code

  ```javascript
  const path = require('path');

  module.exports = {
    entry: './src',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'main.js',
    },
  };
  ```

  - open "package.json" and add follwing script
    `"build": "webpack",`
  - run `npm run build`
  - setup babel visit [Babel](https://babeljs.io/setup#installation)
  - install `npm install --save-dev babel-loader @babel/core`

  ```javascript
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  ```

  - create ".babelrc" file and add follwind code

```json
{
  "presets": ["@babel/preset-env"]
}
```

# react setup

- install react and react-dom
  `npm install react react-dom`
- install `npm install -D @babel/preset-react`
- add `@babel/preset-react` in .babelrc file in preset array
- change entry point and js rule in "webpack.config.js" file
