import { useEffect, useState } from "react";
import { Message } from './Message';

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
    });

    const { name, email } = formState;

    const onInputChange = ({ target }: any) => {
        setFormState({
            ...formState,
            [target.name]: target.value,
        });
    }

    useEffect(() => {
        console.log("email changed");
        }, 
        [email]
    );

    return (
        <>
            <h1>Simple form</h1>
            <br />
            <input
                type="text"
                className="form-control"
                placeholder="Your name"
                name="name"
                value={name}
                onChange={onInputChange}
            />
            <input
                type="email"
                className="form-control mt-3"
                placeholder="email@email.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />
            {
                name === "123" && <Message />
            }
        </>
    );
}