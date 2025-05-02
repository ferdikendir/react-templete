import { createContext } from 'react';

interface LayoutContextType {
    breadcrumbs: { label: string, path: string }[];
    setBreadcrumbsHandler: (breadcrumbs: { label: string, path: string }[]) => void;
    sidenavOpen: boolean;
    setSidenavOpenHandler: (sidenavOpen: boolean) => void;
}

const LayoutContext = createContext<LayoutContextType | null>(null);

export default LayoutContext;