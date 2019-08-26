import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTodo } from '../../store/actions/todoAction';

const AddTodo = props => {
  const [title, setTitle] = useState('');
  const [error, setError] = useState(null);

  const onTitleChange = e => {
    setTitle(e.target.value);
  };

  // on add click action
  const onAddClick = title => {
    if (!checkTitleEmpty(title)) {
      props.addTodo(title);
      setTitle('');
    } else {
      setError('Empty Todo');
    }

    setTimeout(() => {
      setError(null);
    }, 3000);
    // checkTitleEmpty ? console.log('title is empty') : props.addTodo(title);
  };

  // check if title field is empty
  const checkTitleEmpty = title => (title.length === 0 ? true : false);

  return (
    <Fragment>
      <div className="input-group my-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Todo Item..."
          value={title}
          onChange={onTitleChange}
          required
        />
        <div className="input-group-append">
          <button
            className="btn btn-dark"
            type="button"
            id="add-todo"
            onClick={() => onAddClick(title)}
          >
            Add Todo
          </button>
        </div>
      </div>
      {error && (
        <div className="alert alert-warning fade show my-3" role="alert">
          <strong>Empty!</strong> You should enter a Todo - Dismiss in 2s
        </div>
      )}
    </Fragment>
  );
};

AddTodo.propTypes = {
  title: PropTypes.string,
  addTodo: PropTypes.func.isRequired
};

export default connect(
  null,
  { addTodo }
)(AddTodo);
