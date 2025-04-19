import { useContext } from "react";

import AuthContext from "../store/AuthContext";

const Home = () => {

    const { user } = useContext(AuthContext);

    return (
        <div 
            style={{maxWidth: "300px"}} 
            className="
            d-flex 
            flex-column 
            justify-content-center 
            align-items-center 
            p-4 m-auto mt-4 rounded shadow
            "
        >
            <img 
                style={{width: "200px", height:"200px"}} 
                className="rounded-circle" 
                src={user?.photoURL}
                alt="Profile Photo"
            />
            <h3 className="mt-1">{user?.displayName}</h3>
            <p>{user?.email}</p>
            <p className="
                bg-secondary
                text-white
                py-1
                px-3
                rounded
            "
            >
                {user?.emailVerified ? "Verifield": "Not Verifield"}
            </p>
        </div>
    )
}

export default Home;