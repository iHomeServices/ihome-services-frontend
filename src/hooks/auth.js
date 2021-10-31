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
            const user = response.data;
            setUser(user);
        }catch(e){
            console.log(e);
            throw new Error("Não foi possível logar");
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

            const user = response.data;
            setUser(user);
        }catch(e){
            console.log(e);
            throw new Error("Não foi possível cadastrar");
        }finally{
            setLoading(false);
        }
    }

    async function logout(){
        setUser({});
    }

    return (
        <AuthContext.Provider value={{
            user,
            setUser,
            loading,
            login,
            logout,
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
