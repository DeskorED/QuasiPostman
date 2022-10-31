import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReqTable from "./ReqTable";
import TypeChanger from "./TypeChanger";

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<TypeChanger/>);

let xml = new XMLHttpRequest();
let myUrl = "https://rickandmortyapi.com/documentation";
xml.open("GET", myUrl);
xml.send();
(new ReqTable(xml.responseText)).display();
reportWebVitals();
