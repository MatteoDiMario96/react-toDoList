import React from 'react';

export default function ToDoCard(props) {
    const { index, todo, handleDeleteToDo, handleEditToDo} = props;
    

    return (
        <li>
            {index + 1}. {todo}
            <div className="action-container">
                <button onClick={() => handleDeleteToDo(index)}>
                    <i className="fa-solid fa-trash"></i>
                </button>
                <button onClick={() => handleEditToDo(index)}>
                    <i className="fa-solid fa-pen-to-square"></i>
                </button>
            </div>
        </li>
    );
}
