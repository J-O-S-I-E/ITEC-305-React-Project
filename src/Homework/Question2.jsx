//question
//make my useState
import {useState} from 'react';

//make a function that called the function
export default function App() {

    const [price,setPrice] =useState(100);

    function handleDiscount(){
        setPrice(75);
    }

    return (
        <div>
            <p data-testid="price">${price}</p>
            <button onClick={handleDiscount}>Apply Discount</button>
        </div>
    );
}