import { useRef, useState } from "react";
import "./styles.css";

export default function App() {
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);

  const onStart = () => {
    if(!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setTime(prev => prev + 1);
      },1000);
    }
  };
  const onRestart = () => {
    if(intervalRef.current) {
      onPause();
    }
    setTime(0);
  };
  const onPause = () => {
    if(intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };
  return (
    <div className="App">
      <div>{time}</div>
      <button onClick={onStart}>Start</button>
      <button onClick={onPause}>Pause</button>
      <button onClick={onRestart}>Restart</button>
    </div>
  );
}
