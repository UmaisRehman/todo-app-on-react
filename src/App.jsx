import './App.css';

import { useRef, useState } from 'react'
function App() {
  const input = useRef()
  const [array, setArray] = useState([])

  const AddTodo = (event) => {
    event.preventDefault()
    array.push(input.current.value)
    setArray([...array])
    input.current.value = ""
  }

  const deleteTodo = (index) => {
    array.splice(index, 1);
    setArray([...array]);
  }

  const editTodo = (index) => {
    array.splice(index, 1, prompt())
    setArray([...array]);
  }

  return (
    <>
      <h1>TODO APP</h1>
      <div>
        <form onSubmit={AddTodo}>
          <input type="text" placeholder='Add Work' ref={input} />
          <button type='submit'>Add</button>
        </form>
      </div>
      <ol>
        {array.length > 0 ? array.map((item, index) => {
          return <li key={index}>{item}
            <button onClick={() => deleteTodo(index)}>Delete</button>
            <button onClick={() => editTodo(index)}>Edit</button>
          </li>
        }) : <h1 className="no-item">No item found...</h1>}
      </ol>
    </>
  )
}


export default App
