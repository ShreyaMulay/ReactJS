import React from 'react'

function MemoChild({childCount}) {
  console.log("re-render child")
  return (
    <div>
      <h1>Child : {childCount}</h1>
    </div>
  )
}

export default React.memo(MemoChild)
