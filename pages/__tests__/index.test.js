import { fireEvent, render, screen } from "@testing-library/react"
import Index from "../index.js"

describe("Index Page", () => {
  it("when newTodo are added, they are rendered", () => {
    render(<Index />)

    const addNewTodoInput = screen.getByPlaceholderText("Enter your todo")
    const addNewTodoButton = screen.getByText("Add New Todo")

    const initialTodoItems = screen.queryAllByTestId("TodoItem")
    expect(initialTodoItems).toHaveLength(0)

    fireEvent.change(addNewTodoInput, { target: { value: "This is a todo 1" } })
    fireEvent.click(addNewTodoButton)
    fireEvent.change(addNewTodoInput, { target: { value: "This is a todo 2" } })
    fireEvent.click(addNewTodoButton)
    fireEvent.change(addNewTodoInput, { target: { value: "This is a todo 3" } })
    fireEvent.click(addNewTodoButton)

    const todoItems = screen.queryAllByTestId("TodoItem")
    expect(todoItems).toHaveLength(3)
    expect(screen.getByText("This is a todo 1")).toBeVisible()
    expect(screen.getByText("This is a todo 2")).toBeVisible()
    expect(screen.getByText("This is a todo 3")).toBeVisible()
  })

  it("when todo is clicked, line-through on the TodoItem is toggled", () => {
    render(<Index />)

    const addNewTodoInput = screen.getByPlaceholderText("Enter your todo")
    const addNewTodoButton = screen.getByText("Add New Todo")

    fireEvent.change(addNewTodoInput, { target: { value: "This is a todo 1" } })
    fireEvent.click(addNewTodoButton)

    const todoItemLabel = screen.getByText("This is a todo 1")

    expect(todoItemLabel).not.toHaveClass("line-through")

    fireEvent.click(todoItemLabel)

    expect(todoItemLabel).toHaveClass("line-through")

    fireEvent.click(todoItemLabel)

    expect(todoItemLabel).not.toHaveClass("line-through")
  })
})
