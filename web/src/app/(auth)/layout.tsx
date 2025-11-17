import type { Metadata } from "next";
import "../globals.css";
import iranYekanFont from "@/constans/LocalFont";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "@/context/authContext";
import { GetMe } from "../actions/user/getMe";

export const metadata: Metadata = {
    title: "ورود",
    description: "صفحه ورود برنامه",
};

export const dynamic = "force-dynamic";


export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const meUser = await GetMe();
    return (
        <html lang="fa" dir="rtl">
            <body className={`${iranYekanFont.variable} antialiased`}>
                <AuthProvider initialUser={meUser.user}>
                    {children}
                    <Toaster position="top-center" reverseOrder={false} />
                </AuthProvider>
            </body>
        </html>
    )
}
