import { createStore } from "@reatom/core"
import { reatomContext } from "@reatom/react"
import Form from "./components/Form"

function App() {
  const store = createStore()

  return (
    <div className="App">
      <reatomContext.Provider value={store}>
        <Form></Form>
      </reatomContext.Provider>
    </div>
  )
}

export default App
