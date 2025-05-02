import { IconifyIcon } from '@shared/components';

interface StatusIconProps {
    status: boolean;
    size?: number;
}

export const StatusIcon = ({ status, size = 20 }: StatusIconProps) => {

    return (

        status ? (
            <IconifyIcon
                icon="lets-icons:check-fill"
                className="text-green-500"
                style={{ width: `${size}px`, height: `${size}px` }}
            />
        ) : (
            <IconifyIcon
                icon="carbon:close-filled"
                className="text-red-500"
                style={{ width: `${size}px`, height: `${size}px` }}
            />
        )

    );

};
