import React, { useContext } from 'react'

import {userContext} from  './ContextHook'

export default function Checkout() {
    const value = useContext(userContext)
  return (
    <div>
      checkout as {value.user}
    </div>
  )
}
