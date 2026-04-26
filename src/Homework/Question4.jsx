//question
import React from 'react';
import {useState} from 'react';

// don't change the Component name "App"
export default function App() {

    const [isActive, setIsActive] = useState(false);

    return (
        <div>
            <p className={isActive ? 'active': ''}>Style me!</p>
            <button onClick={() => setIsActive(true)}>Toggle style</button>
        </div>
    );
}

/* CSS File

.active {
    color:red:
}

*/
