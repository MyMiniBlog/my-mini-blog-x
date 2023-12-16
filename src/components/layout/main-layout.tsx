import React, { useEffect, useState } from 'react';
import Header from './header';
import SaveMyArticle from '../article/save-my-article';
import Logout from '../login/git-logout';

function MainLayout() {
  const [isLoggedIn,setIsLoggedIn] = useState(false)
  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn');
    setIsLoggedIn(loggedIn === 'true');
  }, []);

    return (
      <div>
        {
      isLoggedIn &&   <Header text={'All the Best for Your New Article'} />
        }
        {
           isLoggedIn && <Logout /> 
        }
        { isLoggedIn && <SaveMyArticle />}
        {/* {
        isLoggedIn ? (<ShowMyArticle heading={'NugetArticle Heading'} content={'Blah.. blah..'} createdDate={''} />):(<p>Please log in.</p>)
        } */}
      </div>
    );
   }
   
   export default MainLayout;