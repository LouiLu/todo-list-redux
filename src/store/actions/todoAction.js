import { ADD_TODO, UPDATE_TODO, DELETE_TODO } from './types';
import uuid from 'uuid';

// add todo
export const addTodo = title => dispatch => {
  const todo = {
    id: uuid.v4(),
    title,
    completed: false
  };
  //   console.log(todo);
  dispatch({
    type: ADD_TODO,
    payload: todo
  });
};

// delete todo
export const deleteTodo = id => dispatch => {
  console.log(id, 'delete todo by id');
  dispatch({
    type: DELETE_TODO,
    payload: id
  });
};

// mark todo complete
export const markComplete = id => dispatch => {
  dispatch({
    type: UPDATE_TODO,
    payload: id
  });
};
