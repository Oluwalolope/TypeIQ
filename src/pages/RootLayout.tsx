import { Outlet } from "react-router-dom";
import MainHeader from "../components/MainHeader";

const RootLayout = () => {
    return (
        <div className="min-h-screen bg-background pt-4 pb-15 md:pt-8 px-4 md:px-8 lg:px-28">
            <MainHeader />
            <Outlet />
        </div>
    );
}
 
export default RootLayout;