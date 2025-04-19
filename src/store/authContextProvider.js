import { useState } from "react";

import AuthContext from "./AuthContext";

const AuthContextProvider = ({children}) => {

    const [token, setToken] = useState(null);
    const [user, setUser] = useState({});

    const addToken = (token) => {
        setToken(token);
    }

    const removeToken = () => {
        setToken(null);
        localStorage.removeItem("token");
    }

    const addUser = (user) => {
        setUser(user);
    }

    const removeUser = () => {
        setUser({});
        localStorage.removeItem("user");
    }

    const store = {
        token: token,
        user: user,
        addToken: addToken,
        removeToken: removeToken,
        addUser: addUser,
        removeUser: removeUser,
    }

    return (
        <AuthContext value={store}>
            {children}
        </AuthContext>
    )
}

export default AuthContextProvider;