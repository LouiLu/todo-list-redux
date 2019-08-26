import { ADD_TODO, UPDATE_TODO, DELETE_TODO } from '../actions/types';

// some init data for testings
const initialState = {
  todos: [
    {
      id: 1,
      title: 'todo 1',
      completed: false
    },
    {
      id: 2,
      title: 'todo 2',
      completed: false
    },
    {
      id: 3,
      title: 'todo 3',
      completed: true
    },
    {
      id: 4,
      title: 'todo 4',
      completed: false
    }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [action.payload, ...state.todos]
      };
    case UPDATE_TODO:
      return {
        todos: state.todos.map(todo => {
          if (todo.id === action.payload) {
            todo.completed = !todo.completed;
          }

          return todo;
        })
      };
    case DELETE_TODO:
      return { todos: state.todos.filter(todo => todo.id !== action.payload) };
    default:
      return state;
  }
};
