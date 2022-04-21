import { createAtom} from "@reatom/core"
import { useAction, useAtom } from "@reatom/react"

/*
* * @deprecated
const changeName = declareAction()
const nameAtom = declareAtom("", on => {
  on(changeName, (state, payload) => payload)
})
*/

const nameAtom = createAtom(
  { setName: (value) => value },
  ({onAction, schedule}, state = "") => {
    onAction("setName", (payload) => {
      return state = payload
    })

    schedule(() => console.log(`STATE: ${state}`))

    return state
  }
)

function Form() {
  const [name, {setName}] = useAtom(nameAtom)
  const handleSetName = useAction(e => setName(e.target.value)) 

  
  return (
    <form>
      <label htmlFor="name">Enter your name</label>
      <input id="name" value={name} onChange={handleSetName} />
    </form>
  )
}

export default Form
