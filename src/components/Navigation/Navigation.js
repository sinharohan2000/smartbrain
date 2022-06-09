import React from 'react';

const Navigation = ({onRouteChange,isSignedIn}) => {
    if(!isSignedIn){
      return (
        <div>
          <nav  style={{display : 'flex', justifyContent: 'right'}}>
            <p onClick={ () => onRouteChange('signin')} className = 'f3 pa3 ba dim white br2 pointer ma3'>Sign In</p>
            <p onClick={ () => onRouteChange('register')} className = 'f3 pa3 ba dim white br2 pointer ma3'>Register</p>
          </nav>
        </div>
      );
    }
    else{
      return(
        <nav  style={{display : 'flex', justifyContent: 'right'}}>
          <p onClick={()=>onRouteChange('signout')} className = 'f3 pa3 ba dim white br2 pointer ma3'>Sign Out</p>
        </nav>
      );
    }
}


export default Navigation;
