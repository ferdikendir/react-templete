import './Sidenav.scss';
import { useEffect, useState } from 'react';
import { useBreakpoints } from '@shared/utils';
import { useLayout } from '@hooks';
import { IconifyIcon } from '@shared/components';
import { Logo, SidenavItem, Theme } from '@layout';
import { NavigaionService } from '@services';

export function Sidenav() {

    const menuItems = NavigaionService.navigationItems;

    const { sidenavOpen, setSidenavOpenHandler } = useLayout();

    const [isHoveredSidenav, setIsHoveredSidenav] = useState(sidenavOpen);

    const { isDesktop } = useBreakpoints();

    useEffect(() => {

        if (sidenavOpen) {
            document.documentElement.style.setProperty('--sidenav-position', 'relative');
            document.documentElement.style.setProperty('--sidenav-left-margin', '0');
            document.documentElement.style.setProperty('--content-width', 'calc(100vw - var(--sidenav-width))');

        } else {
            document.documentElement.style.setProperty('--sidenav-position', 'absolute');
            document.documentElement.style.setProperty('--sidenav-left-margin', 'var(--sidenav-collapsed-width)');
            document.documentElement.style.setProperty('--content-width', 'calc(100vw - var(--sidenav-collapsed-width))');
        }
    }, [sidenavOpen]);

    return (
        <div className={`flex flex-col sidenav h-screen justify-start ${!sidenavOpen ? 'collapsed' : ''}`}
            onMouseEnter={() => setIsHoveredSidenav(true)}
            onMouseLeave={() => setIsHoveredSidenav(false)}
        >

            <div className='items'>
                <div className={`flex flex-row items-center p-2 sidenav-toolbar justify-center`}>

                    <Logo hoveredSidenav={sidenavOpen ? sidenavOpen : isHoveredSidenav} />

                    <a className={`cursor-pointer p-1 flex ${sidenavOpen ? sidenavOpen : isHoveredSidenav ? 'ml-auto right-0' : ''}`}
                        onClick={() => setSidenavOpenHandler(!sidenavOpen)}>

                        {isDesktop && (sidenavOpen ?
                            <IconifyIcon icon='ic:twotone-radio-button-checked' width={14} height={14} style={{ color: 'var(--sidenav-item-color)' }} /> :
                            <IconifyIcon icon='ic:twotone-radio-button-unchecked' width={14} height={14} style={{ color: 'var(--sidenav-item-color)' }} />)
                        }

                    </a>

                </div>

                <div className='py-2'>
                    <hr className='text-gray-500' />
                </div>

                {menuItems.map((item, index) => {

                    return (<SidenavItem key={index} item={item} className='px-6 py-2' />)
                })}
            </div>

            <div className='flex flex-row items-center opacity-70'>

                <Theme className='theme' hoveredSidenav={sidenavOpen ? sidenavOpen : isHoveredSidenav} />

            </div>

        </div>
    );

}