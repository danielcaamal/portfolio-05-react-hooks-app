import { useState } from "react";
import { UserContext } from "./UserContext";


export const UserProvider = ({ children } : { children: JSX.Element[] }) => {

    const [user, setUser] = useState({});

    const setUserContext = (user: any) => {
        setUser(user);
    }

    return (
        <UserContext.Provider value={{ user, setUserContext }}>
            { children }
        </UserContext.Provider>
    );
}