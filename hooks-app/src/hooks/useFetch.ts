import { useEffect, useState } from "react";


export const useFetch = <T>(url: string) => {
    const [state, setState] = useState({ data: {} as T, isLoading: true, hasError: null });

    const getFetch = async () => {
        setState({ ...state, isLoading: true });

        const resp = await fetch(url);
        const data = await resp.json();
        
        setState({
            ...state,
            data,
            isLoading: false,
        });
    };

    useEffect(() => {
        getFetch();
    }, [url]);

    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
    }
}