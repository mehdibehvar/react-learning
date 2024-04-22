import { sculptureList } from "../data.js";
import { useState } from "react";
export default function GalleryWithState() {
  const [index, setIndex] = useState(0);
  const [showmore, setShowmore] = useState(false);
  function handleClick() {
    setIndex(index + 1);
  }
  function handleShowmore() {
    setShowmore(!showmore);
  }

  let sculpture = sculptureList[index];
  console.log(index);
  return (
    <>
      <div className="glallery-card">
        <button onClick={handleClick}>Next</button>
        <h2>
          <i>{sculpture.name} </i>
          by {sculpture.artist}
        </h2>
        <h3>
          ({index + 1} of {sculptureList.length})
        </h3>
        <button onClick={handleShowmore}>
          {showmore ? "hide" : "show"} details
        </button>
        <hr />
        <img src={sculpture.url} alt={sculpture.alt} />
        {showmore && <p>{sculpture.description}</p>}
      </div>
    </>
  );
}
