import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    // 🔑 DEFAULT = PROPIETARIO
    const [userType, setUserType] = useState("propietario");

    const toggleUserType = () => {
        setUserType(prev =>
            prev === "propietario" ? "inquilino" : "propietario"
        );
    };

    return (
        <UserContext.Provider value={{ userType, toggleUserType }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);
