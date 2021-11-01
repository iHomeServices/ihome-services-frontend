import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from '../screens/Login';
import { Home } from '../screens/Home';
import { Register } from '../screens/Register';
import { ProviderDetails } from '../screens/ProviderDetails';
import { Profile } from '../screens/Profile';
import { EditProfile } from '../screens/EditProfile';
import { Settings } from '../screens/Settings';

import { useAuth } from "../hooks/auth";
const Stack = createNativeStackNavigator();

export function Routes(){
    const {user} = useAuth();
    console.log("user persistence asyncstorage", user);
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{
                    headerShown: false
                    }} />
                <Stack.Screen
                    name="Register"
                    component={Register}
                    options={{
                    headerShown: false
                    }} />
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                    headerShown: false
                    }} />
                <Stack.Screen
                    name="Settings"
                    component={Settings}
                    options={{
                    headerShown: false
                    }} />
                <Stack.Screen
                    name="ProviderDetails"
                    component={ProviderDetails}
                    options={{
                    headerShown: false
                    }} />
                <Stack.Screen
                    name="Profile"
                    component={Profile}
                    options={{
                    headerShown: false
                    }} />
                <Stack.Screen
                    name="EditProfile"
                    component={EditProfile}
                    options={{
                    headerShown: false,
                    }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}