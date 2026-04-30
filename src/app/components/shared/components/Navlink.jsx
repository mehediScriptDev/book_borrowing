
import Link from 'next/link';
import React from 'react';

const Navlink = ({ href, children }) => {
    return (
        <div>
            <Link href={href}>{children}</Link>
        </div>
    );
};

export default Navlink;