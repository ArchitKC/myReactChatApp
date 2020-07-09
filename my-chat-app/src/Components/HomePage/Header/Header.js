import React from 'react';
import { Link } from 'react-router-dom';

import  './Header.css';

const header = (props)=>{
  return(           
      <header class="header-login-signup">
        <div class="header-limiter">
          <h1>
            <Link to="/">Coding<span>Cafe</span></Link>
          </h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to ="/">About</Link>
                <Link to="/">Contact Us</Link>
            </nav>            
            <ul>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/signup">Sign Up</Link></li>
            </ul>
        </div>
      </header>      
      );
}

export default  header;