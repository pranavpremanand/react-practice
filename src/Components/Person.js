import React from 'react'

function Person({person}) {
  return (
    <div>
        <h3>
        {person.name}
        </h3>
    </div>
  )
}

export default Person