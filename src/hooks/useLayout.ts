import { LayoutContext } from '@contexts';
import { useContext } from 'react';


export const useLayout = () => {
    const context = useContext(LayoutContext);

    if (!context) {
        throw new Error('useLayout must be used within an LayoutProvider');
    }

    return context;
};
