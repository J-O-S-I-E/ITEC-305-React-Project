import React from 'react';
import {useState} from 'react';

export default function App() {

    const [showAlert, setShowAlert] = useState(false);

    return (
      <div>
        {showAlert && (
        <div data-testid="alert" id="alert">
          <h2>Are you sure?</h2>
          <p>These changes can't be reverted!</p>
          <button onClick={() => setShowAlert(flase)}>Proceed</button>
        </div>
    )}
        <button onClick={() => setShowAlert(true)}>Delete</button>
      </div>    
    );
}