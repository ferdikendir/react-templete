import { createContext } from 'react';

export type Theme = 'light' | 'dark' | 'default';

interface ThemeContextProps {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextProps>({
    theme: 'light',
    setTheme: () => { },
});

export default ThemeContext;
