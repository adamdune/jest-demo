import Head from "next/head"
import { useState } from "react"

export default function Home() {
  const [todos, setTodos] = useState([
    { title: "do stuff and things", isDone: false },
    { title: "something else", isDone: true },
  ])

  const [newTodo, setNewTodo] = useState("")

  const onChangeCheckbox = (e, i) => {
    setTodos(
      todos.map((todo, j) => {
        if (i === j) {
          return { ...todo, isDone: e.target.checked }
        }
        return todo
      }),
    )
  }

  const createTodo = () => {
    if (newTodo) {
      setTodos(todos.concat([{ title: newTodo, isDone: false }]))
      setNewTodo("")
    }
  }

  return (
    <div>
      <Head>
        <title>Todo App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div>
          <h1>Todo App</h1>
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button onClick={createTodo}>Add New Todo</button>
          <div>
            {todos.map((todo, i) => (
              <div key={i}>
                <input
                  type="checkbox"
                  onChange={(e) => onChangeCheckbox(e, i)}
                  checked={todo.isDone}
                />
                <p className={todo.isDone ? `line-through` : "bg-red-500"}>
                  {todo.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
