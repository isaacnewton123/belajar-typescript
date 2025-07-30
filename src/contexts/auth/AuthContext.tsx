import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import type { AuthProviderProps, myjwtpayload } from './types';
import { AuthContext } from "./useAuthContext";
import { useLoadingContext } from "../useLoadingContext";
import type { User } from "@/services/types";

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState<User | null>(null);
    const { setLoading } = useLoadingContext();

    useEffect(() => {
        console.log(user)
    }, [user])


    useEffect(() => {
        setLoading(true);
        const token = localStorage.getItem('token');
        const savedUserJSON = localStorage.getItem('user'); 

        if (token && savedUserJSON) {
            try {
                const isExpired = jwtDecode<myjwtpayload>(token).exp * 1000 < Date.now();

                if (isExpired) {
                    localStorage.removeItem('token');
                    localStorage.removeItem('user');
                    setUser(null);
                } else {
                    const savedUser = JSON.parse(savedUserJSON); 
                    setUser(savedUser);
                }
            } catch (error) {
                console.error("Gagal mem-parse data, membersihkan storage.", error);
                localStorage.removeItem('token');
                localStorage.removeItem('user');
                setUser(null);
            }
        }
        
        setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); 

    const value = {
        user,
        setUser,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};