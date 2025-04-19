import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import AuthContext from "../../store/AuthContext";

const ProtectedRoute = ({element}) => {

    const { token } = useContext(AuthContext);

    return (
        <Routes>
            {
                token 
                ? <Route path="/" element={element} />
                : <Route path="*" element={<Navigate to="/login" />} />
            }
      </Routes>
    )
}

export default ProtectedRoute;