import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FlashCardApp from './FlashCardApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<FlashCardApp />, document.getElementById('root'));
registerServiceWorker();
