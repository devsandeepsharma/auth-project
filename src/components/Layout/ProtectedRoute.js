import { useContext } from "react";

import AuthContext from "../../store/AuthContext";
import { Navigate, Route } from "react-router-dom";

const ProtectedRoute = ({element, ...rest}) => {
    const { token } = useContext(AuthContext);

    if (!token) {
        return <Navigate to="/login" />;
    }

    return <Route {...rest} element={element}/>
}

export default ProtectedRoute;