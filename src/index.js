import React from 'react';
import ReactDom from 'react-dom/client';
import Home from './app.jsx';

const rootApp = ReactDom.createRoot(document.getElementById('root'));
rootApp.render(<Home />);
