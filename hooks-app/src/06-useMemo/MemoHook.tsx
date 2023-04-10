import { useMemo, useState } from 'react';
import { useCounter } from '../hooks/useCounter';

const heavyStuff = (iterations: number = 100) => {
    for (let i = 0; i < iterations; i++) {
        console.log('Heavy stuff');
    }
    return `${iterations} iterations done`;
};


export const MemoHook = () => {
    const { counter, increment } = useCounter(4000);
    const [show, setShow] = useState(true)

    const memorizedValue = useMemo(() => heavyStuff(counter), [counter]);
    
    return (
        <>
            <h1>Counter <small>{counter.toString()}</small></h1>
            <h4>{memorizedValue}</h4>

            <button
                type="button"
                className='btn btn-primary mr-3'
                onClick={() => increment(1)}
            >+1</button>
            <button
                type="button"
                className='btn btn-outline-primary ml-3'
                onClick={() => setShow(!show)}
            >Show/Hide {JSON.stringify(show)}</button>
        </>
    );
}