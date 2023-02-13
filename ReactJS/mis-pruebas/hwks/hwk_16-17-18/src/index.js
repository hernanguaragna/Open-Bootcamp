import React from 'react';
import ReactDOM from 'react-dom/client';
//!agrego bootstrap pero arriba de css para que no se pisen los estilos
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import './index.css';
// import App from './App';

import reportWebVitals from './reportWebVitals';
// import AppRoutingOne from './AppRoutingOne';
import AppRoutingFinal from './AppRoutingFinal';
 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		{/* <App /> */}
		{/* <AppRoutingOne /> */}
		<AppRoutingFinal />
	</React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();