import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
const tech="React JS"
const lnk='https://www.google.com'
let show=false
root.render(
show&&<>
<h1>Hello {tech}</h1>
<p>para</p>
<a href={lnk}>link</a>
</>
);


