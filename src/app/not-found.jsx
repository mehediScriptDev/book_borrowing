import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className='flex flex-col gap-2.5 sm:gap-8 justify-center items-center h-screen'>
            <h1 className='text-2xl text-black font-bold sm:text-3xl md:text-4xl'>404 Page Not Found</h1>
            <Link href="/" className='btn bg-primaryy text-white border-none rounded-full gap-2'>
              Back home
            </Link>
        </div>
    );
};

export default NotFound;