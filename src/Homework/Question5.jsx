//question
import React from 'react';
//import Todo from './Todo';

export function Todo({text}) {
    return <li>{text}</li>;
}


// don't remove the export keyword here!
export const DUMMY_TODOS = [
    'Learn React',
    'Practice React',
    'Profit!'
];

// don't change the Component name "App"
export default function App() {

    return(
        <ul>
            {DUMMY_TODOS.map((item,index) => (
                <Todo key={index} text={text} />
            ))}
        </ul>
    );
}