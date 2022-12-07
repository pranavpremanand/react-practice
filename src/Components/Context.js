import React, { useContext, useEffect, useState } from "react";
import { useReducer } from "react";
import { userContext } from "../App";

const initialValue = 0;
const reducer = (state, action) => {
  if (action === "increment") {
    return state + 1;
//   } else if (action === "decrement") {
//     return state - 1;
//   } else if (action === "reset") {
//     return initialValue;
  } else {
    return state;
  }
};
function Context() {
  const [state, dispatch] = useReducer(reducer, initialValue);
//   const user = useContext(userContext);
//   const [hai, setHai] = useState("");
//   useEffect(() => {
//     setHai("hello world");
//   }, []);

  return (
    <div>
      {/* <h2>{user}</h2>
      {<h2>{hai}</h2>} */}

      <h2>{state}</h2>
      <button onClick={()=>dispatch("increment")}>Increase</button>
      {/* <button onClick={()=>dispatch("decrement")}>Decrease</button>
      <button onClick={()=>dispatch("reset")}>Reset</button> */}
    </div>
  );
}

export default Context;
