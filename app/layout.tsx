'use client'

import "./globals.css";

import { usePathname } from "next/navigation";
import Navbar from "@/components/ui/desktop/Navbar";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const pathname = usePathname();

  // rutas que NO deben mostrar el navbar
  const noNavbarRoutes = ["/auth/login", "/auth/signin"];
  const hideNavbar = noNavbarRoutes.includes(pathname);

  return (
    <html lang="en">
      <head>
        <title>Blumenfeld Project</title>
      </head>
      <body >
        {!hideNavbar && <Navbar />}
        {children}
      </body>
    </html>
  );
}
