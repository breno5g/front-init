module.exports = {
  folders: ['src/components', 'src/utils', 'src/tests', 'src/pages', 'src/api'],
  packages: [
    {
      type: 'dev',
      name: 'eslint',
    },
    {
      type: 'dev',
      name: '@testing-library/react',
    },
    {
      type: 'prod',
      name: 'styled-components',
    },
    {
      type: 'prod',
      name: 'react-toastify',
    },
    {
      type: 'prod',
      name: 'react-router-dom',
    },
    {
      type: 'prod',
      name: 'axios',
    },
    {
      type: 'prod',
      name: 'node-sass',
    },
    {
      type: 'prod',
      name: 'sass',
    },
    {
      type: 'prod',
      name: 'react-icons',
    },
  ],
  clear: [
    {
      path: 'src/App.js',
      content: `function App() {
  return (
    <div className='App'>
      <h1>Hello world</h1>
    </div>
  );
}

export default App;`,
    },
    {
      path: 'src/index.js',
      content: `import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
    
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);`,
    },
    {
      path: '.eslintrc',
      content: `{
  "env": { "node": true, "commonjs": true, "es2021": true, "jest": true },
  "extends": "eslint:recommended",
  "rules": {
    "indent": ["error", 2],
    "linebreak-style": ["error", "unix"],
    "quotes": ["error", "single"],
    "semi": ["error", "always"],
    "no-unused-vars": [
      "warn",
      { 
        "argsIgnorePattern": "^_",
        "varsIgnorePattern": "^_",
        "caughtErrorsIgnorePattern": "^_"
      }
    ]
  }
}`,
    },
  ],
};
