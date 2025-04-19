import { createContext } from "react";

const AuthContext = createContext({
    token: null,
    user: {},
    addToken: () => {},
    removeToken: () => {},
    addUser: () => {},
    removeUser: () => {},
})

export default AuthContext;