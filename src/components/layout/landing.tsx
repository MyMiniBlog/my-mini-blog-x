import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function Landing() {
    
    const location = useLocation();

    useEffect(() => {
      const urlParams = new URLSearchParams(location.search);
      const code = urlParams.get('code');
   
      if (code) {
        // The user has logged in successfully.
        // You can now use the code to get an access token from GitHub.
        // After getting the access token, you can set `isLoggedIn` in local storage.
        localStorage.setItem('isLoggedIn', 'true');
      }
    }, [location]);
    
    const onButtonClick=()=> {
        window.location.href = 'https://github.com/login/oauth/authorize?client_id=Iv1.52634c192ad72a17';
    }


    return (
      <div>
        <h1>Welcome to mini blogs</h1>
        <h2>You can Signin with Github</h2>
        <button onClick={onButtonClick}><FontAwesomeIcon icon={faGithub} /> Login</button> 
      </div>
    );
   }
   
   export default Landing;