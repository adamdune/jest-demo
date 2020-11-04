const { useState } = require("react")
import PropTypes from "prop-types"

const AddNewTodo = ({ createTodo }) => {
  const [newTodo, setNewTodo] = useState("")

  const onClickAddNewTodo = () => {
    if (newTodo) {
      createTodo(newTodo)
      setNewTodo("")
    }
  }

  return (
    <div className="flex flex-col items-center">
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        className="bg-gray-800 p-2 outline-none w-64"
        placeholder="Enter your todo"
      />
      <div className="h-2" />
      <button onClick={onClickAddNewTodo} className="bg-blue-700 px-2 py-1">
        Add New Todo
      </button>
    </div>
  )
}

AddNewTodo.propTypes = {
  createTodo: PropTypes.func.isRequired,
}

export default AddNewTodo
