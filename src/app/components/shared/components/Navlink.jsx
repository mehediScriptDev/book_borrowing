"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navlink = ({ href, children }) => {
    const pathname = usePathname();
    return (
        <div>
            <Link className={pathname === href ? "border-b-2 border-primaryy" : ""} href={href}>
                {children}
            </Link>
        </div>
    );
};

export default Navlink;