import React, {createContext, useContext, useState} from "react";

export const AuthContext = createContext({});

function AuthProvider({children}){
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(false);

    return (
        <AuthContext.Provider value={}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth(){
    return useContext(AuthContext);
}

export {
    AuthProvider,
    useAuth
}
