import { Navigate, useLocation } from "react-router-dom";
import { useAuthContext } from "@/contexts/auth/useAuthContext";
import type { ReactNode } from "react";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
    const { user } = useAuthContext()
    const location = useLocation()

    if (!user) {
        <Navigate to={'/login'} state={{ from: location }} replace />
    }

    return children
};

export default ProtectedRoute