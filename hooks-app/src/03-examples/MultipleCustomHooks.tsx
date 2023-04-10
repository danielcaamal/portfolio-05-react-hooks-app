import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch";


export const MultipleCustomHooks = () => {
    const { counter, increment, decrement } = useCounter(1)
    const { data, isLoading, hasError } = useFetch<any>(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    // const { quote, author } = !!data && data[0];


    return (
        <>
            <h1>BreakingBad Quotes</h1>
            <hr />
            <div>
                {
                    hasError && <div className="alert alert-danger text-center">Error</div>
                }
                {
                    isLoading && <div className="alert alert-info text-center">Loading...</div>
                }
            </div>
            <blockquote className="blockquote text-end">
                <p className="mb-0">{data}</p>
                <footer className="blockquote-footer">{data}</footer>
            </blockquote>

            <button 
                className="btn btn-primary" 
                type="button"
                onClick={() => increment(1)}
                >Next Quote
            </button>
            <button 
                className="btn btn-primary" 
                type="button"
                onClick={() => decrement(1)}
                >Prev Quote
            </button>
        </>
    )
}