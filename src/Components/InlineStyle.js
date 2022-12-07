import React from 'react'

function InlineStyle() {
    let header = {
        fontSize:'50px',
        color:'red'
    }
  return (
    <div><h1 style={header}>InlineStyle</h1></div>
  )
}

export default InlineStyle