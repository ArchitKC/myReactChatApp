import React from 'react';

import Header from './../../Components/HomePage/Header/Header';
import Footer from './../../Components/HomePage/Footer/Footer';
import PageContent from './../../Components/HomePage/PageContent/PageContent'; 
import FeatureContent from '../../Components/HomePage/FeatureContent/FeatureContent';

const homePageContent=(props)=>{
    return(
        <div>
            <Header></Header>    
            <PageContent></PageContent> 
            <Footer></Footer>             
        </div>
    );
}

export default homePageContent;