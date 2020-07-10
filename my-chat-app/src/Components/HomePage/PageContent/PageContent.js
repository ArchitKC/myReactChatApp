import React from 'react';
import {Link} from 'react-router-dom';
import  './PageContent.css';

const pageContent=(props)=>{
    return(
        <div className="splash-container">
            <div className="splash">
                <h1 className="splash-head">WEB CHAT APP</h1>
                <p className="splash-subhead">
                    Let's talk with our loved ones
                </p>

                <div id="custom-button-wrapper">
                <Link to = '/login'> 
                    <div className="dots-container">
                      
                    </div>
                    <span className="buttoncooltext">Get Started</span>
                    
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default pageContent;