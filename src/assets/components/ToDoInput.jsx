import React, { useState } from "react";

export default function ToDoInput(props) {
    const {handleNewTodo, toDoValue, setToDoValue} = props;



    return(
        <div className="input-container">
            <input value={toDoValue} onChange={(e) => {
                setToDoValue(e.target.value)
            }} onKeyDown={(e) => {
                if (e.key === "Enter") {
                    handleNewTodo(toDoValue);
                    setToDoValue('');
                }}} type="text" className="input input-tag" placeholder="Put a new to do..." />
            <button className="input input-button" onClick={() => {
                handleNewTodo(toDoValue)
                setToDoValue('')
            }}>
                Add
            </button>
        </div>
    )
}