import React, {createContext, useContext, useState} from "react";
import backendAPI from "../api/backend";

export const AuthContext = createContext({});

function AuthProvider({children}){
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(false);

    async function login({username, password}) {
        try{
            setLoading(true);
            const response = await backendAPI.post('/login', {
                username,
                password
            });
            const user = await response.data;
            console.log(user)
            setUser(user);
        }catch(e){
            console.log(e);
        }finally{
            setLoading(false);
        }
    }

    async function register({
        name, 
        username, 
        password,
        isProvider
    }) {
        try{
            setLoading(true);
            const response = await backendAPI.post('/login/register', {
                name,
                username,
                password,
                isProvider
            });
            const user = await response.data;
            console.log(user);
            setUser(user);
        }catch(e){
            console.log(e);
        }finally{
            setLoading(false);
        }
    }

    return (
        <AuthContext.Provider value={{
            user,
            loading,
            login,
            register
        }}>
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
