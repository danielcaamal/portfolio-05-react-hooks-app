import { useState } from "react";


export const CounterApp = () => {
    const [state, setState] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
    });

    const { counter1, counter2, counter3 } = state;

    const onClick = () => {
        setState({
            ...state,
            counter1: counter1 + 1,
        });
    }
    return (
        <>
            <h1>CounterApp (Example UseState)</h1>
            <div>
                <h2>Counter1: {counter1}</h2>
                <h2>Counter2: {counter2}</h2>
                <h2>Counter3: {counter3}</h2>
                <button type="button" onClick={onClick} className="btn btn-primary">+1</button>
            </div>
        </>
    );
};
