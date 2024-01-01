import './App.css';
import { useEffect } from 'react';

const handleClick = (e) => {
  e.target.children[0].play();

  const display = document.getElementById('display');
  const element = e.target.children[0];
  const elementLink = element.currentSrc;
  const splitted = elementLink.split('/');
  const lastFragment = splitted[splitted.length - 1];
  display.innerText = lastFragment;

  display.style.borderColor = 'limegreen';
  setTimeout(() => {
    display.style.borderColor = '';
  }, 90);
};

const handlePress = (e) => {
  let padElement = document.getElementById(e.key.toUpperCase());

  padElement.style.backgroundColor = 'limegreen';
  setTimeout(() => {
    padElement.style.backgroundColor = '';
  }, 90);

  padElement?.click();
};

const DrumElement = (props) => {
  return (
    <>
      <div
        id={props.name}
        className='drum-pad'
        onClick={handleClick}
        onKeyPress={handlePress}
      >
        {props.name}
        <audio src={props.audioLink} className='clip' id={props.name}></audio>
      </div>
    </>
  );
};

function App() {
  useEffect(() => {
    window.addEventListener('keydown', handlePress, true);
    return () => {
      window.removeEventListener('keydown', handlePress);
    };
  }, []);

  return (
    <div className='App' id='drum-machine'>
      <h1>Drum Machine</h1>
      {/* <h2>click on the drum pads or use your keyboard</h2> */}
      <div id='display' className='display'></div>
      <div id='drum-pads' className='drum-pads'>
        <DrumElement
          name='Q'
          audioLink='https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
        />
        <DrumElement
          name='W'
          audioLink='https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
        />
        <DrumElement
          name='E'
          audioLink='https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
        />
        <DrumElement
          name='A'
          audioLink='https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
        />
        <DrumElement
          name='S'
          audioLink='https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
        />
        <DrumElement
          name='D'
          audioLink='https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
        />
        <DrumElement
          name='Z'
          audioLink='https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
        />
        <DrumElement
          name='X'
          audioLink='https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
        />
        <DrumElement
          name='C'
          audioLink='https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
        />
      </div>
    </div>
  );
}

export default App;
