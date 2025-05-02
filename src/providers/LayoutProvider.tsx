import { ReactNode, useEffect, useState } from 'react';
import { useBreakpoints } from '@shared/utils';
import { LayoutContext } from '@contexts';
interface CustomProviderProps {
    children: ReactNode;
}

export const LayoutProvider: React.FC<CustomProviderProps> = ({ children }) => {
    const [breadcrumbs, setBreadcrumbs] = useState<{ label: string, path: string }[]>([]);

    const [sidenavOpen, setSidenavOpen] = useState(true);

    const { isDesktop } = useBreakpoints();

    const setBreadcrumbsHandler = (breadcrumbs: { label: string, path: string }[]) => {
        setBreadcrumbs(breadcrumbs);
    };

    const setSidenavOpenHandler = (sidenavOpen: boolean) => {
        setSidenavOpen(sidenavOpen);
    };

    useEffect(() => {
        if (isDesktop) {
            setSidenavOpenHandler(true);
        } else {
            setSidenavOpenHandler(false);
        }
    }, [isDesktop]);

    return (
        <LayoutContext.Provider value={{ breadcrumbs, setBreadcrumbsHandler, sidenavOpen, setSidenavOpenHandler }}>
            {children}
        </LayoutContext.Provider>
    );
}