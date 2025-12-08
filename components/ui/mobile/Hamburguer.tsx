"use client";

import { useState } from "react";
import "@styles/Hamburguer.css";
import Link from "next/link";

const Hamburguer = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* Botón hamburguesa */}
            {!open && (
                <button
                    className="hamburguer-button"
                    onClick={() => setOpen(true)}
                    aria-label="Open menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            )}

            {/* Overlay Menu */}
            <div className={`overlay-menu ${open ? "show" : ""}`}>

                {/* Botón X */}
                <button
                    className="close-button"
                    onClick={() => setOpen(false)}
                    aria-label="Close menu"
                >
                    ✕
                </button>

                <div className="menu-center">
                    <Link href="/">Home</Link>
                    <Link href="/product">Product</Link>
                    <Link href="/#faq">FAQ</Link>
                    <Link href="/about">About</Link>

                </div>

                <div className="menu-bottom">
                    <div className="divider"></div>
                    <Link className="login-button" href="/login">Login</Link>
                </div>
            </div>
        </>
    );
}

export default Hamburguer;
