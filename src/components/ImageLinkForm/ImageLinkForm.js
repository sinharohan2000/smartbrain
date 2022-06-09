import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange, onButtonSubmit}) =>{
  return(
    <div>
      <p className = 'f3 light-yellow'>
        {'I will now see if there are any faces in the image. Give me a picture a get started!'}
      </p>
      <div className = 'center'>
        <div className = 'center pa3 br3 shadow-1 form'>
          <input className = 'pa2 f4 w-70 center b--' type = 'tex' placeholder = 'Paste your URL here' onChange={onInputChange}/>
          <button
            className = 'w-30 grow f4 link ph3 pv2 dib white bg-light-purple b--light-purple onBu'
            onClick = {onButtonSubmit}
              >Detect</button>
        </div>
      </div>
    </div>
  );
}

export default ImageLinkForm;
