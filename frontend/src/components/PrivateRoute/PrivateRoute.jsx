import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

export const PrivateRoute = ({ children }) => {
    const token = Cookies.get("token");
    const decodedToken = jwtDecode(token);
    const userRole = decodedToken.role;
    const isAuth = !!token;
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuth) {
            navigate("/login");
        } else if (userRole === "customer") {
            navigate("/");
        }
    }, [isAuth, navigate, userRole]);

    if (!isAuth || userRole === "customer") {
        return navigate("/");
    }

    return children;
};
