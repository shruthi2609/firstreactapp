import React from 'react';
import ReactDOM from 'react-dom/client';
import GreetComponent from './PropsDemo/GreetComponent';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
<>
<GreetComponent username='john' email="john@gmail.com"></GreetComponent>
<GreetComponent username='peter' email="john@gmail.com"></GreetComponent>

</>
);


