import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import StartingPageContent from "../components/StartingPage/StartingPageContent";
import LoginContext from "../store/LoginContext";

const HomePage = () => {
  const history = useHistory();
  const { removeToken } = useContext(LoginContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      localStorage.removeItem("token");
      removeToken();
      history.replace("/auth"); 
    }, 60 * 1000);

    return () => clearTimeout(timer); 
  }, [history]);

  return <StartingPageContent />;
};

export default HomePage;
