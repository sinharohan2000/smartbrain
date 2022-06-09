import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ box , imageUrl }) => {
  return(
    <div>
      <img id = 'inputimage' alt = 'face' className = 'faceRecog' src ={imageUrl}/>
      <div className = 'bounding-box' style={{top: box.topRow , right: box.rightCol , bottom: box.bottomRow , left: box.leftCol}}></div>
    </div>
  );
}

export default FaceRecognition;
