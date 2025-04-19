import { createContext } from "react";

const authContext = createContext({
    token: null,
    user: {},
    addToken: () => {},
    removeToken: () => {},
    addUser: () => {},
    removeUser: () => {},
})

export default authContext;