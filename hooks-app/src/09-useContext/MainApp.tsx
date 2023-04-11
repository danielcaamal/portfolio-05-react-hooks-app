
import { Routes, Route, Navigate} from "react-router-dom";
import { HomePage, AboutPage, LoginPage, Navbar } from "./";
import { UserProvider } from "./context/UserProvider";


export const MainApp = () => {
    return (
        <UserProvider>
            <Navbar />
            <hr />


            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/login" element={<LoginPage />} />

                {/* <Route path="*" element={<h1>404: Not Found</h1>} /> */}
                <Route path="*" element={<Navigate to="/"/>} />
            </Routes>
        </UserProvider>
    );
};