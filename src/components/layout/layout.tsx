import React, { useEffect, useState } from 'react';
import ShowMyArticle from '../article/show-my-article';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function MyLayout() {
  const [isLoggedIn,setIsLoggedIn] = useState(false)
  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn');
    setIsLoggedIn(loggedIn === 'true');
  }, []);



  

  const onButtonClick=()=> {
    window.location.href = 'https://github.com/logout';
    localStorage.removeItem('isLoggedIn');
    // Redirect the user to the login page or home page
 window.location.href = '/';
  }

    return (
      <div>
        {
          isLoggedIn && <button onClick={onButtonClick}><FontAwesomeIcon icon={faGithub} /> Logout</button> 
        }
        {
        isLoggedIn ? (<ShowMyArticle heading={'NugetArticle Heading'} content={'Blah.. blah..'} createdDate={''} />):(<p>Please log in.</p>)
        }
      </div>
    );
   }
   
   export default MyLayout;