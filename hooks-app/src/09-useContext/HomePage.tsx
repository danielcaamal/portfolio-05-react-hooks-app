import { useContext } from "react";
import { UserContext } from "./context/UserContext";


export const HomePage = () => {
    const { user, setUserContext } = useContext(UserContext);

    return (
        <>
            <h1
                id='home-page-title'
                >HomePage: {user?.name}</h1>
            <hr />
            <pre id='home-page-pre'>
                { JSON.stringify(user, null, 3) }
            </pre>
            <button
                id='home-page-button'
                type="button" 
                className="btn btn-primary"
                onClick={ () => setUserContext({ id: 123, name: 'John Doe', email: 'email@email.com' }) }
                >Set User
            </button>
        </>
    );
};