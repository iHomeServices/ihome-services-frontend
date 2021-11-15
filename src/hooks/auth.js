import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useContext, useEffect, useState } from "react";
import { Alert } from "react-native";
import backendAPI from "../api/backend";

const COLLECTION_USERS = '@ihomeservices:users';

export const AuthContext = createContext({});

function AuthProvider({ children }) {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(false);

    async function login({ username, password }) {
        try {
            setLoading(true);
            const response = await backendAPI.post('/login', {
                username,
                password
            });

            const user = response.data;
            await AsyncStorage.setItem(COLLECTION_USERS, JSON.stringify(user));
            setUser(user);
            return user;
        } catch (e) {
            console.log(e);
            Alert.alert('Login', 'Usuário ou senha inválidos');
        } finally {
            setLoading(false);
        }
    }

    async function register({
        name,
        username,
        password,
        isProvider
    }) {
        try {
            setLoading(true);
            const response = await backendAPI.post('/login/register', {
                name,
                username,
                password,
                isProvider
            });

            const user = response.data;
            setUser(user);
        } catch (e) {
            console.log(e);
            throw new Error("Não foi possível cadastrar");
        } finally {
            setLoading(false);
        }
    }

    function updateUser(newData){
        setUser({
            ...user,
            ...newData
        });
    }

    async function logout() {
        setUser({});
        await AsyncStorage.removeItem(COLLECTION_USERS);
    }

    async function loadUserStorageData() {
        const storage = await AsyncStorage.getItem(COLLECTION_USERS);

        if (storage) {
            const userLogged = JSON.parse(storage);
            setUser(userLogged);
        }
    }

    useEffect(() => {
        loadUserStorageData();
    }, []);

    return (
        <AuthContext.Provider value={{
            user,
            updateUser,
            loading,
            login,
            logout,
            register
        }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    return useContext(AuthContext);
}

export {
    AuthProvider,
    useAuth
}
