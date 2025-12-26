import { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    // 🔑 DEFAULT = PROPIETARIO
    const [userType, setUserType] = useState(() => {
        return localStorage.getItem("userType") || "propietario";
    });


    const toggleUserType = () => {
        setUserType((prev) => {
            const newType = prev === "propietario" ? "inquilino" : "propietario";
            localStorage.setItem("userType", newType); // guardamos en localStorage
            return newType;
        });
    };

    // opcional: sincronizar localStorage si alguien cambia el valor en otra pestaña
    useEffect(() => {
        const handleStorage = (e) => {
            if (e.key === "userType") setUserType(e.newValue);
        };
        window.addEventListener("storage", handleStorage);
        return () => window.removeEventListener("storage", handleStorage);
    }, []);

    return (
        <UserContext.Provider value={{ userType, toggleUserType }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);
