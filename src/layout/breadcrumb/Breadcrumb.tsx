import { useNavigate } from 'react-router-dom';
import './Breadcrumb.scss';
import { Icon } from '@iconify/react';
import { useLayout } from '@hooks';

export const Breadcrumb = () => {

    const { breadcrumbs } = useLayout();

    const navigate = useNavigate();

    const handleBreadcrumbClick = (path: string) => {
        navigate(path);
    };

    return (

        <div className='breadcrumb flex flex-row items-center gap-2'>

            <Icon className='breadcrumb__item' style={{ width: '20px', height: '20px' }} icon='ic:outline-home'
                onClick={() => handleBreadcrumbClick('dashboard')} />
            <span>-</span>

            {breadcrumbs.map((breadcrumb, index) => {
                return (
                    <span className='breadcrumb__item' key={index}>
                        <span className='breadcrumb__item__label' onClick={() => handleBreadcrumbClick(breadcrumb.path)}>
                            {breadcrumb.label}
                        </span>

                        {index !== breadcrumbs.length - 1 && <span>-</span>}

                    </span>
                )
            })}
        </div>

    );

};
