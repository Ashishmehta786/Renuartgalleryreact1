
import './App.css';
import React, { useState, useRef } from 'react';
import TubeFiller from './TubeFiller.jsx';
import music from './musics.mp3'
import animal1 from './allimages/animal1.jpg'
import animal2 from './allimages/animal2.jpg'
  import object1 from './allimages/object1.jpg'
    import object2 from './allimages/object2.jpg'
import object3 from './allimages/object3.jpg'
import object4 from './allimages/object4.jpg'
  import h1 from './allimages/human.jpg'
  import h2 from './allimages/human2.jpg'
  import h3 from './allimages/human3.jpg'
import h4 from './allimages/human4.jpg'
import h5 from './allimages/human5.jpg'
  import h6 from './allimages/human6.jpg'
    import i1 from './allimages/insect1.jpg'
      

const App = () => {

  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  
  
  return (
     <div className="container">
      <div className="navbar">
        <a href="#about" className="nav-link">About</a>
        <a href="#animals" className="nav-link">Animals</a>
        <a href="#insects" className="nav-link">Insects</a>
        <a href="#objects" className="nav-link">Objects</a>
        <a href="#human" className="nav-link">Human</a>
      </div>
      <div className="song-controls">
        {isPlaying ? (
          <button onClick={handlePlayPause}>Pause</button>
        ) : (
          <button onClick={handlePlayPause}>Play</button>
        )}
        <a className="creditbro"href="https://youtube.com/watch?v=7ovH5_InVlA&feature=share"><h6>credit for the bgm</h6></a>
      </div>
     <div className="texttypo">
     <h4 className="headingtop"> Welcome to web page of my<span className="thisword">arts</span>  </h4>
     </div>
      
      <audio ref={audioRef} src={music} />
      <div id="about" className="section">About
        <div className="app-container"> 
          <TubeFiller />
          
        </div>
        <div classNams="aboutme">
        <h6>Myself renu currently studying in my 2nd year of undergraduate program at NIFT gandhinagar. Below are my arts showcased. </h6></div>
        </div>
      
       
       <div   className="section2">Animal Section  <img
          src={animal1}
          alt="Your Image"
          className="image"/>
      </div>
       <div  className="section2">Animal <img
          src={animal2}alt="Your Image"
          className="image"
          
        />
      </div>
      <div id="insects" className="section3">Insects Section
      <img
          src={insect1}
          alt="Your Image"
          className="image"
        /></div>
      <div id="objects" className="section4">
        Objects Section<img
          src={object1}
          alt="Your Image"
          className="image"
        /></div>
       
         <div id="animals" className="section2">Object<img
          src={object2"
          alt="Your Image"
          className="image"
        />
      </div><div id="animals" className="section2">Object <img
          src={object3}
          alt="Your Image"
          className="image"
        />
      </div><div id="animals" className="section2">Object<img
          src={object4}
          alt="Your Image"
          className="image"
        />
      </div>
    
      
      <div id="human" className="section5">Human Potrait Section<img
          src={human}
          alt="Your Image"
          className="image"
        /></div>
      <div id="human2" className="section5">Human Potrait<img
          src={human2}
          alt="Your Image"
          className="image"
        /> </div>
      <div id="human3" className="section5">Human Potrait<img
          src={human3}
          alt="Your Image"
          className="image"
        /></div>
      <div id="human4" className="section5">Human Potrait<img
          src={human4}
          alt="Your Image"
          className="image"
        /></div>
       <div id="human5" className="section5">Human Potrait<img
          src={human5}
          alt="Your Image"
          className="image"
        /></div><div id="human5" className="section5">Human Potrait<img
          src={human5}
          alt="Your Image"
          className="image"
        /></div>
    
    <div id="human6" className="section5">Human Potrait<img
          src={human6}
          alt="Your Image"
          className="image"
        />
    </div>
       </div>
    
    
    
  );
};

export default App; 