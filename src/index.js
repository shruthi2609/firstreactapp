import React from 'react';
import ReactDOM from 'react-dom/client';
import ClassComponentDemo from './SimpleAppClassComponent/ClassComponentDemo';
import SimpleComponent from './SimpleAppClassComponent/SimpleComponent';
import {userDetails} from './userDetails'//importing data file
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
<>
{console.log(userDetails)} 
<ClassComponentDemo data={userDetails}></ClassComponentDemo>
<SimpleComponent tech="reactjs"></SimpleComponent>

</>
);


