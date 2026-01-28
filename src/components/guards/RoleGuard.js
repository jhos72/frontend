import { Navigate, useLocation } from "react-router-dom";
import { useUser } from "../../context/UserContext";

const RoleGuard = ({ children }) => {
    const { userType } = useUser();
    const location = useLocation();

    const allowedRoutes = {
        inquilino: "/buscar-alquiler",
        propietario: "/publicar",
    };

    const defaultRoute = allowedRoutes[userType];

    // 👉 si la ruta actual no coincide con el rol
    if (location.pathname !== defaultRoute) {
        return <Navigate to={defaultRoute} replace />;
    }

    return children;
};

export default RoleGuard;
