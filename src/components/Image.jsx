import { useState } from "react";
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
    setCurrentIndex((prevIndex) => (prevIndex+1) % images.length);

}
