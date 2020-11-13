import Head from "next/head"
import { useState } from "react"
import AddNewTodo from "../components/AddNewTodo"
import TodoItem from "../components/TodoItem"

export default function Home() {
  const [todos, setTodos] = useState([])

  const onChangeCheckbox = (isDone, i) => {
    // const nextTodos = [...todos]
    // nextTodos[i] = { ...nextTodos[i], isDone: !isDone }
    // setTodos(nextTodos)

    setTodos(
      todos.map((todo, j) => {
        if (i === j) {
          return { ...todo, isDone: !isDone }
        }
        return todo
      }),
    )
  }

  const createTodo = (title) => {
    setTodos(todos.concat([{ title: title, isDone: false }]))
  }

  return (
    <div>
      <Head>
        <title>Todo App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center p-6">
        <h1 className="text-3xl font-bold text-blue-500">Todo App</h1>
        <div className="h-6" />
        <AddNewTodo createTodo={createTodo} />
        <div className="h-6" />
        <div>
          {todos.map((todo, i) => (
            <TodoItem
              key={i}
              todo={todo}
              index={i}
              onChangeCheckbox={onChangeCheckbox}
            />
          ))}
        </div>
      </main>
    </div>
  )
}
