import { memo } from 'react';

export const Child = memo(({ number, increment } : { number: number, increment: (value:number) => void }) => {

    console.log('Child component was rendered');

    return (
        <button
            type="button"
            className="btn btn-primary mr-3"
            onClick={ () => increment( number ) }
        >
            { number }
        </button>
    )
});
