import "@/app/globals.css";

import SideBar from "@/components/ui/desktop/Sidebar";

export const metadata = {
    title: "Blumenfeld Project",
    description: "Project management tool",
};

const UserLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {

    return (
        <html lang="en">
            <head>
                <title>Blumenfeld Project</title>
            </head>
            <body >
                <header>
                    <input type="text" />
                </header>

                {/* Sidebar here */}
                <SideBar />
                {children}
            </body>
        </html>
    );
}


export default UserLayout;