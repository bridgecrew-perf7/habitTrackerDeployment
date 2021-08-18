import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import '@fortawesome/fontawesome-free/js/all.js';

ReactDOM.render( // React.StrictMode: Component들을 한번 더 랜더링 해주고 잘못 된 것은 없는지 체크하는 역할(실제 배포 시 보이지 않음)
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
