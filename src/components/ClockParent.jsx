import { useState, useEffect } from 'react';
import Clock from './Clock.jsx';
import SelectColor from './SelectColor.jsx';

function useTime() {
  const [time, setTime] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

export default function ClockParent() {
  const time = useTime();
  const [color, setColor] = useState('lightcoral');
  const handleSelect=(e)=>{
    setColor(e.target.value)
  }
  return (
    <div>
      <p>
        Pick a color:{' '}
        <SelectColor color={color} onchange={handleSelect}/>
      </p>
      <Clock color={color} time={time.toLocaleTimeString()} />
    </div>
  );
}
