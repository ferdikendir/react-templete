import { Icon } from '@iconify/react';

interface IconifyIconProps {
    icon: string;
    className?: string;
    style?: React.CSSProperties;
    width?: string | number;
    height?: string | number;
}

export function IconifyIcon({ icon, className, style, height, width }: IconifyIconProps) {
    return <Icon className={className} style={{ ...style, width: width ?? 'var(--sidenav-item-icon-width)', height: height ?? 'var(--sidenav-item-icon-height)' }} icon={icon} />;
}