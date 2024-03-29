import { Child } from './Child'
import { useCallback, useState } from 'react';

export const Parent = () => {

    const numbers = [2,4,6,8,10];
    const [value, setValor] = useState(0);

    const increment = useCallback( ( num: number ) => {
        setValor((c) => c + num )
    }, []);


    return (
        <div>
            <h1>Parent</h1>
            <p> Total: { value } </p>
            <hr />

            {
                numbers.map( n => (
                    <Child 
                        key={ n }
                        number={ n }
                        increment={ increment }
                    />
                ))
            }
            {/* <Hijo /> */}
        </div>
    )
}
