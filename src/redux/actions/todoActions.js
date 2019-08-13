import {
  ADD_TODO,
  UPDATE_FILTER,
  CLEAR_COMPLETED,
  UPDATE_TODO_STATUS,
} from '../constants';

export const addTodo = task => ({
  type: ADD_TODO,
  payload: {
    id: new Date(),
    task,
    isComplete: false,
  },
});

export const updateTodoStatus = (id, isComplete) => ({
  type: UPDATE_TODO_STATUS,
  payload: {
    id,
    isComplete,
  },
});

export const updateFilter = filter => ({
  type: UPDATE_FILTER,
  payload: filter,
});

export const clearCompleted = () => ({ type: CLEAR_COMPLETED });
