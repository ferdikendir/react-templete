import { Outlet } from 'react-router-dom';

function AuthLayout() {
    return (
        <div className="flex justify-center items-center" style={{
            backgroundImage: `url('/money.jpeg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100vw",
            height: "100vh",
        }}>
            <div className="w-[350px] h-[350px] p-4 bg-white rounded-2xl shadow-2xl">

                <h1 className="text-2xl font-bold text-center py-4">Money Tracker</h1>

                <Outlet />


            </div>

        </div>

    )
}

export default AuthLayout;