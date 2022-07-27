import React from 'react';
import ReactDOM from 'react-dom/client';
import CompleteApp from './SimpleApp';
import SectionGallery from "./SimpleApp/Section"
import {SectionFooter,SectionAchievement} from "./SimpleApp/Section"

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
<>
<CompleteApp></CompleteApp>
<SectionGallery></SectionGallery>
<SectionFooter></SectionFooter>
<SectionAchievement></SectionAchievement>
</>
);


