import "@/app/globals.css";

export const metadata = {
    title: "Blumenfeld Project",
    description: "Project management tool",
};

const AuthLayout = ({
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
                {children}
            </body>
        </html>
    );
}


export default AuthLayout;