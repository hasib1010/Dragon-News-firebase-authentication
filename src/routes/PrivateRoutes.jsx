import { useContext } from "react"; 
import { AuthContext } from "../Provider/Provider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation()
    console.log(location);
    if (loading){
        return <span className="w-1/2 text-center loading loading-infinity loading-lg"></span>
    }
     if (user) {
        return children;
     }
     return <Navigate state={location.pathname} to={'/login'}></Navigate>
};

export default PrivateRoutes;