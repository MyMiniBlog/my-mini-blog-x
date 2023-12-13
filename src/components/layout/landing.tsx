import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './header';
import MyLayout from './layout';

function Landing() {
    
    const location = useLocation();
    const [isLoggedIn,setIsLoggedIn] = useState(false)

    useEffect(() => {
      const urlParams = new URLSearchParams(location.search);
      const code = urlParams.get('code');
   
      if (code) {
        // The user has logged in successfully.
        // You can now use the code to get an access token from GitHub.
        // After getting the access token, you can set `isLoggedIn` in local storage.
        localStorage.setItem('isLoggedIn', 'true');
        setIsLoggedIn(true)
      }
    }, [location]);
    
    const onButtonClick=()=> {
        window.location.href = 'https://github.com/login/oauth/authorize?client_id=Iv1.52634c192ad72a17';
    }


    return (
      <div>
        {
          !isLoggedIn && (
            <div>
            <Header text={"Welcome to Mini Blogs"} additionalText='You can Sign in with Github' />
            <button onClick={onButtonClick}><FontAwesomeIcon icon={faGithub} /> Login</button> 
            </div>
          )
        }
       
      </div>
    );
   }
   
   export default Landing;