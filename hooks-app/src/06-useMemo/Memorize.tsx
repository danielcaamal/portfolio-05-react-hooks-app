import { useMemo, useState } from 'react';
import { useCounter } from '../hooks/useCounter';
import { Small } from './Small';


export const Memorize = () => {
    const { counter, increment } = useCounter(1);
    

    const [show, setShow] = useState(true)
    return (
        <>
            <h1>Counter <Small value={counter.toString()}/></h1>

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