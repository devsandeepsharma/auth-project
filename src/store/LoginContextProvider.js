import { useState } from "react";
import LoginContext from "./LoginContext";

const LoginContextProvider = (props) => {

    const [token, setToken] = useState(null);

    const addToken = (value) => {
        setToken(value);
    }

    const removeToken = () => {
        setToken(null);
    }

    const objectData = {
        token: token,
        addToken: addToken,
        removeToken: removeToken,
    }

    return (
        <LoginContext.Provider value={objectData}>
            {props.children}
        </LoginContext.Provider>
    )
}

export default LoginContextProvider;