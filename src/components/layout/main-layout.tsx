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
      isLoggedIn &&
      (<div>
          <Header text={'All the Best for Your New Article'} />
          <Logout /> 
          <SaveMyArticle />
      </div>)  
        }
      </div>
    );
   }
   
   export default MainLayout;