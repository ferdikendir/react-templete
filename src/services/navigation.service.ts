export class NavigaionService {

    static navigationItems: { name: string; path: string; icon: string }[] = [
        {
            name: 'Home',
            path: '/dashboard',
            icon: 'ic:twotone-dashboard'
        },
        {
            name: 'User', path: '/users',
            icon: 'mdi:users'
        },
        {
            name: 'Contact', path: '/contact',
            icon: 'carbon:home'
        },
        {
            name: 'Settings', path: '/settings',
            icon: 'carbon:home'
        },
    ];

}