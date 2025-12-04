"use client";

import "@styles/Navbar.css";
import Link from "next/link";

const Navbar = () => {

    return (
        <nav>
            <div>Logo</div>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/#product">Product</Link></li>
                <li><Link href="/#faq">FAQ</Link></li>
                <li><Link href="/#contact">Contact</Link></li>
                <li><Link className="nav-login-button" href="/login">Login</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;