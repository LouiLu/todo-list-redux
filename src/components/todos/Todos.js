import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';

const Todos = props => {
  const { todos } = props.todos;

  return (
    <ul className="list-group list-group-flush">
      {todos.length > 0 ? (
        todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} completed={todo.completed} />
        ))
      ) : (
        <div className="alert alert-info" role="alert">
          Add Some Todos to start with.
        </div>
      )}
    </ul>
  );
};

Todos.propTypes = {
  todos: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(mapStateToProps)(Todos);
