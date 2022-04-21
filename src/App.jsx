import { useState } from 'react'
import { createStore } from '@reatom/core'
import { reatomContext } from "@reatom/react"

function App() {
  const [count, setCount] = useState(0)

  const store = createStore()

  return (
    <div className="App">
    </div>
  )
}

export default App
