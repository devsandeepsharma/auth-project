import { createContext } from "react";

const LoginContext = createContext({
    token: "",
    addToken: () => {},
    removeToken: () => {}
})

export default LoginContext;