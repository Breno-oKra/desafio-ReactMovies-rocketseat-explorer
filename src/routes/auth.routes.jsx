import { Routes,Route } from "react-router-dom";
import { SingIn } from "../pages/SingIn";
import { SingUp } from "../pages/SingUp";
import { Navigate } from "react-router-dom";
export function AuthRoutes(){
    const user = localStorage.getItem("@rocketnotes:user");
    return(
        <Routes>
            <Route path="/" element={<SingIn/>} />
            <Route path="/register" element={<SingUp/>} />
            {!user && <Route path="*" element={<Navigate to="/" />} />}
        </Routes>
    )
}