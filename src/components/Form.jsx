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

    schedule(() => console.log(`NameAtom STATE: ${state}`))

    return state
  }
)

const ageAtom = createAtom(
  { setAge: (value) => value },
  ({onAction, schedule}, state = 0) => {
    onAction("setAge", (payload) => {
      return state = payload
    })

    schedule(() => console.log(`AgeAtom STATE: ${state}`))

    return state
  }
)

function Form() {
  const [name, {setName}] = useAtom(nameAtom)
  const [age, {setAge}] = useAtom(ageAtom)

  const handleSetName = useAction(e => setName(e.target.value)) 
  const handleSetAge = useAction(e => setAge(e.target.value))

  
  return (
    <form>
      <label htmlFor="name">Enter your name</label>
      <input id="name" value={name} onChange={handleSetName} />


      <label htmlFor="age">Enter your age</label>
      <input type="number" id="age" value={age} onChange={handleSetAge} />
    </form>
  )
}

export default Form
