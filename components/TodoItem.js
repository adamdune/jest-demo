import PropTypes from "prop-types"

const TodoItem = ({ todo, index, onChangeCheckbox }) => (
  <div className="flex items-center cursor-pointer">
    <input
      type="checkbox"
      onChange={() => onChangeCheckbox(todo.isDone, index)}
      checked={todo.isDone}
      id={`checkbox/${index}`}
      className="cursor-pointer"
    />
    <div className="w-2" />
    <label
      htmlFor={`checkbox/${index}`}
      className={`${todo.isDone ? "line-through" : ""} cursor-pointer`}
    >
      {todo.title}
    </label>
  </div>
)

TodoItem.propTypes = {
  todo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    isDone: PropTypes.bool.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  onChangeCheckbox: PropTypes.func.isRequired,
}

export default TodoItem
