import React from 'react'

function EventHandling() {
    const clickHandler = () =>{
        console.log('BUTTON CLICKED')
    }
  return (
    <div>
        <button onClick={clickHandler}>Click</button>
    </div>
  )
}

export default EventHandling