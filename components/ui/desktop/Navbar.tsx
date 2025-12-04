"use client";

import "@styles/Navbar.css";
import Link from "next/link";
import { usePathname } from "next/navigation";


const Navbar = () => {

    const pathname = usePathname();

    const noNavbarRoutes = [
        "/auth/login",
        "/auth/signup",
        "/auth/recovery"];

    const hideNavbar = noNavbarRoutes.includes(pathname);


    if (hideNavbar) return null;

    return (
        <nav>
            <div>Logo</div>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/#product">Product</Link></li>
                <li><Link href="/#faq">FAQ</Link></li>
                <li><Link href="/#contact">Contact</Link></li>
                <li><Link className="nav-login-button" href="/auth/login">Login</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;