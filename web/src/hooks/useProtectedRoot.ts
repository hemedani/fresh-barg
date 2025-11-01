// hooks/useProtectedRoute.ts
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/authContext";
import type { UserLevel } from "@/types/types";

export const useProtectedRoute = (options?: {
    requiredLevel?: UserLevel; // فقط برای "Ghost" معنی داره
    redirectIfNotAuth?: string;
    redirectIfUnauthorized?: string;
}) => {
    const {
        requiredLevel,
        redirectIfNotAuth = "/login",
        redirectIfUnauthorized = "/unauthorized",
    } = options || {};

    const { isAuthenticated, userLevel, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (loading) return;

        if (!isAuthenticated) {
            router.replace(redirectIfNotAuth);
            return;
        }

    }, [isAuthenticated, userLevel, loading, requiredLevel, router]);

    return { loading, isAuthenticated, userLevel };
};