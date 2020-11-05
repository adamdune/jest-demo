import { fireEvent, render, screen } from "@testing-library/react"
import AddNewTodo from "../AddNewTodo"

describe("AddNewTodo", () => {
  it("when input is populated, the value is reflected ", () => {
    render(<AddNewTodo createTodo={() => {}} />)

    const input = screen.getByPlaceholderText("Enter your todo")

    expect(input).toHaveDisplayValue("")

    fireEvent.change(input, {
      target: { value: "This is a todo" },
    })

    expect(input).toHaveDisplayValue("This is a todo")
  })

  it("while input is filled and button is clicked, onClickAddNewTodo is called and input is emptied", () => {
    const callback = jest.fn()

    render(<AddNewTodo createTodo={callback} />)

    const input = screen.getByPlaceholderText("Enter your todo")

    fireEvent.change(input, {
      target: { value: "This is a todo" },
    })

    fireEvent.click(screen.getByText("Add New Todo"))

    expect(callback).toHaveBeenCalledWith("This is a todo")
    expect(input).toHaveDisplayValue("")
  })

  it("while input is empty and button is clicked, onClickAddNewTodo is not called", () => {
    const callback = jest.fn()

    render(<AddNewTodo createTodo={callback} />)

    const input = screen.getByPlaceholderText("Enter your todo")

    expect(input).toHaveDisplayValue("")

    fireEvent.click(screen.getByText("Add New Todo"))

    expect(callback).toHaveBeenCalledTimes(0)
  })
})
