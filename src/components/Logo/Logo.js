import React from 'react';
import Tilt from 'react-parallax-tilt';
import brain from './brain.png'
import './Logo.css'

const Logo = () => {
  return(
    <div >
      <Tilt className = 'ba b--white br4 ma4 ' style={{ height: '150px' ,width: '150px'}}>
        <div className = 'pa2'>
          <h1> <img alt='logo' src={brain}/> </h1>
        </div>
      </Tilt>
    </div>
  );
}

export default Logo;
