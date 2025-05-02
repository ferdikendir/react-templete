import React, { useEffect, useState } from 'react';

import { ThemeType } from '@core/enums';
import { ThemeContext, Theme } from '@contexts'


export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(ThemeType.DEFAULT);

    useEffect(() => {
        const linkId = 'theme-css';

        let link = document.getElementById(linkId) as HTMLLinkElement | null;

        if (!link) {
            link = document.createElement('link');
            link.id = linkId;
            link.rel = 'stylesheet';
            document.head.appendChild(link);
        }

        link.href = `styles/themes/${theme}.css`; // public klasörüne göre ayarla

    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};