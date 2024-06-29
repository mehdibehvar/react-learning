import {  useEffect, useState } from "react";
import Counter from "../components/test/Counter";

function Home() {
  const [mount, setMount] = useState(true);
  return (
    <div className="h-16 text-lg mt-12 w-full gap-4 text-red-700 font-bold p-8 flex flex-col items-center justify-center">
      <button className="p-1 border-2 border-black" onClick={()=>setMount((prevState) => (prevState ? false : true))}>
        unmount the counter
      </button>
      {mount ? <Counter /> : <h3>component was unmounted</h3>}
    </div>
  );
}

export default Home;
