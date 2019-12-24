import React from 'react';

class Todos extends React.Component {
  state = {
    todos: [
        {
            id: 1,
            title: 'Task 1',
            completed: false
        },
    ]
  }
  render() {
    return (
      <div>
        Todos
      </div>
    );
  }
}

export default Todos;
