import './Toolbar.scss';
import { Breadcrumb, ToolbarUser } from '@layout';

interface ToolbarProps {
    className?: string;
}

export function Toolbar({ className }: ToolbarProps) {

    return (
        <div className={`flex items-center justify-between toolbar ${className}`}>

            <Breadcrumb />

            <div className='flex items-center gap-2'>
                <ToolbarUser />
            </div>

        </div>
    )
}