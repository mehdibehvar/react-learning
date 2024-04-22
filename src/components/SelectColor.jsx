import React from "react";

const SelectColor = ({onchange,color}) => {
  return (
    <select value={color} onChange={(e)=>onchange(e)}>
      <option value="lightcoral">lightcoral</option>
      <option value="midnightblue">midnightblue</option>
      <option value="rebeccapurple">rebeccapurple</option>
    </select>
  );
};

export default SelectColor;
