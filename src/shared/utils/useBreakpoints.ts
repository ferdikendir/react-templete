import { useState, useEffect } from 'react';

type Breakpoints = {
    isMobile: boolean;
    isTablet: boolean;
    isDesktop: boolean;
    width: number;
};

export function useBreakpoints(): Breakpoints {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const isMobile = width < 768;
    const isTablet = width >= 768 && width < 1024;
    const isDesktop = width >= 1024;

    return {
        isMobile,
        isTablet,
        isDesktop,
        width,
    };
}