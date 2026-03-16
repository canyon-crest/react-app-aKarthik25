import React from 'react'
import { useState } from 'react';
import Bowl from '../images/bowl.png';
import Fidget from '../images/fidget.png'
import Rattle from '../images/rattle.png'
import Skateboard from '../images/skateboard.png'
const images = [
    Bowl,
    Fidget,
    Rattle,
    Skateboard
];
const [currentIndex, setCurrentIndex] = useState(0)

const showNextImage = () => {
    if (currentIndex<images.length-1){
        setCurrentIndex(currentIndex+1)
    }
}    
function Image () {
    return (
            <div>
            {/* The button to trigger the reveal */}
            <img src = {images[currentIndex]} alt={`Image ${currentIndex + 1}`} style={{ maxWidth: '100%', height: 'auto' }} />
            <p>Image {currentIndex + 1} of {images.length}</p>
            <button onClick={showNextImage} disabled={currentIndex === images.length - 1}>
            {currentIndex === images.length - 1 ? 'Click to see more!': 'That is only a sneak peek on CAD!'}
        </button>
        </div>
    );
}
  export default Image