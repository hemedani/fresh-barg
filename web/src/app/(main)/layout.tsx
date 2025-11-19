import { AuthProvider } from "@/context/authContext";
import "../globals.css";
import iranYekanFont from "@/constans/LocalFont";
import { GetMe } from "../actions/user/getMe";
import { PositionProvider } from "@/context/PositionContext";
import { cookies } from "next/headers";
import { getActivePositionId } from "../actions/position/getActivePosition";

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const meUser = await GetMe();

    const cookieStore = await cookies()
    const userCookie = cookieStore.get("user")
    const user = userCookie ? JSON.parse(userCookie.value) : null
    const activePositionId = await getActivePositionId()

    return (
        <html lang="fa" dir="rtl">
            <body className={`${iranYekanFont.variable} antialiased`}>
                <AuthProvider initialUser={meUser.user} >
                    <PositionProvider initialActiveId={activePositionId} initialPositions={user?.position || []}>

                        {children}
                    </PositionProvider>
                </AuthProvider>
            </body>
        </html>
    )
}
