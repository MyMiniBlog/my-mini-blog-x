import React, { useEffect, useState } from 'react';
import ShowMyArticle from '../article/show-my-article';
import Landing from './landing';

function MyLayout() {
  const [isLoggedIn,setIsLoggedIn] = useState(false)

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn');
    setIsLoggedIn(loggedIn === 'true');
  }, []);

    return (
      <div>
        {
        isLoggedIn ? (<ShowMyArticle heading={'NugetArticle Heading'} content={'Blah.. blah..'} createdDate={''} />):(<p>Please log in.</p>)
        }
      </div>
    );
   }
   
   export default MyLayout;