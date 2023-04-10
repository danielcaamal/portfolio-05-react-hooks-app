import { useCounter } from "../hooks/useCounter";


export const CounterWithCustomHook = () => {
    const { counter, increment, decrement, reset } = useCounter(10);
    const stepper = 2;

    return (
        <>
            <h1>Counter with Hook: {counter}</h1>
            <button type="button" onClick={() => decrement(stepper)} className="btn btn-primary">-1</button>
            <button type="button" onClick={reset} className="btn btn-primary">Reset</button>
            <button type="button" onClick={() => increment(stepper)} className="btn btn-primary">+1</button>
        </>
    );
}