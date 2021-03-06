import React from 'react';

// import Todo from './components/Todo'
import Todo from './Todo';

const TodoList = ({todos, setTodos, filteredTodos}) => {


    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map(todo => (
                    <Todo 
                        todos={todos}
                        todo={todo}
                        setTodos={setTodos}
                    />
                ))}
            </ul>
        </div>
    );
}

export default TodoList;