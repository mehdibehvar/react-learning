import  { useState } from 'react'

const Counter = () => {
    const [num, setNum] = useState(13);
    const handleIncrease=()=>{
        setNum(num + 1)
    }
  return (
    <div className='counter'>
        <div id="display">{num}</div>
        <button onClick={handleIncrease}>increase</button>
    </div>
  )
}
export default Counter