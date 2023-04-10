
import {memo} from 'react';

export const ShowIncrement = memo(({increment}: {increment: () => void}) => {
    console.log('ShowIncrement component was rendered');
    return (
        <>
            <button
                type="button"
                className='btn btn-primary'
                onClick={() => {
                    increment();
                }}
            >
                Increment
            </button>
        </>
    );
});