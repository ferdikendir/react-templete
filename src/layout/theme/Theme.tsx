import { ThemeType } from '@core/enums';
import './Theme.scss';
import { useTheme } from '@hooks';
import { IconifyIcon } from '@shared/components';

interface ThemeProps {
    hoveredSidenav?: boolean;
    className?: string;
}

export const Theme = ({ hoveredSidenav, className }: ThemeProps) => {

    const { theme, setTheme } = useTheme();

    const getActiveThemeClass = (selectedTheme: ThemeType) => {
        if (theme === selectedTheme) {
            return 'theme-item__active';
        }

        return 'theme-item';
    }


    return (
        <div className={`${className} flex flex-col items-center justify-center w-full gap-y-2`}>
            <div className="flex items-center justify-center">

                <a className='hover:cursor-pointer' onClick={() => setTheme(ThemeType.LIGHT)} style={{ margin: '0 5px', display: hoveredSidenav || theme === ThemeType.LIGHT ? 'block' : 'none' }}>
                    <IconifyIcon icon='ic:round-brightness-5' className={getActiveThemeClass(ThemeType.LIGHT)} />
                </a>

                <a className='hover:cursor-pointer' onClick={() => setTheme(ThemeType.DEFAULT)} style={{ margin: '0 5px', display: hoveredSidenav || theme === ThemeType.DEFAULT ? 'block' : 'none' }}>
                    <IconifyIcon icon='ic:round-brightness-6' className={getActiveThemeClass(ThemeType.DEFAULT)} />
                </a>

                <a className='hover:cursor-pointer' onClick={() => setTheme(ThemeType.DARK)} style={{ margin: '0 5px', display: hoveredSidenav || theme === ThemeType.DARK ? 'block' : 'none' }}>
                    <IconifyIcon icon='ic:round-brightness-4' className={getActiveThemeClass(ThemeType.DARK)} />
                </a>

            </div>
            <p className="!text-[var(--sidenav-item-color)] text-[12px]">Version {__APP_VERSION__}</p>
        </div>
    );

}
