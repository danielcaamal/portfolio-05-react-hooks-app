import { useRef } from "react";

export const FocusScreen = () => {

    const inputRef = useRef<HTMLInputElement>(null);

    const onClick = () => {
        // (document.querySelector("#focus-screen-name") as HTMLInputElement)?.select();
        inputRef.current?.select();
    }

    return (
        <>
            <h1>Focus Screen</h1>
            <hr />
            <input 
                id="focus-screen-name"
                type="text"
                placeholder="Enter your name"
                className="form-control"
                ref={inputRef}
            />

            <button
                className="btn btn-outline-primary mt-5"
                type="button"
                onClick={onClick}
                >Set Focus
            </button>
        </>
    )
}