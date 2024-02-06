import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { useEffect } from "react";

export const PrivateRoute = ({ children }) => {
    const navigate = useNavigate();
    const token = Cookies.get("token");

    useEffect(() => {
        if (!token) {
            navigate("/login");
        } else {
            try {
                const decodedToken = jwtDecode(token);
                const userRole = decodedToken.role;

                if (userRole === "customer") {
                    navigate("/");
                }
            } catch (error) {
                console.error("Error:", error);
                alert("Nieprawidłowy token. Zaloguj się ponownie.");
                navigate("/login");
            }
        }
    }, [token, navigate]);

    return !token || (token && jwtDecode(token)?.role === "customer") ? (
        <></>
    ) : (
        children
    );
};
