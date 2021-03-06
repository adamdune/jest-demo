import { fireEvent, render, screen } from "@testing-library/react"
import TodoItem from "../TodoItem.js"
import renderer from "react-test-renderer"

describe("TodoItem", () => {
  it("<TodoItem /> renders correctly when todo.isDone is false", () => {
    const tree = renderer
      .create(
        <TodoItem
          todo={{ title: "Hello World", isDone: false }}
          index={0}
          onChangeCheckbox={() => {}}
        />,
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  it("<TodoItem /> renders correctly when todo.isDone is true", () => {
    const tree = renderer
      .create(
        <TodoItem
          todo={{ title: "Lorem Ipsum", isDone: true }}
          index={0}
          onChangeCheckbox={() => {}}
        />,
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("while todo.isDone is true, label is rendered with a line-thorugh", () => {
    render(
      <TodoItem
        todo={{ title: "This is a todo", isDone: true }}
        onChangeCheckbox={() => {}}
        index={0}
      />,
    )

    const label = screen.getByText("This is a todo")

    expect(label).toHaveClass("line-through")
  })

  it("while todo.isDone is false, label is rendered without a line-through", () => {
    render(
      <TodoItem
        todo={{ title: "This is a todo", isDone: false }}
        onChangeCheckbox={() => {}}
        index={0}
      />,
    )

    const label = screen.getByText("This is a todo")

    expect(label).not.toHaveClass("line-through")
  })

  it("when checkbox is clicked, onChangeCheckbox is called", () => {
    const callback = jest.fn()

    render(
      <TodoItem
        todo={{ title: "This is a todo", isDone: false }}
        onChangeCheckbox={callback}
        index={0}
      />,
    )

    const input = screen.getByRole("checkbox")

    expect(callback).toHaveBeenCalledTimes(0)
    fireEvent.click(input)
    expect(callback).toHaveBeenCalledTimes(1)
  })

  it("when label is clicked, onChangeCheckbox is called", () => {
    const callback = jest.fn()

    render(
      <TodoItem
        todo={{ title: "This is a todo", isDone: false }}
        onChangeCheckbox={callback}
        index={0}
      />,
    )

    const label = screen.getByText("This is a todo")

    expect(callback).toHaveBeenCalledTimes(0)
    fireEvent.click(label)
    expect(callback).toHaveBeenCalledTimes(1)
  })
})
