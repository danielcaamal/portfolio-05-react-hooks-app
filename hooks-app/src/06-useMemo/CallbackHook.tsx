import { useCallback, useState } from "react";
import { ShowIncrement } from './ShowIncrement';


export const CallbackHook = () => {
    const [counter, setCounter] = useState(1);

    const increment = useCallback((value:number) => {
        setCounter((c) => c + value);
    }, []);

    return (
        <>
            <h1>CallbackHook Hook: {counter}</h1>
            <hr />

            <ShowIncrement 
                increment={() => increment(5)}
            />
        </>
    );
}