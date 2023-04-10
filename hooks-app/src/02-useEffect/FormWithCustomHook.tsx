import { useEffect, useState } from "react";
import { Message } from './Message';
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {
    const { formState: { name, email, password, errors } , onInputChange, onResetForm, } = useForm({
        name: "",
        email: "",
        password: ""
    })

    return (
        <>
            <h1>Form with custom Hook</h1>
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
            <input
                type="password"
                className="form-control mt-3"
                placeholder="paassword"
                name="password"
                value={password}
                onChange={onInputChange}
            />
            <button 
                type="button" 
                className="btn btn-primary"
                onClick={onResetForm}
                >Reset
            </button>
            {errors.length > 0 && <Message />}
        </>
    );
}