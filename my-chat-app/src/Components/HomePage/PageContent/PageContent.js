import React from 'react';
import {Link} from 'react-router-dom';
import   './PageContent.css';

const pageContent=(props)=>{
    return(
        <div class="splash-container">
            <div class="splash">
                <h1 class="splash-head">WEB CHAT APP</h1>
                <p class="splash-subhead">
                    Let's talk with our loved ones
                </p>

                <div id="custom-button-wrapper">
                <Link to = '/login'> 
                    <div class="dots-container">
                      
                    </div>
                    <span className="buttoncooltext">Get Started</span>
                    
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default pageContent;