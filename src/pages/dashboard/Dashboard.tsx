import { useEffect } from 'react';
import { useLayout } from '@hooks';

const Dashboard = () => {
    const { setBreadcrumbsHandler } = useLayout();

    useEffect(() => {
        setBreadcrumbsHandler([{ label: 'Dashboard', path: '/dashboard' }]);
    }, []);




    return (
        <div className="w-full h-full bg-card grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 px-2">

            <div className="py-4 w-full h-full overflow-y-auto">

                Column 1

            </div>

            <div className="py-4 w-full h-full overflow-y-auto">
                Column 2
            </div>

            <div className="py-4 w-full">
                Column 3
            </div>
        </div>
    );
};

export default Dashboard;
