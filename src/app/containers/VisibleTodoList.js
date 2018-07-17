import { connect } from "react-redux";
import { toggleTodo, visibilityFilters } from "../actions";
import TodoList from "../components/TodoList";

const getVisibleTodos = (todos, filter) => {
  const { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } = visibilityFilters;

  switch (filter) {
    case SHOW_ALL:
      return todos;

    case SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed);

    case SHOW_COMPLETED:
      return todos.filter(todo => todo.completed);

    default:
      throw new Error(`Unknown filter ${filter}`);
  }
};

const mapStateToProps = ({ todos, visibilityFilter }) => ({
  todos: getVisibleTodos(todos, visibilityFilter)
});

const matchDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
});

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(TodoList);
