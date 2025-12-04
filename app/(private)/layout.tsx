import "@/app/globals.css";

export const metadata = {
    title: "Blumenfeld Project",
    description: "Project management tool",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {


    return (
        <html lang="en">
            <head>
                <title>Blumenfeld Project</title>
            </head>
            <body >
                {/* Sidebar here */}
                {children}
            </body>
        </html>
    );
}
