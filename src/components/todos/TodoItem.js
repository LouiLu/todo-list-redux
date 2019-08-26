import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteTodo, markComplete } from '../../store/actions/todoAction';

const TodoItem = ({ todo, completed, deleteTodo, markComplete }) => {
  const { id, title } = todo;
  return (
    <li
      key={id}
      className="list-group-item d-flex justify-content-between align-items-center px-0"
      style={{ textDecoration: completed ? 'line-through' : 'none' }}
    >
      <label className="checkbox-wrapper">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => markComplete(id)}
        />
        <span className="checkmark"></span>
        {title}
      </label>

      <button className="btn btn-danger" onClick={() => deleteTodo(id)}>
        <i className="fas fa-times" />
      </button>
    </li>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  markComplete: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteTodo, markComplete }
)(TodoItem);
