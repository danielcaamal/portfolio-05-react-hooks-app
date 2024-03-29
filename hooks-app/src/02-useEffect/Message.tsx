import { useEffect, useState } from "react"


export const Message = () => {
    const [coords, setCoords] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const onMouseMove = ({ x, y }: any) => {
            setCoords({ x, y });
        };

        window.addEventListener("mousemove", onMouseMove);

        return () => {
            console.log("Component unmounted");
            window.removeEventListener("mousemove", onMouseMove);
        }
    }, []);

    return (
        <>
            <h3>User already exists</h3>
            {
                JSON.stringify(coords, null, 2)
            }
        </>
    )
}