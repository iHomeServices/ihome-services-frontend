import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect } from 'react';

import { createContext, useContext, useState } from "react";
import { theme as defaultTheme, colorsDark, colorsLight } from "../global/styles/theme"

export const ThemeContext = createContext({});

export function ThemeProvider({children}) {
    const [theme, setTheme] = useState(defaultTheme);

    function loadTheme(){
        AsyncStorage.getItem('theme').then(value => {
            if (value === 'dark') {
                setTheme({
                    ...defaultTheme,
                    colors: colorsDark
                });
            } else {
                setTheme({
                    ...defaultTheme,
                    colors: colorsLight
                });
            }
        });
    }

    useEffect(() => {
        loadTheme();
    }, []);

    function toggleTheme(isDark) {
        let newTheme = { 
            ...theme,
            colors: isDark ? colorsDark : colorsLight
        };
        
        setTheme(newTheme);

        //set in async storage
        AsyncStorage.setItem("theme", isDark ? "dark" : "light");
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    return useContext(ThemeContext);
}