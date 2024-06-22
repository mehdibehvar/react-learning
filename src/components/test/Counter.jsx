import { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const handle = setInterval(() => {
      setCount(prevCount => prevCount + 1);
      console.log('interval');
    }, 1000);

    // Cleanup function
    return () => {
      clearInterval(handle);
    };
  }, []);


  return <div className="text-lg text-red-700 font-bold w-32 border-2 border-blue-500 flex items-center justify-center">Count: {count}</div>;
}

export default Counter;
