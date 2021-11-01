import React from 'react';

import { createContext, useContext, useState } from "react";
import { theme as myTheme, colorsDark, colorsLight } from "../global/styles/theme"

export const ThemeContext = createContext({});

export function ThemeProvider({children}) {
    const [theme, setTheme] = useState(myTheme);

    function toggleTheme(isDark) {
        console.log("isDark: " + isDark);
        let newTheme = { 
            ...theme,
            colors: isDark ? colorsDark : colorsLight
        };
        
        setTheme(newTheme);
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