import { useState } from "react";


export const useCounter = (initialValue?:number) => {
    const [counter, setCounter] = useState(initialValue ?? 0);
    
    const increment = (value?:number) => {
        setCounter(counter + (value ?? 1));
    };
    
    const decrement = (value?:number) => {
        setCounter(counter - (value ?? 1));
    };

    const reset = () => {
        setCounter(initialValue ?? 0);
    }
    
    return {
        counter,
        increment,
        decrement,
        reset
    };
}