import { fireEvent, render, screen } from "@testing-library/react"
import Index from "../index.js"

describe("Index Page", () => {
  it("when newTodo are added, they are rendered", () => {
    render(<Index />)

    const addNewTodoInput = screen.getByPlaceholderText("Enter your todo")
    const addNewTodoButton = screen.getByText("Add New Todo")

    const initialTodoItems = screen.queryAllByTestId("TodoItem")
    expect(initialTodoItems).toHaveLength(0)

    fireEvent.change(addNewTodoInput, {
      target: { value: "This is a todo 1" },
    })
    fireEvent.click(addNewTodoButton)
    fireEvent.change(addNewTodoInput, {
      target: { value: "This is a todo 2" },
    })
    fireEvent.click(addNewTodoButton)
    fireEvent.change(addNewTodoInput, {
      target: { value: "This is a todo 3" },
    })
    fireEvent.click(addNewTodoButton)

    const todoItems = screen.queryAllByTestId("TodoItem")
    expect(todoItems).toHaveLength(3)
    expect(todoItems.map((item) => item.textContent)).toEqual([
      "This is a todo 1",
      "This is a todo 2",
      "This is a todo 3",
    ])
    // expect(screen.getByText("This is a todo 1")).toBeVisible()
    // expect(screen.getByText("This is a todo 2")).toBeVisible()
    // expect(screen.getByText("This is a todo 3")).toBeVisible()
  })

  it("when todo is clicked, line-through on the TodoItem is toggled", () => {
    render(<Index />)

    const addNewTodoInput = screen.getByPlaceholderText("Enter your todo")
    const addNewTodoButton = screen.getByText("Add New Todo")

    fireEvent.change(addNewTodoInput, {
      target: { value: "This is a todo 1" },
    })
    fireEvent.click(addNewTodoButton)

    const todoItemLabel = screen.getByText("This is a todo 1")

    expect(todoItemLabel).not.toHaveClass("line-through")

    fireEvent.click(todoItemLabel)

    expect(todoItemLabel).toHaveClass("line-through")

    fireEvent.click(todoItemLabel)

    expect(todoItemLabel).not.toHaveClass("line-through")
  })

  // it("when todo is clicked on a different todo, line-through on the original TodoItem is not toggled", () => {
  //   render(<Index />)

  //   const addNewTodoInput = screen.getByPlaceholderText("Enter your todo")
  //   const addNewTodoButton = screen.getByText("Add New Todo")

  //   fireEvent.change(addNewTodoInput, {
  //     target: { value: "This is a todo 1" },
  //   })
  //   fireEvent.click(addNewTodoButton)
  //   fireEvent.change(addNewTodoInput, {
  //     target: { value: "This is a todo 2" },
  //   })
  //   fireEvent.click(addNewTodoButton)

  //   const todoItemLabel1 = screen.getByText("This is a todo 1")
  //   const todoItemLabel2 = screen.getByText("This is a todo 2")

  //   expect(todoItemLabel2).not.toHaveClass("line-through")

  //   fireEvent.click(todoItemLabel1)

  //   expect(todoItemLabel2).not.toHaveClass("line-through")

  //   fireEvent.click(todoItemLabel1)

  //   expect(todoItemLabel1).not.toHaveClass("line-through")
  // })
})
