import { Outlet } from 'react-router-dom';
import './Layout.scss';
import { LayoutProvider, ThemeProvider } from '@providers';
import { Sidenav, Toolbar } from '@layout';

export function Layout() {
    return (
        <div className="flex flex-row h-screen">

            <LayoutProvider>

                <ThemeProvider>

                    <Sidenav />

                    <div className="flex flex-col main">


                        <Toolbar className='px-6' />

                        <div className="content p-6">

                            <Outlet />
                        </div>
                    </div>

                </ThemeProvider>

            </LayoutProvider>

        </div>
    )
}
