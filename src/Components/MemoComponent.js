import React from 'react'

function MemoComponent({message}) {
    console.log('MEMO COMPONENT RENDERED');
  return (
    <div>{message}</div>
  )
}

export default React.memo(MemoComponent);