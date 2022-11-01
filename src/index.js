import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReqTable from "./ReqTable";
import TypeChanger from "./TypeChanger";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<TypeChanger/>);

const url = "https://rickandmortyapi.com/api";
fetch(url)
    .then(
        response => response.text() // .json(), .blob(), etc.
    ).then(
    text => console.log(text) // Handle here
);

reportWebVitals();
