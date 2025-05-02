export class NavigaionService {

    static navigationItems: { name: string; path: string; icon: string }[] = [
        {
            name: 'Home',
            path: '/dashboard',
            icon: 'ic:twotone-dashboard'
        },
        {
            name: 'Banks', path: '/banks',
            icon: 'emojione-monotone:bank'
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