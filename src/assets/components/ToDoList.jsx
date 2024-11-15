import React from "react";
import ToDoCard from "./ToDocard";


export default function ToDoList(props) {
    const {todos } = props;

    return (
        <ul className="list">
            {todos.map((todo, todoIndex) => {
                return <ToDoCard {...props}
                            key={todoIndex}
                            index={todoIndex} 
                            todo={todo}
                        />
                })}
        </ul>
    )
}