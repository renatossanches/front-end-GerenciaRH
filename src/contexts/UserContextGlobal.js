import { createContext, useContext, useState, useEffect } from 'react';
import { GetReturnPayload } from "../routers/private/requests/get/GetReturnPayload";

const UserContext = createContext();

export function UserProvider({ children }) {
    const [user, setUser] = useState(null);

    const getUser = () => user;

    useEffect(() => {
        async function fetchUser() {
            const fetchedUser = await GetReturnPayload();
            setUser(fetchedUser);
        }
        fetchUser();
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser, getUser }}>
            {children}
        </UserContext.Provider>
    );
}


export function useUser() {
    return useContext(UserContext);
}
