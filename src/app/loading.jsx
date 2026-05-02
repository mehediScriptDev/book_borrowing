import React from 'react';

const loading = () => {
    return (
        <div className='h-screen flex items-center justify-center'>
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primaryy"></div>
        </div>
    );
};

export default loading;