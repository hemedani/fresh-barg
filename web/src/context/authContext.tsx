"use client";
import { createContext, useContext, useState } from "react";
import Cookies from "js-cookie";
import { GetMe } from "@/app/actions/user/getMe";
import { GetMeResponse, UserLevel } from "@/types/types";
import { redirect } from "next/navigation";

interface AuthContextType {
    isAuthenticated: boolean;
    userLevel: UserLevel;
    user: GetMeResponse["user"] | null;
    loading: boolean;
    setUserAuth: (token: string) => void;
    logout: () => void;
    refresh: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error("useAuth must be used within AuthProvider");
    return ctx;
};

export const AuthProvider = ({
    children,
    initialUser,
}: {
    children: React.ReactNode;
    initialUser: GetMeResponse["user"] | null;
}) => {
    const [user, setUser] = useState(initialUser);
    const [userLevel, setUserLevel] = useState<UserLevel>(
        initialUser?.position?.[0]?.level || null
    );
    const [loading, setLoading] = useState(false);

    const isAuthenticated = !!user;

    const clearAuth = () => {
        Cookies.remove("token");
        setUser(null);
        setUserLevel(null);
    };

    const setUserAuth = async (token: string) => {
        Cookies.set("token", token);
        setLoading(true);
        try {
            const res = await GetMe();
            if (res.success && res.user) {
                setUser(res.user);
                setUserLevel(res.user.position[0].level);
            } else clearAuth();
        } finally {
            setLoading(false);
        }
    };

    const logout = () => {
        clearAuth()
        redirect("/")
    }

    const refresh = async () => {
        setLoading(true);
        try {
            const res = await GetMe();
            if (res.success && res.user) {
                setUser(res.user);
                setUserLevel(res.user.position[0].level);
            } else clearAuth();
        } finally {
            setLoading(false);
        }
    };

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated,
                userLevel,
                user,
                loading,
                setUserAuth,
                logout,
                refresh,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
