import "./globals.css";

import Navbar from "@/components/ui/desktop/Navbar";



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
        <Navbar />
        {children}
      </body>
    </html>
  );
}
