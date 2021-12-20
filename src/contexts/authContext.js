import { createContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

export const AuthContext = createContext();

const initalState = {
    _id: '',
    email: '',
    role: '',
    accessToken: '',
}

export const AuthProvider = ({
    children
}) => {

    const [user, setUser] = useLocalStorage('user', initalState);

    const login = (authData) => {
        setUser(authData);
    }

    const logout = () => {
        setUser(initalState);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}
