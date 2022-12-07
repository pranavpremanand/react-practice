import React,{useEffect, useRef} from "react";

function UseRef() {
    const focusInput = useRef()
    useEffect(()=>{
        focusInput.current.focus()
    })
  return (
    <div>
      <input ref={focusInput} type={"text"} />
    </div>
  );
}

export default UseRef;
