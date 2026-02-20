import { Outlet } from "react-router-dom";
import Header from "../components/header";

export default function RootLayout() {
    return (
        <div >
            <Header />
            <main className="mx-4 md:mx-8">
                <Outlet />
            </main>
        </div>
    );
} 