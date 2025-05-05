import './Logo.scss';

export const Logo = ({ hoveredSidenav }: { hoveredSidenav: boolean }) => {

    if (hoveredSidenav) {
        return (
            <div className="logo ">
                <img src="/logo.png" alt="logo" />
            </div>
        );
    }



    return (
        <></>
    );
};
