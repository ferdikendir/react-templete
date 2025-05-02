
import { Icon } from '@iconify/react';
import { useLocation, useNavigate } from 'react-router-dom';
import './SidenavItem.scss';

interface SidenavItemProps {
    item: { name: string; path: string; icon: string };
    className?: string;
}

export const SidenavItem = ({ item, className }: SidenavItemProps) => {

    const location = useLocation();
    const navigate = useNavigate();

    const redirect = (item: { name: string; path: string; }) => {
        navigate(item.path);
    };

    const itemClassName = `${className} flex flex-row items-center gap-2 sidenav__item cursor-pointer p-1 ${location.pathname === item.path ? 'sidenav__item sidenav__item--active sidenav--active' : ''}`;

    const iconClassName = `sidenav__item-icon ${location.pathname === item.path ? 'sidenav__item-icon--active' : ''}`;

    return (<a onClick={() => redirect(item)} className={itemClassName}>
        <Icon className={iconClassName} icon={item.icon} />
        <span className='sidenav__item-label'>{item.name}</span>
    </a>)
};
