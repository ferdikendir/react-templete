import { useState } from 'react';
import * as Popover from '@radix-ui/react-popover';
import './ToolbarUser.scss';
import { useNavigate } from 'react-router-dom';
import { IconifyIcon } from '@shared/components';
import { useAuth } from '@hooks';

export const ToolbarUser = () => {

    const navigate = useNavigate();

    const { getUser, logout } = useAuth();

    const [open, setOpen] = useState(false);

    const user = getUser();

    const userAvatar = user?.name.charAt(0).toUpperCase() + user?.lastName.charAt(0).toUpperCase();

    const toolbarItems = [
        {
            id: '1',
            icon: 'ic:twotone-account-circle',
            label: 'My Profile',
            description: 'View your profile',
            colorClass: 'text-gray-500',
            route: '/profile'
        }
    ];

    const navigateByRoute = (route: string) => {
        navigate(route);
        setOpen(false);
    };

    const handleSafeLogout = () => {
        logout();
        setOpen(false);
    };

    const rightIcon = 'ic:twotone-chevron-right';

    return (
        <Popover.Root open={open} onOpenChange={setOpen} >

            <Popover.Trigger className='cursor-pointer flex items-center space-x-2 hover:bg-[var(--background-hover)] h-[50px] rounded-lg p-2'>
                <span className="font-bold text-[16px] leading-snug text">{user.displayName}</span>
                {userAvatar && <div className='bg-gray-300 rounded-full size-[40px] flex items-center justify-center !text-white font-bold text-xl'>{userAvatar}</div>}
            </Popover.Trigger>

            <Popover.Portal>
                <Popover.Content
                    className="dropdown mr-4"
                    sideOffset={5}
                >
                    <div className="dropdown-header flex flex-row items-center gap-2">
                        {userAvatar && <div className='bg-gray-300 rounded-full size-[50px] flex items-center justify-center text-white font-bold text-2xl'>{userAvatar}</div>}
                        <span className="font-bold text-[20px] leading-snug dropdown-heading text-white">{user.displayName}</span>
                    </div>

                    <div className="dropdown-content">
                        {toolbarItems.map(item => (
                            <a className="dropdown-content__item flex flex-row items-center justify-start cursor-pointer" key={item.id} onClick={() => navigateByRoute(item.route)}>

                                <IconifyIcon icon={item.icon} style={{ width: '24px', height: '24px' }} className={`dropdown-content-icon ${item.colorClass}`} />

                                <div className="flex flex-auto dropdown-content__item-label">{item.label}</div>

                                <IconifyIcon icon={rightIcon} style={{ width: '24px', height: '24px' }} className="dropdown-content-icon text-gray-500 dropdown-content-chevron" />

                            </a>))}
                    </div>

                    <div className="dropdown-footer">

                        <div className="dropdown-footer-text">

                            <a className="dropdown-footer-text-link font-medium text-[14px] hover:bg-[var(--background-hover)] hover:rounded-lg hover:cursor-pointer">Update Password</a>

                        </div>

                        <div className="dropdown-footer-text">

                            <a className="dropdown-footer-text-link font-medium text-[14px] hover:bg-[var(--background-hover)] hover:rounded-lg hover:cursor-pointer" onClick={() => handleSafeLogout()}>Safe Lagout</a>

                        </div>

                    </div>

                    <Popover.Arrow className="fill-white" />
                </Popover.Content>
            </Popover.Portal>

        </Popover.Root>

    );


};
