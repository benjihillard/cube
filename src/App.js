import './App.scss';
import { Cube } from './Cube.js';
import { useState, useEffect } from "react"

function add(accumulator, a) {
  return accumulator + a;
}

function App() {

  const [angle, setAngle] = useState(1)
  const [click, setClick] = useState(false)
  const [direction, setDirection] = useState(1)
  const [x, setX] = useState(0)
  const [momentum, setMomentum] = useState(0)
  const [rate, setRate] = useState([])
  const [resist, setResist] = useState(1)
  const [start, setStart ] = useState(0)
  const [stop, setStop ] = useState(0)

  useEffect(() => {
    if (momentum > 0 ) {
      setTimeout(function () {
        setAngle(angle + momentum)
        setMomentum( momentum/2 )
      }, 50);
    } else {
      setResist(1)
      setRate([])
    }
  },[momentum]);

  const root = document.documentElement;
  root.style.setProperty('--background-color', (angle));

  const mouseDown = (event) => {
    console.log(event);
    setStart([event.timeStamp, event.clientX])
    setClick(true);
  }
  const mouseUp = (event) => {
    console.log(event.timeStamp);
    console.log(event.clientX);
    if ((event.clientX - start[1])) {
      console.log("current speed", ((event.timeStamp - start[0])/(event.clientX + start[1])) );
      setMomentum(((event.timeStamp - start[0])/(event.clientX + start[1])))
    }
    setMomentum(rate.reduce(add, 0) / rate.length )
    setClick(false)
  }
  const mouseMove = (event) => {
    const dir = event.clientX - x;
    setX(event.clientX);
    if (click) {
      setRate([...rate,event.clientX])
      if (dir !== 0) {
        setDirection(dir)
        setAngle(angle + (0.4 * dir))
      }
    }
  }


  //console.log(click);
  return (
    <div
      onMouseDown={mouseDown}
      onMouseUp={mouseUp}
      onMouseMove={mouseMove}
      className='yeet'>
      <div className='blah'></div>
      <Cube draggable={false} />
    </div>
  );
}

export default App;
