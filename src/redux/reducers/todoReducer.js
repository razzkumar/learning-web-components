import {
  ADD_TODO,
  UPDATE_TODO_STATUS,
  UPDATE_FILTER,
  CLEAR_COMPLETED,
} from '../constants';

export const VisibilityFilters = {
  SHOW_ALL: 'All',
  SHOW_ACTIVE: 'Active',
  SHOW_COMPLETED: 'Completed',
};

const INITIAL_STATE = {
  todos: [],
  filter: VisibilityFilters.SHOW_ALL,
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case UPDATE_TODO_STATUS:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload.id ? { ...todo, ...action.payload } : todo
        ),
      };
    case UPDATE_FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    case CLEAR_COMPLETED:
      return {
        ...state,
        todos: state.todos.filter(todo => !todo.isComplete),
      };
    default:
      return state;
  }
};
