import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './header';
import Login from '../login/git-login';

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
    
    return (
      <div>
        {
          !isLoggedIn && (
            <div>
            <Header text={"Welcome to Mini Blogs"} additionalText='You can Sign in with Github' />
            <Login /> 
            </div>
          )
        }
       
      </div>
    );
   }
   
   export default Landing;